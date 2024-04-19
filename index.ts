// Day 5
// Question 13

let cars = ["Audi","Civic","Alto"]
for(let i = 0;i<cars.length ; i++ ){
    console.log(`I would like to own a ${cars[i]}`)
}

// Question 14

let invited_peoples = ["Saad","Mahad ","Hamza"]
for(let i = 0;i<invited_peoples.length ; i++ ){
    console.log(`${invited_peoples[i]} You Are Invited To Dinner`)
}

// Question 15


let unableToAttend = "Saad"; // Corrected the name without extra spaces
console.log(`${unableToAttend} can not make it to dinner`);

let newGuest = "Abdul Samad";
let index = invited_peoples.indexOf(unableToAttend); // Removed .trim() method
if (index !== -1) {
    invited_peoples[index] = newGuest;
}

invited_peoples.forEach(invited_person => {
    console.log(`${invited_person} You Are Invited To Dinner`);
});


