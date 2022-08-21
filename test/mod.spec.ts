// @env node
import * as path from 'path'
import { eachDep } from '../src/each-dep'

describe('eachDep', () => {
  it('works', async () => {
    let deps = []
    for await (const dep of eachDep(__filename)) {
      deps.push(dep)
    }
    deps = deps.map(x => path.relative(__dirname, x))
    expect(deps).toMatchSnapshot()
  })

  it('complex', async () => {
    let deps = []
    for await (const dep of eachDep(path.join(__dirname, 'fixture', 'a.ts'))) {
      deps.push(dep)
    }
    deps = deps.map(x => path.relative(__dirname, x))
    expect(deps).toMatchSnapshot()
  })

  it('dot', async () => {
    let deps = []
    for await (const dep of eachDep(path.join(__dirname, 'fixture', 'dot', 'dot.js'))) {
      deps.push(dep)
    }
    deps = deps.map(x => path.relative(__dirname, x))
    expect(deps).toMatchSnapshot()
  })

  it('with external', async () => {
    let deps = []
    for await (const dep of eachDep(path.join(__dirname, 'fixture', 'pkg-a', 'index.js'), { external: true })) {
      deps.push(dep)
    }
    deps = deps.map(x => path.relative(__dirname, x))
    expect(deps).toMatchSnapshot()
  })

  it('cache', async () => {
    let deps = []
    const cache = new Map()
    for await (const dep of eachDep(path.join(__dirname, 'fixture', 'pkg-a', 'index.js'), { external: true, cache })) {
      deps.push(dep)
    }
    deps = deps.map(x => path.relative(__dirname, x))
    expect(deps).toMatchSnapshot()
    expect([...cache]).toMatchSnapshot()
  })
})
