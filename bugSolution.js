function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values by returning 0 or another default value
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null));// Output: 0