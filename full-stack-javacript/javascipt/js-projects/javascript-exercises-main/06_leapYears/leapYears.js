const leapYears = function(yr) {
    
    if (yr%4 === 0){
        if (!(yr%400 === 0) && (yr%100 === 0)){
            return false;
        };
        return true;
    }
    return false;

//divisible by four or 400
//nless also divisible by 100

};

// Do not edit below this line
module.exports = leapYears;
