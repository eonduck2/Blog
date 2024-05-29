const checkTypes = (req, res) => {
  let url = req.url;
  let fileExtension = url.split(`.`)[1];
  let path = url.slice(1, url.length);

  if (url === `/`) {
    return {
      req: req,
      res: res,
      path: `./public/index.html`,
      contentType: `text/html`,
    };
  } else if (fileExtension === `ico`) {
    return {
      req: req,
      res: res,
      path: path,
      contentType: `image/vnd.microsoft.icon`,
    };
  } else if (fileExtension === `css`) {
    return {
      req: req,
      res: res,
      path: path,
      contentType: `text/css`,
    };
  } else if (fileExtension === `js` || fileExtension === `mjs`) {
    return {
      req: req,
      res: res,
      path: path,
      contentType: `text/javascript`,
    };
  } else if (fileExtension === `html`) {
    return {
      req: req,
      res: res,
      path: path,
      contentType: `text/html`,
    };
  }
};

module.exports = checkTypes;
