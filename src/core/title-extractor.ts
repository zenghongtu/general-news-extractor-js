import { TITLE_TAG_SELECTOR, TITLE_SPLIT_CHAR_PATTERN } from '../consts'

export default class TitleExtractor {
  extractBySelector($: CheerioStatic, titleSelector: string) {
    if (titleSelector) {
      $(titleSelector)
        .text()
        .trim()
    }
    return ''
  }
  extractByTitle($: CheerioStatic) {
    const text = $('title')
      .text()
      .trim()
      .split(new RegExp(TITLE_SPLIT_CHAR_PATTERN, 'ig'))[0]

    return text || ''
  }
  extractByTag($: CheerioStatic) {
    return (
      $(TITLE_TAG_SELECTOR)
        .text()
        .trim() || ''
    )
  }
  extract($: CheerioStatic, titleSelector: string) {
    const title =
      this.extractBySelector($, titleSelector) || this.extractByTitle($) || this.extractByTag($)
    return title
  }
}
