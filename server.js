const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const pkg = require('./package');
const config = {
  port: 8086
};

app.set('dist',path.join(__dirname,'dist'));
app.engine('html',require('ejs').renderFile);//设置模板后缀名为.html
app.set('dist engine','html');

app.use(express.static(path.join(__dirname,'dist')));

app.locals.blog = {
  title: pkg.name,
  description: pkg.description
};

app.listen(config.port,function () {
  console.log('服务启动'+config.port);
});

