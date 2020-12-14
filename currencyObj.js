// constructor
var Currency = function(canadianDollar){
  this.canadianDollar = canadianDollar;
}

// object functions
// this is not a function???
Currency.prototype.roundTwoDecimals = (amount) => {
  return Math.round(amount * 100) / 100;
}

Currency.prototype.canadianToUS = function(canadian) {
  return this.roundTwoDecimals(canadian * this.canadianDollar);
}

Currency.prototype.UStoCanadian = function(us) {
  return this.roundTwoDecimals(us / this.canadianDollar);
}

// setting exports so we can use the object in other code...
module.exports = Currency;
