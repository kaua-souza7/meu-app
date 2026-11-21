const http = require ('http');

function somar(a, b) {
      return a + b;
}

if (require.main === module) {
     http
     .createServer((req, res) => res.end('Ola! 2 + 3 = ' + somar(2, 3)))
     .listen(3000);
}

module.exports = { somar };
