const express = require('express');
const path = require('path');
const favicon = require('serve-favicon'); // 引用标签页图标
const bodyParser = require('body-parser'); // 转化 请求body 为 json格式的数据

const isEnv = process.env.NODE_ENV;
console.log('环境变量', isEnv);
let app = express();
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.use(bodyParser.json()); // 请求体 json格式的数据转换成 req.body 格式的数据
app.use(bodyParser.urlencoded({ extended: false })); // form data 格式转换 req.body 格式
app.use(favicon(path.join(__dirname, '../favicon.ico'))); // 浏览器标签页的图标
if (isEnv === 'production') {
}
if (isEnv === 'development') {
}
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send(error);
});
let host = process.env.HOST || '0.0.0.0';
let port = process.env.PORT || 2223;
app.listen(port, host, () => {
  console.log('server is listening ', port);
});
