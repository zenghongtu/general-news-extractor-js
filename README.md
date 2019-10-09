# general-news-extractor

一个新闻网页正文通用抽取工具，还有标题、作者和发布日期。

该项目启发自[kingname/GeneralNewsExtractor](https://github.com/kingname/GeneralNewsExtractor)，由 Python 迁移到 Node.js ，并做了一些改动，提高提取准确度。

## Online DEMO

[https://general-news-extractor-demo.stayin.cn/](https://general-news-extractor-demo.stayin.cn/)

## Installation

Using npm:

```bash
npm i general-news-extractor
```

## Usage

```js
const GeneralNewsExtractor = require('general-news-extractor')

const htmlString = `` // HTML for a news page

const gne = new GeneralNewsExtractor()

// gne.extract( html: string, { titleSelector = '', authorSelector = '', dateTimeSelector = '', noiseNodeList = [] } = {})
const result = gne.extract(htmlString, {})
```

## TODO

- [ ] Run in browser

## Thanks

- [kingname/GeneralNewsExtractor](https://github.com/kingname/GeneralNewsExtractor)
- [基于文本及符号密度的网页正文提取方法 - 中国知网](https://kns.cnki.net/KCMS/detail/detail.aspx?dbcode=CJFQ&dbname=CJFDLAST2019&filename=GWDZ201908029&v=MDY4MTRxVHJXTTFGckNVUkxPZmJ1Wm5GQ2poVXJyQklqclBkTEc0SDlqTXA0OUhiWVI4ZVgxTHV4WVM3RGgxVDM=)

## License

MIT © [zenghongtu](https://github.com/zenghongtu)
