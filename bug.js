function myFunction(a, b) {
  return a - b; 
}

console.log(myFunction(10, 5)); // Expected: 5
console.log(myFunction(5, 10)); // Expected: -5
console.log(myFunction(NaN, 5)); // Expected: NaN, but may return unexpected results depending on JS engine