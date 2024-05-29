const fs = require(`node:fs`);

const readFiles = (req, res, path, contentType) => {
  fs.readFile(path, (err, data) => {
    if (err != null) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(data);
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
};

module.exports = readFiles;
