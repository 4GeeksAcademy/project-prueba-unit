const { sum, fromDollarToYen,fromEuroToDollar,fromYenToPound } = require("./app");

test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

describe("fromDollarToYen", () => {
    test("1 dolar a yenes", () => {
      expect(fromDollarToYen(1)).toBe(156.5);
    });
  });
describe("fromDollarToYen", () => {
    test("1 dolar a yenes", () => {
      expect(fromEuroToDollar(1)).toBe(1.07);
    });
  });
describe("fromDollarToYen", () => {
    test("1 dolar a yenes", () => {
      expect(fromYenToPound(1)).toBe(0.87);
    });
  });
  