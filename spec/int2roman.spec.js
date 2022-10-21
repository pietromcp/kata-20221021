const intToRoman = require("../roman.js").intToRoman

describe("Convert int into single-char roman", function() {
    it("1 --> I", function() {
        expect(intToRoman(1)).toBe("I");
    });
});