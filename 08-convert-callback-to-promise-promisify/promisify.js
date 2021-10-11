const fs = require("fs");
const util = require("util");

// callback
// fs.writeFile("./archivos/archivo/", "12345678" , () => {
//     console.log("ok")
// } )

// Podemos convertir una callback a promise mediante la liberia util y el metodo promisify
// transformamos a promise
const writeFilePromesa = util.promisify(fs.writeFile);

writeFilePromesa("./archivos/archivo.txt", "12345678" )
    .then( () => {
        console.log("ok")
    })
    .catch( () => {
        console.log("error")
    })
;