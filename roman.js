const singleCharInts = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
}

function intToRoman(n) {
  return singleCharInts[n]
}

module.exports = {
  intToRoman
}