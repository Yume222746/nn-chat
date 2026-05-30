'use strict';
const postHandler = require('./posts-handler');
const util = require('./handler-utils')

function route(req, res) {
  switch(req.url) {
    case '/posts':
      postHandler.handle(req, res);
      break;
    case '/posts/delete':
      postHandler.handleDelete(req, res);
      break;
    case '/logout':
      util.handleLogout(req, res);
      break;
    case '/changeTheme':
      util.handleChangeTheme(req, res);
      break;
    case '/favicon.ico':
      util.handleFavicon(req, res);
      break;
    case '/style.css':
      util.handleStyleCssFile(req, res);
      break;
    case '/nn-chat.js':
      util.handleJsFile(req, res)
      break;
    default:
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route
};