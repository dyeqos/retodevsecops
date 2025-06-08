const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end('¡Hola desde Node.js en Docker!');
});

server.listen(PORT, () => {
  console.log(`Servidor de Diego en el puerto ${PORT}`);
});
