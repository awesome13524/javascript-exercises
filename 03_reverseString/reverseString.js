const reverseString = function(string) {
    let newString = "";
    const characters = string.split("");
    for(i = characters.length - 1; i >= 0; i--){
        newString += characters[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
