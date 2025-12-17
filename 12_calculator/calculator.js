const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((total, element) => total += element, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, element) => total *= element, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
	let total = a
  for (let i = a - 1; i > 0; i--)
    total *= i
  return (total != 0) ? total : 1
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
