const singleCharInts = [
	{ key: 1000, value: "M" },
	{ key: 900, value: "CM" },
	{ key: 500, value: "D" },
	{ key: 400, value: "CD" },
	{ key: 100, value: "C" },
	{ key: 90, value: "XC" },
	{ key: 50, value: "L" },
	{ key: 40, value: "XL" },
	{ key: 10, value: "X" },
	{ key: 9, value: "IX" },
  { key: 5, value: "V" },
  { key: 4, value: "IV" },
  { key: 1, value: "I" }
]

function intToRoman(n) {
  let output = ""
  for (let { key, value } of singleCharInts) {
    while (n >= key) {
      n -= key
      output += value
    }
  }
  return output
}

function romanToInt(r) {
  return 1
}

module.exports = {
  intToRoman,
  romanToInt
}