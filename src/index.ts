import { writeFile } from 'fs/promises'
import { resolve } from 'path'

type Config = {
  configs: { filename: string; content: string }[]
}

async function main(cwd?: string) {
  cwd = cwd ? resolve(cwd) : process.cwd()
  const { configs }: Config = await import(`${cwd}/config.json`)

  for (const config of configs) {
    const { filename, content } = config
    await writeFile(filename, content)
  }
}

main()

// config.json
// {
//   "configs": [
//     {
//       "filename": ".prettierrc.js",
//       "content": "module.exports = {\n  singleQuote: true,\n  trailingComma: 'all',\n  arrowParens: 'always',\n  printWidth: 100,\n  tabWidth: 2,\n};\n"
//     }
//   ]
// }
