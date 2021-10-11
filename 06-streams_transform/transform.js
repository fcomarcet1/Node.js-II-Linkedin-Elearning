const fs = require("fs");
const { Transform } = require("stream");
 
// Mediante el stream transform podemos modificar la info entre 2 streams

const streamLectura = fs.createReadStream( "./archivos/base.txt" );
const streamEscritura = fs.createWriteStream("./archivos/destino.txt");

streamLectura.setEncoding("utf8");
 
const filtro = new Transform( {
    writableObjectMode: true,
    transform( data, encoding, callback){
        // cogemos la informacion que llega y la modificamos en la variable data
        this.push(data.toString().toUpperCase());
        // el callback permite continuar el flujo de ejecucion
        callback();
    },
    final(callback){
        callback();
    }

})

streamLectura.pipe(filtro).pipe(streamEscritura);
