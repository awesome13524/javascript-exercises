const fibonacci = function(n) {
    if(n < 1){
        return 'OOPS';
    }
    if(n === 1 || n === 2){
        return 1;
    }
    let arr = [1, 1]
    for(let i = 2; i < n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
