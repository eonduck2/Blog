const http = require(`node:http`);
const fs = require(`node:fs`);
const readFiles = require(`./modules/readFiles.js`);
const checkTypes = require(`./modules/checkTypes.js`);

http
  .createServer((req, res) => {
    readFiles(checkTypes(req), res);
  })
  .listen(8080, () => {
    console.log(`the server is processing on http://localhost:8080`);
  });
