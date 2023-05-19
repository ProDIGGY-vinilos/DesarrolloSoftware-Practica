# Tarea

## Cadena de prototipos

Hacer un método que reciba un objeto (en terminos de javascript) y me imprima por consola toda la cadena de prototipos hasta llegar a null.

## my cool web server

web server que escuche en localhost:3000
debe:

- [x] devolver las páginas solicitadas (html) de una subcarpeta static solo por método get
- [x] dar error por web (404) si no existe la pagina
- [x] dar error por web (405) si usa otro method distinto de get
- [x] escribir en un archivo mycoolserver.log las request (method, url, timestamp y resultado de la respuesta con codigo y mensaje)
- [x] dar error 500 si no puede hacer algo
- [x] mostrar por consola cuando el server arranca
- [x] mostrar por consola cuando no puede escribir en le log de errores
- [] si se hace un request a localhost:3000/,localhost:3000/home, localhost:3000/home.html localhost:3000/index debe mostrar localhost:3000/index.html
