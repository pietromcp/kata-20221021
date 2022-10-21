const singleCharInts = [
  { key: 1666, value: "MDCLXVI" },
  { key: 1000, value: "M" },
  { key: 500, value: "D" },
  { key: 100, value: "C" },
  { key: 50, value: "L" },
  { key: 10, value: "X" },
  { key: 5, value: "V" },
  { key: 1, value: "I" }
]

function intToRoman(n) {
  return singleCharInts.find(x => x.key === n).value
  // let output = ""



  // return output || singleCharInts[n]
}

module.exports = {
  intToRoman
}