'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var express = require('express');
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
var app = (0, _express2.default)();
var router = (0, _express.Router)();
//解析JSON
app.use(_bodyParser2.default.json());
//解析from表单格式
app.use(_bodyParser2.default.urlencoded({ extended: true }));
router.get(/\/|login/, function (request, response) {
  response.sendFile(__dirname + '/public/login.html');
});
app.use('/', router);
app.listen(3000, function () {
  console.log('server listening at port 3000 ...');
});