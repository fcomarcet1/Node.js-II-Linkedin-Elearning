const fs = require("fs");
var http = require("http");
 

function leerArchivo() {
    // funcion KEKW sincrona
    //fs.readFileSync("./archivos/archivo.txt", "utf8"); // 208ms

    // funcion OP async
    const streamlectura = fs.createReadStream("./archivos/archivo.txt", {
         encoding: "utf-8"
        }
    );// 27ms
}

http
  .createServer(function(req, res) {    
      for (let a = 0; a < 500; a++) {
          leerArchivo();
      }
      res.write("Hola mundo");  
      res.end();  
  })
  .listen(8080);  