// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a
// list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a
// list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const guestList: string[] = ['Sikandar', 'Auranzaib', 'Muneeb','Saleem'];
console.log(`Mr. ${guestList[0]}, you are invited for annual dinner`);
console.log(`Mr. ${guestList[1]}, you are invited for annual dinner`);
console.log(`Mr. ${guestList[2]}, you are invited for annual dinner`);

// by using for loop
console.log(`\n ...................\n`);


for (let i=0; i<guestList.length; i++){
    console.log(`Mr. ${guestList[i]}, you are invited for annual dinner`);
}