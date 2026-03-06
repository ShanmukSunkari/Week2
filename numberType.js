//numberTypeFunction.js
function numberType(num) {
  // 1. Declare and initialize the variable 
  let number = num;

  // 2. Conditional checks
  if (number > 0) {
    return "Positive Number";
  } else if (number < 0) {
    return "Negative Number";
  } else {
    return "Number is Zero";
  }
}

// 3. Call the function and print the result
let result = numberType(0);
console.log(result);