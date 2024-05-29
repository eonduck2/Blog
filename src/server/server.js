const http = require(`node:http`);
const fs = require(`node:fs`);

/** 
 * STATUS[O]: 현재 상태
 * 
 * CHECKLIST: 24.05.28
 * NOTE: 1. 파일 읽고, MIME타입에 따른 처리
  @param req 서버의 요청 객체
  @param res 서버의 응답 객체
  @param path 파일을 읽을 경로
  @param contentType 파일의 타입 설정
*/

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
