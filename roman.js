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

  const map = {
    "CM": "DCCCC",
    "CD": "CCCC",
    "XC": "LXXXX",
    "XL": "XXXX",
    "IX": "VIIII",
    "IV": "IIII"
  }

  for (const [key, value] of Object.entries(map)) {
    r = r.replace(key, value)
  }

  const chars = r.split("")

  return chars
    .reduce((acc, curr, i) => {
      return acc + singleCharInts.find(x => x.value === curr).key
    }, 0)
}

module.exports = {
  intToRoman,
  romanToInt
}