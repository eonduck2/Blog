const fs = require(`node:fs`);

/** 
 * STATUS[O]: 현재 상태
 * 
 * TYPE[FUNCTION]
 * 
 * CHECKLIST: 24.05.28
 * 
 * NOTE: 1. 파일 읽고, MIME타입에 따른 처리
  @param contentObj res, path, content-type을 property로 갖는 객체
*/
const readFiles = (contentObj) => {
  let { res, path, contentType } = contentObj;
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

module.exports = readFiles;
