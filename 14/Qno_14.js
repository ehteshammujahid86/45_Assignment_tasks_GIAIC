// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a
// list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a
// list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ['Sikandar', 'Auranzaib', 'Muneeb', 'Saleem'];
console.log("Mr. ".concat(guestList[0], ", you are invited for annual dinner"));
console.log("Mr. ".concat(guestList[1], ", you are invited for annual dinner"));
console.log("Mr. ".concat(guestList[2], ", you are invited for annual dinner"));
// by using for loop
console.log("\n ...................\n");
for (var i = 0; i < guestList.length; i++) {
    console.log("Mr. ".concat(guestList[i], ", you are invited for annual dinner"));
}
