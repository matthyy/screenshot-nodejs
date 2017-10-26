const config = require('config');
const handleScreenshot = require('./Middlewares/handleScreenshot.js')
const http = require('http');

const hostname = config.get('hostname');
const port = config.get('port');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = [];
    req.on('error', (err) => {
      console.error(err);
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      handleScreenshot.handle(body, res);
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
