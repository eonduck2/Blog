import http from "http";
import fs from "fs";
import aboutDates from "../share_modules/date/date.js";
import readFiles from "./modules/reading/readFiles.js";
import checkTypes from "./modules/checking/checkTypes.js";
import createPostObj from "./modules/submit/methodPost/createObj/createPostSubmittedDataObj.js";
import wirtingJson from "./modules/writing/writingJson.js";

http
  .createServer((req, res) => {
    if (req.method == `GET`) {
      readFiles(checkTypes(req), res);
    } else if (req.method == `POST`) {
      createPostObj(req, (createdJsonObj) => {
        wirtingJson(createdJsonObj);
      });
    }
  })
  .listen(8080, () => {
    console.log(`the server is processing on http://localhost:8080`);
    console.log(new aboutDates(new Date()));
  });
