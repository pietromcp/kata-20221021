const romanToInt = require("../roman.js").romanToInt

describe("Convert roman into int", function () {
  const testCases = {
    "I": 1 
  }

  for (let [key, value] of Object.entries(testCases)) {
    it(`${key} --> ${value}`, function () {
      expect(romanToInt(key)).toBe(value)
    })
  }
})
