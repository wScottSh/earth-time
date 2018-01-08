const express = require('express');
const nodeUnixtimestamp = require('unix-timestamp');
const app = express();
const mainJS = require('./js/app.js');

app.use(express.static('public'))

app.listen(3000, () => {
  console.log('server running');
})
