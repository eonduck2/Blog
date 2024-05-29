const extensionsAndMime = require(`../object/MimeTypeObject/extensionAndMime.js`);

const checkTypes = (req) => {
  let url = req.url;
  let fileExtension = url.split(`.`)[1];
  let path = url.slice(1, url.length);

  for (let key in extensionsAndMime) {
    if (url == key) {
      return {
        path: `./public/index.html`,
        contentType: extensionsAndMime[key],
      };
    } else if (fileExtension == key) {
      return {
        path: path,
        contentType: extensionsAndMime[key],
      };
    }
  }
};

module.exports = checkTypes;
