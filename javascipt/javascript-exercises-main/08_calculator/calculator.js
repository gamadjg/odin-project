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

const power = function (arr) {
    let x = 1;
    arr.forEach((element) => {
        x *= element;
    });
    return x;
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
