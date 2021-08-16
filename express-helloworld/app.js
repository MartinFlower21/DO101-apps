var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello Graham, this is a honeypot trap set by IT Cyber Security. You are now required to undertake several months worth of rehabilitation!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

