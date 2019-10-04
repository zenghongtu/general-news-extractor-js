const Koa = require('koa')
const Router = require('koa-router')
const fetch = require('node-fetch')
const GeneralNewsExtractor = require('general-news-extractor')

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.response.type = 'html'
  ctx.body = `
  <h1>GeneralNewsExtractor Demo</h1>
  <div>
    <ul>
      <li>
        <a href="http://baijiahao.baidu.com/s?id=1646431966952708911"
          >http://baijiahao.baidu.com/s?id=1646431966952708911</a
        >
        <button onclick="handleClickOpenUrl('https://news.ifeng.com/c/7qV0OaOFL9L')">
          extractor
        </button>
      </li>
      <li>
        <a href="https://news.ifeng.com/c/7qV0OaOFL9L">https://news.ifeng.com/c/7qV0OaOFL9L</a>
        <button onclick="handleClickOpenUrl('https://news.ifeng.com/c/7qV0OaOFL9L')">
          extractor
        </button>
      </li>
      <li>
        <a href="https://money.163.com/19/1004/08/EQKLMJVC00259DLP.html"
          >https://money.163.com/19/1004/08/EQKLMJVC00259DLP.html</a
        >
        <button
          onclick="handleClickOpenUrl('https://money.163.com/19/1004/08/EQKLMJVC00259DLP.html')"
        >
          extractor
        </button>
      </li>
      <li>
        <a href="https://news.sina.com.cn/c/2019-10-04/doc-iicezzrr0017275.shtml">https://news.sina.com.cn/c/2019-10-04/doc-iicezzrr0017275.shtml</a>
        <button onclick="handleClickOpenUrl('https://news.sina.com.cn/c/2019-10-04/doc-iicezzrr0017275.shtml')">
          extractor
        </button>
      </li>
      <li>
        <a href="https://new.qq.com/rain/a/20191004A0415600">https://new.qq.com/rain/a/20191004A0415600</a>
        <button onclick="handleClickOpenUrl('https://new.qq.com/rain/a/20191004A0415600')">
          extractor
        </button>
      </li>
      <li>
        <a
          href="https://www.theguardian.com/sport/2019/oct/03/mlb-playoff-preview-will-the-dodgers-finally-hold-their-nerve"
          >https://www.theguardian.com/sport/2019/oct/03/mlb-playoff-preview-will-the-dodgers-finally-hold-their-nerve</a
        >
        <button
          onclick="handleClickOpenUrl('https://www.theguardian.com/sport/2019/oct/03/mlb-playoff-preview-will-the-dodgers-finally-hold-their-nerve')"
        >
          extractor
        </button>
      </li>
    </ul>
    <h3>or</h3>
    <div>
      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<input
        id="input"
        type="text"
        placeholder="Enter a news url"
        style="width: 200px"
      />
      &nbsp;
      <button onclick="handleClickOpenUrl(document.querySelector('#input').value)">
        extractor
      </button>
    </div>
    <script>
      const handleClickOpenUrl = value => {
        window.open('http://' + location.host + '/go?url=' + value)
      }
    </script>
  </div>

  `
})

router.get('/go', async (ctx, next) => {
  const {
    query: { url }
  } = ctx.request
  if (!url || !url.startsWith('http')) {
    ctx.throw(400)
  }

  const body = await fetch(url).then(res => res.textConverted())

  const gne = new GeneralNewsExtractor()
  const result = gne.extract(body)
  result.source = url

  ctx.body = JSON.stringify(result, null, 4)
})

app.use(router.routes()).use(router.allowedMethods())

// app.listen(3000)

module.exports = app.callback()
