import ContentExtractor from './core/content-extractor'
import TitleExtractor from './core/title-extractor'
import { removeNoiseNode, preParse } from './utils'

export default class GeneralNewsExtractor {
  contentExtractor: ContentExtractor
  titleExtractor: TitleExtractor
  constructor() {
    this.contentExtractor = new ContentExtractor()
    this.titleExtractor = new TitleExtractor()
  }
  extract(html: string, titleSelector = '', noiseNodeList: string[] = []) {
    const $ = preParse(html)
    removeNoiseNode($, noiseNodeList)
    const results = this.contentExtractor.extract($)
    const title = this.titleExtractor.extract($, titleSelector)

    return results[0].text
  }
}
