const http = require('http');

http.createServer((req, res) => {


        // res.write("Miguel Angel"); // Mostrando texto en en el navegador
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'miguel',
            edad: 22,
            url: req.url
        }
        res.write(JSON.stringify(salida));

        res.end();
    })
    .listen(8080);