const colors = require('colors');
const fs = require('fs');

const crearArchivoNormal = (base = 5) => {
    console.clear();
    let salida = '';
    for (var i = 0; i < 11; i++) {
        salida += `${base} X ${i} = ${base * i}\n`;
    }
    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log(`tabla-${base}. txt fue creada`);
};


///Con promesas
const crearArchivoPromise = (base = 5) => {
    console.clear();
    return new Promise((resolve, reject) => {
        let salida = '';
        for (var i = 0; i < 11; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        resolve(console.log(`tabla-${base}. txt fue creada`));
        reject(err=> console.log(err));

    });
};

//crearArchivo con Async, me devuelve una promesa
const crearArchivoAsync = async (base = 5,bandera,hasta=11) => {
    try {
        console.clear();
        let salida = '';
        for (var i = 0; i < hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
        }
        if(bandera){
            console.log(salida.rainbow);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt `;
    } catch (error) {
        throw error;
    }
};



module.exports = {
    crearArchivoNormal: crearArchivoNormal,
    crearArchivoPromise: crearArchivoPromise,
    crearArchivoAsync: crearArchivoAsync
}

/* fs.writeFile(`Tabla-${base}`,salida, (err)=>{
    if(err)throw err;
    console.log(`Tabla del ${base} creada`);
}) */