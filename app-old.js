const http = require('http');

http.createServer( (request, response)=> {  
    
    response.writeHead(200, { 'Content-Type': 'application/json '});
    const persona = {
        id : 1,
        nombre: 'Eduardo'
    }
    response.write(JSON.stringify(persona));
    response.end();
    console.log(response);
})
.listen(8080);
