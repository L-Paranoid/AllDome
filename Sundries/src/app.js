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
import express, { Router } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
let app = express();
let router = Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router.get('/login',(request,response,next)=>{
  console.log(__dirname,path.resolve());
  response.sendFile(path.resolve()+'/public/login.html');
})
app.use('/',router);
app.listen(3000,()=>{
  console.log('server listening ar port 3000 ');
});