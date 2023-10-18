const person = {
	firstName: "Mario",
	lastName: "Rossi",
	age: 25,
};

// Print values of person using Object.keys

let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);

console.log(keys);
console.log(values);
console.log(entries);
