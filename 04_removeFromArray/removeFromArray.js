const removeFromArray = function(myArray, ...args) {
    for(i = 0; i < args.length; i++){
        if(myArray.includes(args[i])){
            myArray.splice(myArray.indexOf(args[i]), 1);
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
