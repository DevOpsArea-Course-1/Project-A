'use strict';

const express = require('express');
// Constants
const PORT = 8888;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
  res.send('App  2 Is Working :) \n');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
