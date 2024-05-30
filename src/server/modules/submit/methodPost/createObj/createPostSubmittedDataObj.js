const fs = require(`node:fs`);

/**
 * TYPE[FUNCTION]
 *
 * STATUS[O] - 현재 상태
 *
 * CHECKLIST: 24.05.30/10:06AM 데이터 파싱
 *
 * NOTE: 1. req 객체의 데이터 전송 이벤트를 감지해 전송받은 데이터를 객체화 시켜서 콜백을 통해 리턴
 * @param req 요청 객체
 * @param callback 함수 마지막에 실행되면서 객체를 리턴해주는 콜백 함수
 */

const createPostJsonObj = (req, callback) => {
  if (req.url == `/submit`) {
    let body = "";
    req.on(`data`, (chunk) => {
      body += chunk.toString();
    });
    req.on(`end`, () => {
      const parsedData = new URLSearchParams(body);

      const returningObjForJson = {
        title: parsedData.get(`title`),
        content: parsedData.get(`content`),
      };
      callback(returningObjForJson);
    });
  }
};

module.exports = createPostJsonObj;
