const singleCharInts = {
	1: 'I',
	5: 'V'
}

function intToRoman(n) {
	return singleCharInts[n]
}

module.exports = {
	intToRoman
}