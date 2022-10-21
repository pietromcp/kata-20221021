const singleCharInts = {
  1: 'I',
  5: 'V',
  10: 'X',
}

function intToRoman(n) {
  return singleCharInts[n]
}

module.exports = {
  intToRoman
}