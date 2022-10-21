const singleCharInts = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
}

function intToRoman(n) {
  return singleCharInts[n]
}

module.exports = {
  intToRoman
}