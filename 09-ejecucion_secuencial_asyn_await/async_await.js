/** Imaginemos que tenemos esta funcion que devuelve un nº aleratorio
 *  function numeroAleatorio() {
 *     console.log(Math.floor(Math.random() * 100));
 *   }
 * y este resultado lo obtenemos de una api externa necesitamos un promise
 * 
 */ 

function numeroAleatorio() {
    return new Promise((resolve, reject) => {
        // simulamos la latencia del la llamada a la api de 2seg
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100));
        }, 2000);
    });
}

async function resultado() {
    const aleratorio = await numeroAleatorio();
    console.log(`Resultado: ${aleratorio}`)
}

resultado();


