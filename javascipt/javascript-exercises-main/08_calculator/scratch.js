const power = function (arr) {
    let x = 1;
    arr.forEach((element) => {
        x *= element;
    });
    return x;
};

console.log(power([2, 4]));
