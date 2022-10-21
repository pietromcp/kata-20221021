const intToRoman = require("../roman.js").intToRoman

describe("Convert int into single-char roman", function () {
  it("1 --> I", function () {
    expect(intToRoman(1)).toBe("I")
  })

  it("5 --> V", function () {
    expect(intToRoman(5)).toBe("V")
  })

  it("10 --> X", function () {
    expect(intToRoman(10)).toBe("X")
  })
});