// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
// dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop
// a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you
// actually have an empty list at the end
// of your program.
var guestList = ['Sikandar', 'Auranzaib', 'Muneeb',];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner!"));
}
console.log("\nMr ".concat(guestList[1], " could not make it\n"));
guestList.splice(1, 1, "Saleem");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner!"));
}
console.log("\n I found a bigger table for dinner, so i would like to invite three more guests\n");
guestList.push('Umer');
guestList.unshift('Daniyal');
guestList.splice(2, 0, "Ali");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner!"));
}
console.log("\n Sorry I only Invite Two people\n");
for (var j = guestList.length; j = guestList.length - 2; j--) {
    console.log("Sorry Mr. ".concat(guestList[j], ", You're Not invited for tonight dinner due to tabble issue "));
    guestList.pop();
}
console.log("\n Mr. ".concat(guestList[0], ", you are still invited for annual dinner"));
console.log("Mr. ".concat(guestList[1], ", you are still invited for annual dinner"));
guestList.pop();
guestList.pop();
console.log(guestList);
