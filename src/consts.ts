export const USELESS_TAG = [
  'style',
  'script',
  'link',
  'video',
  'iframe',
  'source',
  'picture',
  'header'
]

// if one tag in the follow list does not contain any child node nor content, it could be removed
export const TAGS_CAN_BE_REMOVE_IF_EMPTY = ['section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span']

export const TAGS_CAN_NOT_BE_REMOVE_IF_EMPTY = ['span', 'em', 'p', 'i']

export const USELESS_ATTR = [
  'share',
  'contribution',
  'copyright',
  'disclaimer',
  'recommend',
  'related',
  'footer',
  'comment',
  'social',
  'submeta'
]
export const TITLE_TAG_SELECTOR = 'h1,h2,h3,h4'

export const TITLE_SPLIT_CHAR_PATTERN = '[-_|]'
