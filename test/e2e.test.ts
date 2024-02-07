import { resolve } from 'path'
import { readdir, unlink } from 'fs/promises'
import { main } from '../src'

const fixturesDir = resolve(__dirname, 'fixtures')

describe('config', () => {
  it('should write files', async () => {
    const cwd = fixturesDir + '/basic'
    await main(cwd)
    const files = await readdir(cwd)
    expect(files).toContain('a.txt')
    await unlink(cwd + '/a.txt')
  })
})
