const removeFromArray = function(arr, ...toRemove) {
    //console.log(arr)
    for (i=0;i<=toRemove.length-1; i++){
        removeChar = arr.indexOf(toRemove[i]);
        if (removeChar >= 0){
            arr.splice(removeChar, 1);
        }
    }
    return arr;
};

//removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;
