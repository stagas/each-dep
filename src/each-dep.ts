import * as fs from 'fs/promises'
import * as path from 'path'

const matchers =
  /((im|ex)port.*?from\s+['"](?<id1>[^'"]+)['"])|(import\(?\s*['"](?<id2>[^'"]+)['"])|(require\(\s*['"](?<id3>[^'"]+)['"])/g

const parseIds = (x: string) =>
  [...x.matchAll(matchers)]
    .map(x => x.groups?.id1 || x.groups?.id2 || x.groups?.id3).filter(Boolean) as string[]

const extensions = [
  '',
  '.ts',
  '.mjs',
  '.js',
  '.tsx',
  '.jsx',
  '.json',
  '.mts',
  '.mtsx',
  '.mjsx',
]

export interface EachDepOptions {
  cache?: Map<string, { source: string; ids: (readonly [string, string])[] }>
  external?: boolean
}

export async function* eachDep(
  inputFilename: string,
  options: EachDepOptions = {},
  seen = new Set<string>(),
): AsyncGenerator<string, void, undefined> {
  const resolved = path.resolve(inputFilename)
  const parsed = path.parse(resolved)

  yield resolved
  seen.add(resolved)

  try {
    let ids: (readonly [string, string])[] = []
    let source: string

    if (options.cache && options.cache.has(resolved)) {
      ;({ source, ids } = options.cache.get(resolved)!)
    } else {
      source = await fs.readFile(resolved, 'utf-8')

      if (options.cache) {
        options.cache.set(resolved, { source, ids })
      }

      ids.push(...(await Promise.all(
        parseIds(source).map(async x => {
          if (x.startsWith('.')) {
            const joined = path.join(parsed.dir, x)
            for (const ext of extensions) {
              const filename = `${joined}${ext}`
              try {
                const stat = await fs.stat(filename)
                if (stat.isFile()) return [x, filename] as const
                else if (stat.isDirectory()) {
                  for (const indexExt of extensions) {
                    const index = path.join(filename, `index${indexExt}`)
                    try {
                      const stat = await fs.stat(index)
                      if (stat.isFile()) return [x, index] as const
                    } catch {}
                  }
                }
              } catch {}
            }
          } else {
            if (options.external) {
              try {
                const importMetaResolve = (await eval('import(\'import-meta-resolve\')')).resolve
                const result = await importMetaResolve(x, `file://${resolved}`)
                const { pathname } = new URL(result)
                if (pathname.startsWith('/')) return [x, pathname] as const
              } catch {}
            }
          }
        })
      )).filter(Boolean) as (readonly [string, string])[])
    }

    const unseen = ids.filter(([, x]) => {
      if (!seen.has(x)) {
        seen.add(x)
        return x
      }
    })

    if (unseen.length) {
      for (const [, id] of unseen) yield* eachDep(id, options, seen)
    }
  } catch (error) {
    console.error(error)
  }
}
