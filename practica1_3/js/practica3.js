const prompt = require('prompt-sync')();

let entrada = prompt("Ingrese el total de la factura: ");

let totalFactura =  Number(entrada);

if( totalFactura <= 0 || isNaN(totalFactura) ){
    console.log("No es un número válido");
} else {
    console.log("Para una factura de $" + totalFactura + ", la propina debe ser de $" + (totalFactura * 0.1));
}