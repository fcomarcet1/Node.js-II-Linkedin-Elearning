/** Imaginemos la situacion que estamos trabajando con microservicios y la 
 * autenticacion la realizamos mediante una api y posteriormente llamar a 
 * otra api para verificar los datos.
 * Podemos ejecutar tareas secuenciales mediante las promises.
 * 
 * Tenemos 2 funciones que simulan una llamada a una api con una latencia de 1.5seg
*/

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log('Recieved login data from login-api');
        }, 1500);
    });
}

function datosDeUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log('Bienvenido lerele');
        }, 1500);
    });
}


login()
    .then(() => {
        console.log("usuario autenticado");
        return datosDeUsuario();
    })
    .then(() => {
        console.log("datos de usuario OK");
    })
    .catch(() => {
        console.log("error");
    })
;
   


//datosDeUsuario()


