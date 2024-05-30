import fs from "fs";

/**
 * STATUS[X] - 현재 상태
 *
 * FIXME
 */

export default (obj) => {
  const jsonParsedObj = JSON.stringify(obj, null, 2);

  console.log(__dirname);
  // fs.writeFile(`./src/json/`);
};
