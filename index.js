// index.js
const divide = function(a, b) {
    return a / b;
  };
  
  const square = (x) => x * x;
  
  const add = (a, b) => a + b;
  
  
  // Export the functions.  This is CRUCIAL for making them accessible in other files.
  module.exports = {
    divide,
    square,
    add
  };
  
  
  // OR, you can export individually:
  // module.exports.divide = divide;
  // module.exports.square = square;
  // module.exports.add = add;