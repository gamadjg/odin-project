const fibonacci = function (a) {
	fibArray = [0];
	let fib = 0;
	for (let i = 1; i < a; i++) {
		if ((i = 1)) {
			fib += 1;
			fibArray.push(fib);
		} else {
			console.log(fibArray.at(-1));
			console.log(fibArray.at(-2));
			fib = fibArray.at(-1) + fibArray.at(-2);
			fibArray.push(fib);
			console.log(fib);
		}
	}
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
