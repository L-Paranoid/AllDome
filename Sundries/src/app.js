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
import express ,{ Router } from 'express';
import bodyParser from 'body-parser';
let app = express();
let router = Router();
//解析JSON
app.use(bodyParser.json());
//解析from表单格式
app.use(bodyParser.urlencoded({extended:true}));
router.get(/\/|login/,(request,response)=>{
  debugger;
  response.sendFile(__dirname+'/public/login.html');
})
app.use('/',router);
app.listen(3000,()=>{
  console.log('server listening at port 3000 ...');
})