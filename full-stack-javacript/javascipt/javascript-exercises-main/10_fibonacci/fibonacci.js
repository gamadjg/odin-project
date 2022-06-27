const fibonacci = function (a) {
    if (a < 0) {
        return 'OOPS';
    }
    let fibArray = [0];
    let fib = 0;
    for (let i = 1; i <= a; i++) {
        if (i == 1) {
            fib = 1;
            fibArray.push(fib);
        } else {
            fib = fibArray.at(-1) + fibArray.at(-2);
            fibArray.push(fib);
        }
    }
    return fib;
};
//fibonacci(6);
// Do not edit below this line
module.exports = fibonacci;
