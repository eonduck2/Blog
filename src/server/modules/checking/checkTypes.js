const checkTypes = (req) => {
  let url = req.url;
  let fileExtension = url.split(`.`)[1];
  let path = url.slice(1, url.length);

  // if (url === `/`) {
  //   return {
  //     path: `./public/index.html`,
  //     contentType: `text/html`,
  //   };
  // } else if (fileExtension === `ico`) {
  //   return {
  //     path: path,
  //     contentType: `image/vnd.microsoft.icon`,
  //   };
  // } else if (fileExtension === `css`) {
  //   return {
  //     path: path,
  //     contentType: `text/css`,
  //   };
  // } else if (fileExtension === `js` || fileExtension === `mjs`) {
  //   return {
  //     path: path,
  //     contentType: `text/javascript`,
  //   };
  // } else if (fileExtension === `html`) {
  //   return {
  //     path: path,
  //     contentType: `text/html`,
  //   };
  // }
};

module.exports = checkTypes;
