// bringing in our custom module
var currency = require('./currency');

// bringing in OOP module
var Currency = require('./currencyObj');

console.log('Using our data, 50 CAD equals this amount of USD:');
console.log(currency.canadianToUS(50));

console.log('Conversely, 50 USD equals this amount of CAD:');
console.log(currency.UStoCanadian(50));

console.log('Let\'s do some more testing with objects...\n\n\n');

// here we can set a custom exchange rate
var canadianDollar = 0.67;

// now we instantiate a new object
var curObj = new Currency(canadianDollar);

// and try out the functions again
console.log('Using a different exchange rate, 50 CAD equals this amt of USD:');
console.log(curObj.canadianToUS(50));

console.log('And again, here is the same currency in USD converted to CAD:');
console.log(curObj.UStoCanadian(50));
