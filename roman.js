const singleCharInts = [
  { key: 1000, value: "M" },
  { key: 500, value: "D" },
  { key: 100, value: "C" },
  { key: 50, value: "L" },
  { key: 10, value: "X" },
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