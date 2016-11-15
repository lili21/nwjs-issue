var path = require('path')
var express = require('express')
// var history = require('connect-history-api-fallback')
var app = express()

app.use(express.static(path.join(__dirname, '../')))
// app.use(history({
//   index: '../index.html'
// }))
app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, '../index.html'));
})
app.listen('8283', function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('localhost:8283')
  }
})
