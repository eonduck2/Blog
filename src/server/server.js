const http = require(`node:http`);
const fs = require(`node:fs`);
const readFiles = require(`./readFiles.js`);

const checkTypes = (req, res) => {};

http
  .createServer((req, res) => {
    let url = req.url;
    let fileExtension = url.split(`.`)[1];
    let path = url.slice(1, url.length);

    console.log(`요청 url: ${url}`);
    console.log(`지정 경로: ${path}`);
    if (url === `/`) {
      readFiles(req, res, `./public/index.html`, `text/html`);
    } else if (fileExtension === `ico`) {
      readFiles(req, res, path, `image/vnd.microsoft.icon`);
    } else if (fileExtension === `css`) {
      readFiles(req, res, path, `text/css`);
    } else if (fileExtension === `js` || fileExtension === `mjs`) {
      readFiles(req, res, path, `text/javascript`);
    } else if (fileExtension === `html`) {
      readFiles(req, res, path, `text/html`);
    }
  })
  .listen(8080, () => {
    console.log(`the server is processing on http://localhost:8080`);
  });
