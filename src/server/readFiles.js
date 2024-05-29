const fs = require(`node:fs`);

/** 
 * STATUS[O]: 현재 상태
 * 
 * TYPE[FUNCTION]
 * 
 * CHECKLIST: 24.05.28
 * 
 * NOTE: 1. 파일 읽고, MIME타입에 따른 처리
  @param req 서버의 요청 객체
  @param res 서버의 응답 객체
  @param path 파일을 읽을 경로
  @param contentType 파일의 타입 설정
*/
const readFiles = (req, res, path, contentType) => {
  fs.readFile(path, (err, data) => {
    if (err != null) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(data);
    } else {
      res.end(data);
      res.writeHead(200, { "Content-Type": contentType });
    }
  });
};

module.exports = readFiles;
