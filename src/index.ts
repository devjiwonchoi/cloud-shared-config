import { writeFile } from 'fs/promises'
import { resolve } from 'path'

type Config = {
  configs: { filename: string; content: string }[]
}

export async function main(cwd?: string) {
  cwd = cwd ? resolve(cwd) : process.cwd()
  const { configs }: Config = await import(`${cwd}/config.json`)

  for (const config of configs) {
    const { filename, content } = config
    await writeFile(`${cwd}/${filename}`, content)
  }
}
