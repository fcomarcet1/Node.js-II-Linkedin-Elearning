const https = require('https');

/** realizamos un peticion a la api de wikipedia */
const req = https.get('https://en.wikipedia.org/w/api.php?action=help&format=json', (res) => {
    console.log('datos OK'); 
});

/** Ahora podemos subscribirnos a eventos que nos devuelve la response y administrar errores conexion etc  */
req.on("socket", (data) => {
    console.log("inicia http")
});

req.on('error', (data) => {
    console.log("error")
});

/** En este caso vamos a subscribirnos a los eventos de los datos que nos llegan y poder administrar diferentes aspectos*/
const req = https.get('https://en.wikipedia.org/w/api.php?action=help&format=json', (res) => {
    res.on('data', (data) => {   
        console.log("... recibiendo datos");
    });
    // ver si existe algun error
    res.on('error', (err) => {
        console.log(err);
    });

    // podemos ver cuando acaba la transferencia
    res.on('end', (data) => {   
        console.log(`Datos recibidos ${data}`);
    });


});

req.on("socket", (data) => {
    console.log("inicia http")
});

req.on('error', (data) => {
    console.log("error")
});



