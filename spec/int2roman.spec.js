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

  it("50 --> L", function () {
    expect(intToRoman(50)).toBe("L")
  })

  it("100 --> C", function () {
    expect(intToRoman(100)).toBe("C")
  })

  it("500 --> D", function () {
    expect(intToRoman(500)).toBe("D")
  })

  it("1000 --> M", function () {
    expect(intToRoman(1000)).toBe("M")
  })
});

describe("Convert int into multi char roman", function () {
  it("1666 --> MDCLXVI", function () {
    expect(intToRoman(1666)).toBe("MDCLXVI")
  })
})
