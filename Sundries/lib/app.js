'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // var express = require('express');
// var bodyParser = require('body-parser');

// var app = express();
// //路由
// var router = express.Router();
// //http请求解析中间件
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// //app.use(cookieParser());

// router.get('/login', function(request, response, next) {
//   response.set('Content-Type','text/html');
//   response.sendFile(__dirname+'/public/login.html');
// });

// app.use('/', router);
// app.listen(3000, function() {
//   console.log('server listening at port 3000...');
// })

//以下为es6写法

var router = (0, _express.Router)();
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
router.get('/login', function (request, response, next) {
  console.log(__dirname, _path2.default.resolve());
  response.sendFile(_path2.default.resolve() + '/public/login.html');
});
app.use('/', router);
app.listen(3000, function () {
  console.log('server listening ar port 3000 ');
});
