const romanToInt = require("../roman.js").romanToInt

describe("Convert roman into int", function () {
  const testCases = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
    "MDCLXVI": 1666,
    "IV": 4,
    "CMXCIX": 999,
  }

  for (let [key, value] of Object.entries(testCases)) {
    it(`${key} --> ${value}`, function () {
      expect(romanToInt(key)).toBe(value)
    })
  }
})
