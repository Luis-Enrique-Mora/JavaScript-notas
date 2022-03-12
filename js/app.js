var basePrice = 12500;
var tax = 13;
var result;

function calcTax() {
    result = ( basePrice /100 ) * tax;
}
calcTax();
console.log(result);

