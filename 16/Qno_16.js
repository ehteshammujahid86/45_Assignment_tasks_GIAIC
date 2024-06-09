// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
var guestList = ['Sikandar', 'Auranzaib', 'Muneeb',];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner!"));
}
console.log("\nMr ".concat(guestList[1], " could not make it\n"));
guestList.splice(1, 1, "Saleem");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner!"));
}
console.log("\n I found a bigger table for dinner, so i would like to invite three more guests.\n");
guestList.push('Umer');
guestList.unshift('Daniyal');
guestList.splice(2, 0, "Ali");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner!"));
}
