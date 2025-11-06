const billTotals = [50, 150, 20, 500];

const tips = [];

for (let bill of billTotals) {
    if ( bill > 75) {
        tips.push(bill * 0.1);
    } else if (bill >= 30 && bill <= 75) {
        tips.push(bill * 0.2);
    } else {
        tips.push(bill * 0.3);
    }
}

for ( let i = 0; i < tips.length; i++ )  {
    console.log("Para una factura de $" + billTotals[i] + ", la propina debe ser de $" + tips[i]);
}