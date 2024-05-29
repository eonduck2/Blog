const fs = require(`node:fs`);

// STATUS[X]
// FIXME

const createJson = (req) => {
  let body = "";
  req.on(`data`, (chunk) => {
    body += JSON.parse(chunk);
    console.log(body);
  });
};

module.exports = createJson;
