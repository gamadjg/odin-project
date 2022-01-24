const getTheTitles = function (arr) {
	let ret_arr = [];
	arr.forEach((element) => {
		ret_arr.push(element.title);
	});
	return ret_arr;
};

// Do not edit below this line
module.exports = getTheTitles;
