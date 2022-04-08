const colors = require('colors');
const { clear } = require('console');
const { option, boolean } = require('yargs');
const { crearArchivoNormal, crearArchivoPromise, crearArchivoAsync } = require('./helpers/multiplicar');
const argv= require('./config/yargs');
//option
//listar
console.clear();
console.log(argv);

console.log('base: yargs', argv.base);

crearArchivoAsync(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'))
    .catch(err => console.log(err));





//se crea la tablase de numero base ingresado por consola mediante el codigo
//node app --base=10

/* const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('='); */



//const base= 5;






