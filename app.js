const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


const fromDollarToYen = function (value) {
    return value * 156.5;
  };
  const fromEuroToDollar = function (value) {
    return value * 1.07;
  };
  const fromYenToPound = function (value) {
    return value * 0.87;
  };
  
module.exports = { sum , fromDollarToYen,fromEuroToDollar,fromYenToPound};