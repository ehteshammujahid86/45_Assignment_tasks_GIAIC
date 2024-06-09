// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to
// try more comparisons, write more tests. Have at least one True and one False result for each of the
// following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let car1 = "TOYOTA";
let car2 = "toyota";

let test_1 = console.log(car1 === car2 ? "true"  :  "false");
let test_2 = console.log(car1.toLowerCase() === car2 ? "true"  :  "false");
 
let num1 = 4;
let num2 = 5;

let test_3a = console.log(num1>num2 ? "true"  :  "false");
let test_3b = console.log(num1>=num2 ? "true"  :  "false");
let test_3c = console.log(num1<num2 ? "true"  :  "false");
let test_3d = console.log(num1<=num2 ? "true"  :  "false");

let test_4 = console.log(car1 && car2 ? "true" :  "false");
let test_5 = console.log(car1 || car2 ? "true" :  "false");


