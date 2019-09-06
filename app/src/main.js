var http = require("http");
var port = process.env.WWW_PORT || 8081;

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});

   response.end('Round Glass Demo\n');
}).listen(port);
console.log('Server running at http://127.0.0.1:' + port + '/');
