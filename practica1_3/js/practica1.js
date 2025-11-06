/* Agrega tu código js ... */
const prompt = require('prompt-sync')();

let entrada = prompt("Ingrese el total de la factura: ");

let totalFactura =  Number(entrada);

console.log("Para una factura de $" + totalFactura + ", la propina debe ser de $" + (totalFactura * 0.1));