import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const port = 3000;

const server = http.createServer((req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const url =
    req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(
    __dirname,
    'static',
    url
  );

  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end('Método no permitido');
    logRequest(
      req,
      res.statusCode,
      res.statusMessage
    );
    return;
  }

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/plain',
      });
      res.end('Archivo html no encotrado');
      logRequest(
        req,
        res.statusCode,
        res.statusMessage
      );

      return;
    } else {
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500, {
            'Content-Type': 'text/plain',
          });
          res.end('Internal Server Error');
          logRequest(
            req,
            res.statusCode,
            res.statusMessage
          );

          return;
        }
        res.writeHead(200, {
          'Content-Type': 'text/html',
        });
        res.end(content);
        logRequest(
          req,
          res.statusCode,
          res.statusMessage
        );
      });
    }
  });
});

const logRequest = (
  req,
  statusCode,
  statusMessage
) => {
  const log = `${req.method} ${
    req.url
  } - ${new Date().toISOString()} - ${statusCode} ${statusMessage}\n`;
  fs.appendFile('mycoolserver.log', log, (err) => {
    if (err) {
      console.error(
        'Error al escribir en el archivo de registro',
        err
      );
    }
  });
};

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

export default server;
