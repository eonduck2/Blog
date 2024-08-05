import fs from "fs";
import id from "../../../share_modules/date/date.js";

/**
 * TYPE[FUNCTION]
 *
 * STATUS[O] - 현재 상태
 *
 * CHECKLIST: 24.05.30/03:54 PM 구현
 *
 * NOTE: 1. 클라이언트에서 넘겨받은 데이터(글 제목과 글 내용) JSON형태로 파싱해서 JSON 파일 생성
 * @param obj 클라이언트에서 작성한 글과 내용을 객체 형식으로 전달받아 처리하는 매개변수
 */

export default (obj) => {
  const jsonParsedObj = JSON.stringify(obj, null, 2);

  fs.writeFile(
    `./src/json/${id.uniqueId()}.json`,
    `${jsonParsedObj}`,
    (err) => {
      if (err) {
        throw new Error(`제이슨 라이팅 에러`);
      }
    }
  );
};
