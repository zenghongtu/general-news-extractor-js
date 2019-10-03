import GeneralNewsExtractor from '../src/general-news-extractor'
import * as glob from 'glob'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const pGlob = pattern => {
  return new Promise((resolve, reject) => {
    glob(pattern, function(er, files) {
      if (er) {
        reject(er)
      }
      resolve(files)
    })
  })
}

const saveFilename = resolve(__dirname, './test-results.txt')

describe('GeneralNewsExtractor test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('GeneralNewsExtractorClass is instantiable', async () => {
    writeFileSync(saveFilename, '')
    const files = (await pGlob('test/**/*.html')) as string[]

    for (const file of files) {
      const html = readFileSync(file, { encoding: 'utf8' })
      const result = new GeneralNewsExtractor().extract(html)
      const data = `
      ${file}
      ${JSON.stringify(result)}
      ===================\n
      `
      writeFileSync(saveFilename, data, { flag: 'a' })
    }
  })
})
