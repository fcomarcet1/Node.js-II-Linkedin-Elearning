/**
 * Podemos invocar diferentes promesas y obtener una respuesta unificada. esto puede ser util
   si tenemos varios servicios de los cuales obtenemos varios diferentes datos y una vez los tengamos
   todos desplegar la pagina web 
 */
/** Supongamos que vamos a desplegar los mensajes privados d un user 
 *  simulamos que los obtenemos de una api con latencia de 1.5seg, 
 *  las demas funciones simulas algo similar la obtencion de datos desde 
 *  un servicio externo.
 * 
 *  Una vez obtenidos todos los datos necesarios de los servicios 
*/

function mensajesPrivados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("mensajes privados");
        }, 1500);
    });
}

function galeriaDeFotos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fotos");
        }, 1500);
    });
}

function ultimasTransacciones() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("transacciones");
        }, 1500);
    });
}

// Unificamos las promises con Promises.all,
// hasta que no se hayan resuelto las 3 promises no continuamos
// NOTA puede ser que la aplicacion llame a los 3 servicios a la vez, asi que 
//      si tenemos alguna operacion intensiva hemos de tenerlo en cuenta.
Promise.all([ 
    mensajesPrivados() , 
    galeriaDeFotos() , 
    ultimasTransacciones() 
])
.then((valores) => {
    // levantar web con datos de los servicios
    console.log(valores);
})