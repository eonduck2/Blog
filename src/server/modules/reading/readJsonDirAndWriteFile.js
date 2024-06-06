import fs from "fs";

/**
 * TYPE[FUNCTION]
 *
 * STATUS[O] - 현재 상태
 *
 * CHECKLIST: 24.05.31/09:20 AM 구현
 *
 * NOTE: 1. 특정 폴더를 배열로 리턴해주는 함수
 * @param path 폴더를 읽을 경로
 */

export default (path) => {
  fs.readdir(path, (err, fileList) => {
    if (err) {
      throw new Error(`디렉토리 리딩 에러`);
    }
    fileList.forEach((item) => {
      fs.readFile(`${path}/${item}`, (err, data) => {
        console.log(JSON.parse(data));
      });
    });
  });
};
