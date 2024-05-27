const http = require(`node:http`);
const fs = require(`node:fs`);

const readFiles = (req, res, path, contentType) => {
  fs.readFile(path, (err, data) => {
    if (err != null) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(data);
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
};

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
    } else if (fileExtension === `js`) {
      readFiles(req, res, path, `text/javascript`);
    } else if (fileExtension === `html`) {
      readFiles(req, res, path, `text/html`);
    }
  })
  .listen(8000, () => {
    console.log(`the server is processing on http://localhost:8000`);
  });
