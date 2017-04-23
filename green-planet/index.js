const PORT = 3000;

const express = require('express');
const winston = require('winston');
const uuid = require('uuid');

let app = express();

app.get('/green', function(req, res) {
  winston.log('info', uuid.v1(), {
      path: '/green'
  });
  res.send('blinky - robot');
});

app.get('/error', function(req, res) {
  winston.log('error', uuid.v1(), {
    path: '/error'
  });
  res.send('error');
});

app.listen(PORT, function() {
  console.log('server start at ' + PORT);
});
