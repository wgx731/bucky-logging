const PORT = 3000;
const LOG_FILE = 'logs/app.log';

const express = require('express');
const winston = require('winston');
const uuid = require('uuid');

let app = express();
let logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: LOG_FILE })
  ]
});

app.get('/green', function(req, res) {
  logger.log('info', 'id: ' + uuid.v1(), {
      path: '/green'
  });
  res.send('blinky-robot');
});

app.get('/error', function(req, res) {
  logger.log('error', 'id: ' + uuid.v1(), {
    path: '/error'
  });
  res.status(500);
  res.send('error');
});

app.listen(PORT, function() {
  console.log('server start at ' + PORT);
});
