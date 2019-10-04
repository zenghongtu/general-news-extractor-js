import { TITLE_TAG_SELECTOR, TITLE_SPLIT_CHAR_PATTERN } from '../consts'

export default class TitleExtractor {
  extractBySelector($, titleSelector) {
    if (titleSelector) {
      $(titleSelector)
        .text()
        .trim()
    }
    return ''
  }
  extractByTitle($) {
    const text = $('title')
      .text()
      .trim()
      .split(new RegExp(TITLE_SPLIT_CHAR_PATTERN, 'ig'))[0]

    return text || ''
  }
  extractByTag($) {
    return (
      $(TITLE_TAG_SELECTOR)
        .text()
        .trim() || ''
    )
  }
  extract($, titleSelector) {
    const title =
      this.extractBySelector($, titleSelector) || this.extractByTitle($) || this.extractByTag($)
    return title
  }
}
