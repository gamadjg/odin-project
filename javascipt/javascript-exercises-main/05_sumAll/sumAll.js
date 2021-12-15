const sumAll = function(x, y) {
    let tempVal = 0;
    let largerVal = 0;
    let smallerVal = 0;
    
    // If either x or y is a string, even a number string
    if ((typeof x == 'string') || (typeof y == 'string')){
        return 'ERROR';
    }
    // If either value is not a number
    else if ((isNaN(x)) || (isNaN(y))){
        return 'ERROR';
    }
    // If either value is a negative number
    else if ((x <=0) || (y<=0)){
        return 'ERROR';
    }
    // All values g2g
    else {
        if (x > y){
            largerVal = x;
            smallerVal = y;
        }
        else {
            largerVal = y;
            smallerVal = x;
        };

        for (i=smallerVal; i<=largerVal; i++){
            tempVal += i;
        }
        return tempVal;
    };
};

// Do not edit below this line
module.exports = sumAll;
