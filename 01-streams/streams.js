
const fs = require('fs');


// Los streams permiten lectura y escritura en el servidor sin bloquear el tiempo de ejecucion

console.time("tiempo de respuesta");

// Lectura sincrona 10 veces --> 834.37ms
// for(let i=0; i<= 10; i++) {
//   fs.readFileSync('archivo.txt', 'utf8');
// }

// lectura stream 10 veces --> 3.84ms
for(let i=0; i<= 10; i++) {
  const streamEscritura = fs.createReadStream("archivo.txt", {encoding: "utf-8"});
}

console.timeEnd("tiempo de respuesta");