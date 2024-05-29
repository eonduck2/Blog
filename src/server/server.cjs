const http = require(`node:http`);
const fs = require(`node:fs`);
const readFiles = require(`./modules/reading/readFiles.js`);
const checkTypes = require(`./modules/checking/checkTypes.js`);

http
  .createServer((req, res) => {
    readFiles(checkTypes(req), res);
    console.log(req.method);
  })
  .listen(8080, () => {
    console.log(`the server is processing on http://localhost:8080`);
  });
