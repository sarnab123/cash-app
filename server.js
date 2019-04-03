//server.js
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(path.join(__dirname, 'dist/cash-app')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/cash-app', 'index.html'));
});
app.listen(port);