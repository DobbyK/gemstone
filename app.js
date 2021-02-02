const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home/index.html');
});
app.get('/home/style.css', (req, res) => {
  res.sendFile(__dirname + '/home/style.css');
});
app.get('/static/logo.png', (req, res) => {
  res.sendFile(__dirname + '/static/logo.png');
});
app.listen(3000, () => {
  console.log('Server started');
});