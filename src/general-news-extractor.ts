import ContentExtractor from './core/content-extractor'
import TitleExtractor from './core/title-extractor'
import AuthorExtractor from './core/author-extractor'
import DateTimeExtractor from './core/datetime-extractor'
import { removeNoiseNode, preParse } from './utils'

export default class GeneralNewsExtractor {
  contentExtractor: ContentExtractor
  titleExtractor: TitleExtractor
  authorExtractor: AuthorExtractor
  dateTimerExtractor: DateTimeExtractor
  constructor() {
    this.contentExtractor = new ContentExtractor()
    this.titleExtractor = new TitleExtractor()
    this.authorExtractor = new AuthorExtractor()
    this.dateTimerExtractor = new DateTimeExtractor()
  }
  extract(
    html: string,
    { titleSelector = '', authorSelector = '', dateTimeSelector = '', noiseNodeList = [] } = {}
  ) {
    const $ = preParse(html)
    removeNoiseNode($, noiseNodeList)
    const content = this.contentExtractor.extract($)
    const title = this.titleExtractor.extract($, titleSelector)
    const author = this.authorExtractor.extract($, authorSelector)
    const publishTime = this.dateTimerExtractor.extract($, dateTimeSelector)

    return { title, author, publishTime, content: content[0].text }
  }
}
