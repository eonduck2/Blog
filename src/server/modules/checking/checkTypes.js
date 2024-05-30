import extensionsAndMime from "../object/MimeTypeObject/extensionAndMime.js";

/** 
 * STATUS[O]: 현재 상태
 * 
 * TYPE[FUNCTION]
 * 
 * CHECKLIST: 24.05.29
 * 
 * NOTE: 1. 모듈로 정의된 key(extension):value(MIME-Type)을 이용해 객체 리턴
  @param req 클라이언트의 요청 객체
*/
export default (req) => {
  let url = req.url;
  let fileExtension = url.split(`.`)[1];
  let path = url.slice(1, url.length);

  for (let key in extensionsAndMime) {
    if (url == key) {
      return {
        path: `./public/index.html`,
        contentType: extensionsAndMime[key],
      };
    } else if (fileExtension == key) {
      return {
        path: path,
        contentType: extensionsAndMime[key],
      };
    } else {
      return;
    }
  }
};
