const http = require(`node:http`);
const fs = require(`node:fs`);
const readFiles = require(`./modules/reading/readFiles.js`);
const checkTypes = require(`./modules/checking/checkTypes.js`);
const createPostObj = require(`./modules/submit/methodPost/createObj/createPostSubmittedDataObj.js`);
const wirtingJson = require(`./modules/`);

http
  .createServer((req, res) => {
    if (req.method == `GET`) {
      readFiles(checkTypes(req), res);
    } else if (req.method == `POST`) {
      createPostObj(req, (createdJsonObj) => {});
    }
  })
  .listen(8080, () => {
    console.log(`the server is processing on http://localhost:8080`);
  });
