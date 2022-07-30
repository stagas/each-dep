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
})
