const repeatString = function(str, n) {
    let temp = '';

    if (n>=0){
        for (i=1; i<=n; i++){
            temp+=str;
        }
    }
    else {
        return 'ERROR'
    }
    return temp
};
console.log(repeatString('hey', 3));
// Do not edit below this line
module.exports = repeatString;
