import { DATETIME_PATTERN_LIST } from '../consts'

export default class DateTimeExtractor {
  extractBySelector($, authorSelector) {
    if (authorSelector) {
      $(authorSelector)
        .text()
        .trim()
    }
    return ''
  }

  extractByPattern($: CheerioStatic) {
    const content = $('body  *')
      .contents()
      .filter((idx, el) => {
        return el.type === 'text'
      })
      .map((idx, el) => {
        return el.data
      })
      .get()
      .join(' ')

    for (const pattern of DATETIME_PATTERN_LIST) {
      const result = content.match(new RegExp(pattern))
      if (result) {
        return result[1]
      }
    }
    return ''
  }

  extract($, dateTimeSelector = '') {
    const dateTime = this.extractBySelector($, dateTimeSelector) || this.extractByPattern($)

    return dateTime
  }
}
