const palindromes = function (str) {
    let split = str.split('');
    for(let i = split.length - 1; i >= 0; i--){
        if(split[i] === '.' || split[i] === ',' || split[i] === '!' || 
        split[i] === ' '){
            split.splice(i, 1)
        }
        else{
            split[i] = split[i].toLowerCase()
        }
    }
    arr = []
    splitClone = split.slice();
    splitReversed = split.reverse();
    for(let i = 0; i < split.length; i++){
        if(splitClone[i] === splitReversed[i]){
            arr[i] = true;
        }
        else{
            arr[i] = false;
        }
    }
    if(arr.includes(false)){
        return false;
    }
    else{
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
