const palindromes = function (atr) {
	str = atr.toLowerCase().replace(/[^a-z]/g, "");
	arr = Array.from(str);
	nstr = arr
		.reverse()
		.toString()
		.replace(/[^a-zA-Z]/g, "");
	return str === nstr ? true : false;
};
// Do not edit below this line
module.exports = palindromes;
