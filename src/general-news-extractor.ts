import ContentExtractor from './core/content-extractor'
import { removeNoiseNode, preParse } from './utils'

export default class GeneralNewsExtractor {
  contentExtractor: any
  constructor() {
    this.contentExtractor = new ContentExtractor()
  }
  extract(html: string, titleSelector = '', noiseNodeList: string[] = []) {
    const $ = preParse(html)
    removeNoiseNode($, noiseNodeList)
    const results = this.contentExtractor.extract($)

    return results[0].text
  }
}
