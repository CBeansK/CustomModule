// could try to get real-time data here
var canadianDollar = 0.91;

// local function
function roundTwoDecimals(amount) {
  return Math.round(amount * 100) / 100;;
}

// we set this function in the exports so we can reuse it with other code
exports.canadianToUS = (canadian) => {
  return roundTwoDecimals(canadian * canadianDollar);
}

// converts US currency to canadian
// set to exports to use with other modules
exports.UStoCanadian = (us) => {
  return roundTwoDecimals(us / canadianDollar);
}
