// Day 5
// Question 13
var cars = ["Audi", "Civic", "Alto"];
for (var i = 0; i < cars.length; i++) {
    console.log("I would like to own a ".concat(cars[i]));
}
// Question 14
var invited_peoples = ["Saad", "Mahad ", "Hamza"];
for (var i = 0; i < invited_peoples.length; i++) {
    console.log("".concat(invited_peoples[i], " You Are Invited To Dinner"));
}
// Question 15
var unableToAttend = "Saad"; // Corrected the name without extra spaces
console.log("".concat(unableToAttend, " can not make it to dinner"));
var newGuest = "Abdul Samad";
var index = invited_peoples.indexOf(unableToAttend); // Removed .trim() method
if (index !== -1) {
    invited_peoples[index] = newGuest;
}
invited_peoples.forEach(function (invited_person) {
    console.log("".concat(invited_person, " You Are Invited To Dinner"));
});
// let unableToAttend = "Saad"
// console.log(`${unableToAttend} can not make it dinner`)
// let newGuest = "Abdul Samad";
// let index = invited_peoples.indexOf(unableToAttend.trim()); // Trimmed the name to remove spaces before comparison
// if (index !== -1) {
//     invited_peoples[index] = newGuest;
// }
// invited_peoples.forEach(invited_peoples => {
//     console.log(`${invited_peoples}You Are Invited To Dinner`)
//     }
// )
// for(let i = 0;i<invited_peoples.length ; i++ ){
//     console.log(`${invited_peoples[i]}You Are Invited To Dinner`)
// }
