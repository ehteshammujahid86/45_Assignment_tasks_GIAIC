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
var car1 = "TOYOTA";
var car2 = "toyota";
var test_1 = console.log(car1 === car2 ? "true" : "false");
// let test_2 = console.log(car1.toLowerCase() === car2 ? "true"  :  "false");
var num1 = 4;
var num2 = 5;
var test_3a = console.log(num1 > num2 ? "true" : "false");
var test_3b = console.log(num1 >= num2 ? "true" : "false");
var test_3c = console.log(num1 < num2 ? "true" : "false");
var test_3d = console.log(num1 <= num2 ? "true" : "false");
var test_4 = console.log(car1 && car2 ? "true" : "false");
var test_5 = console.log(car1 || car2 ? "true" : "false");
