const fs = require("fs");

// las pipes nos permiten enviar datos desde un stream a otro

const streamLectura = fs.createReadStream( "./archivos/base.txt" );
const streamEscritura = fs.createWriteStream("./archivos/destino.txt");

// recogemos la info de base.txt y la inyectamos en destino.txt con la pipe 
streamLectura.pipe(streamEscritura);

streamLectura.on("end" , () => {
    console.log("proceso finalizado");
});