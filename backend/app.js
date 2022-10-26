const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes');

app.use(bodyParser.json({
  limit: '10mb',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

module.exports = app;
