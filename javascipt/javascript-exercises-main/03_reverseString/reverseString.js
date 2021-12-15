const reverseString = function(str) {
    splitStr = str.split('');
    reverseStr = splitStr.reverse();
    newStr = reverseStr.join('');
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
