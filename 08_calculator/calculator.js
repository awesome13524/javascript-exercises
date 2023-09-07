const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current) => {
    return (product * current);
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if(n === 0){
    return 1;
  }
  for(i = n - 1; i > 1; i--){
    n *= i;
  }
  return n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
