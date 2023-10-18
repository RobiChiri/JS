const person = {
	firstName: "Mario",
	lastName: "Rossi",
	age: 25,
};

// Print values of person using Object.keys

let keys = Object.keys(person);

keys.forEach(key => console.log(key + " " + person[key]));
