import http from 'http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end('Hello World');
});
const port = 3000;

/*PREGUNTAR DIFERENCIAS ENTRE EL SETHEADER Y EL WRITEHEAD Y EL SERVER.ON*/

server.on('request', (request, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

export default server;
