var http = require('http');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    
    var objeto = {
        mensaje : 'hola mundo Node JS Repo GIT- Lizarraga Peinado Amahirani Michelle\n'
    };

    var json = JSON.stringify(objeto);

    res.end(jason);

}).listen(8081);
console.log('Server running on port 8081');