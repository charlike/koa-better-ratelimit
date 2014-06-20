/**
 * koa-better-ratelimit - example.js
 * Copyright(c) 2014
 * MIT Licensed
 *
 * @author  Charlike Mike Reagent (@tunnckoCore)
 * @api private
 */
var app   = require('koa')(),
    limit = require('./index');

app.use(limit({
  duration: 1000 * 60 * 3, //3 mins
  max: 5,
  //blackList: ['127.0.0.1']
}));

app.use(function * (next) {
  this.body = 'Hello World';
  yield next;
});

var port = process.env.PORT || 3333;
app.listen(3333);
console.log('Koa server start listening on port ' + port);