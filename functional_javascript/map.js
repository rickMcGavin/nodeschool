// function doubleAll(numbers) {
//   //SOLUTION GOES HERE
//   var result = numbers.map(function(number) {
//     return number * 2;
//   });
//   return result;
// }

// Better solution
function doubleAll(numbers) {
  return numbers.map(function(number) {
    return number * 2;
  });
}

module.exports = doubleAll;
