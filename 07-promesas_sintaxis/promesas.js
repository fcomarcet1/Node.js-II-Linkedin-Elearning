// las promesas nos permiten crear procesos asincronos, e inicializar procesos
// sin detener la ejecucion del flujo del programa.

// Con las promises nos permite ejecutar el proceso en el momento que finaliza.
// por tanto las lineas de codigo siguientes se ejecutan mientras acaba la promise.

// si trabajamos con ficheros la mejor opcion son las promises

// fs nos permite trabajar con promises y callbacks, 
// mediante .promises le indicamos que es una promise
const promesasNode = require("fs").promises;
 
promesasNode.copyFile("./archivos/original.pdf" , "./archivos/copia.txt")
    // then se ejecuta si la anterior accion se ejecuta correctamente 
    // en este caso copiar el fichro
    .then(() => {
        console.log("copia terminada")
    })
    // capturamos si ocurrio un error
    .catch(() => {
        console.log("no se puede copiar el archivo")
    })
    // finally se ejecuta siempre
    .finally(() => {
        console.log("...")
    })
;


            