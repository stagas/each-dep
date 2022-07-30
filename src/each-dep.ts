import * as fs from 'fs/promises'
import * as path from 'path'

const matchers =
  /(import.*from\s+['"](?<id1>[^'"]+)['"])|(import\(?\s*['"](?<id2>[^'"]+)['"])|(require\(\s*['"](?<id3>[^'"]+)['"])/g

const parseIds = (x: string) =>
  [...x.matchAll(matchers)]
    .map(x => x.groups?.id1 || x.groups?.id2 || x.groups?.id3).filter(Boolean) as string[]

const extensions = ['', '.ts', '.tsx', '.js', '.jsx', '.json']

export async function* eachDep(
  inputFilename: string,
  seen = new Set<string>(),
): AsyncGenerator<string, void, undefined> {
  const resolved = path.resolve(inputFilename)
  const parsed = path.parse(resolved)
  yield resolved
  try {
    const source = await fs.readFile(resolved, 'utf-8')
    const ids = (await Promise.all(
      parseIds(source).map(async x => {
        const joined = path.join(parsed.dir, x)
        for (const ext of extensions) {
          const filename = joined + ext
          try {
            const stat = await fs.stat(filename)
            if (stat.isFile()) return filename
            else if (stat.isDirectory()) {
              for (const indexExt of extensions) {
                const index = path.join(filename, 'index' + indexExt)
                try {
                  const stat = await fs.stat(index)
                  if (stat.isFile()) return index
                } catch {}
              }
            }
          } catch {}
        }
        return ''
      })
    )).filter(Boolean).filter(x => {
      if (!seen.has(x)) {
        seen.add(x)
        return x
      }
    })

    if (ids.length) {
      for (const id of ids) yield* eachDep(id, seen)
    }
  } catch {}
}
