const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    let x = 0;
    arr.forEach((element) => {
        x += element;
    });
    return x;
};

const multiply = function (arr) {
    let x = 1;
    arr.forEach((element) => {
        x *= element;
    });
    return x;
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (num) {
    return num <= 0 ? 1 : num * factorial(num - 1);
    //if (num <= 0) return 1;
    //else return num * factorialize(num - 1);
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
