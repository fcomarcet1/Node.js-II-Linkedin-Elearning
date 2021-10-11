const fs = require("fs");
const { Duplex } = require("stream");

// revisar fichero antes de realizar cualquier operacion, asi podemos realizar
// verificaciones previas entre la lectura y la escritura.
// nos puede valer para verificar integridad etc y generar reportes etc no puede modificar la data
// streamLectura.pipe(reporte).pipe(streamEscritura);

const streamLectura = fs.createReadStream( "./archivos/base.txt" );
const streamEscritura = fs.createWriteStream("./archivos/destino.txt");

const reporte = new Duplex( {
    write(data, encode, callback){
        console.log(data) 
        /// para ver directamente el texto, reemplaza la llamada anterior por 
        // console.log(data.toString()) 

        // el callback permite continuar el flujo de ejecucion
        callback();
    },
    read(size){}
})


streamLectura.pipe(reporte).pipe(streamEscritura);
