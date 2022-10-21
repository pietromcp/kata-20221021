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

  it("37 --> XXXVII", function () {
    expect(intToRoman(37)).toBe("XXXVII")
  })

  it("3333 --> MMMCCCXXXIII", function () {
    expect(intToRoman(3333)).toBe("MMMCCCXXXIII")
  })
})

describe("Convert int into multi char roman handling subtractions", function () {
  it("4 --> IV", function () {
    expect(intToRoman(4)).toBe("IV")
	})
	
	it("9 --> IX", function () {
    expect(intToRoman(9)).toBe("IX")
	})

	it("40 --> XL", function () {
    expect(intToRoman(40)).toBe("XL")
	})

	it("90 --> XC", function () {
    expect(intToRoman(90)).toBe("XC")
	})

	it("400 --> CD", function () {
    expect(intToRoman(400)).toBe("CD")
	})

	it("900 --> CM", function () {
    expect(intToRoman(900)).toBe("CM")
	})
})
