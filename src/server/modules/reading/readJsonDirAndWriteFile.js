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
  const fileData = [];

  fs.readdir(path, (err, fileList) => {
    if (err) {
      throw new Error(`디렉토리 리딩 에러`);
    }
    fs.writeFile(
      `./src/client/modules/array/createdJsonDirList.js`,
      `export default ["${fileList}"]`,
      (err) => {
        if (err) throw new Error(`제이슨 파일 리스트 라이팅 오류`);
      }
    );
    fileList.forEach((item) => {
      fs.readFile(`${path}/${item}`, (err, data) => {
        fileData.push(`${item.replace(`.json`, "")}:${data}`);
        fs.writeFile(
          `./src/client/modules/array/createdJsonFileDataList.js`,
          `export default {${fileData}}`,
          (err) => {
            if (err) throw new Error(`제이슨 파일 라이팅 에러`);
          }
        );
      });
    });
  });
};
