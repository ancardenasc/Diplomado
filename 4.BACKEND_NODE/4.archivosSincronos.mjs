import {readFileSync} from 'node:fs';

const archivo1 = readFileSync('archivos/archivo1.txt', 'utf-8');
const archivo2 = readFileSync('archivos/archivo2.txt', 'utf-8');
const archivo3 = readFileSync('archivos/archivo3.txt', 'utf-8');

console.log(archivo1);
console.log(archivo2);
console.log(archivo3);
console.log('Fin del programa');