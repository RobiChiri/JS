function calculateAverageAge(persons) {
	return Math.round(
		persons.reduce((a, b, i) => {
			if (i == 1) {
				return a.age + b.age;
			} else {
				return a + b.age;
			}
		}) / persons.length
	);
}

const persons = [
	{ name: "Paul", age: 16 },
	{ name: "George", age: 17 },
	{ name: "Lucas", age: 21 },
	{ name: "Marco", age: 32 },
	{ name: "Peter", age: 18 },
	{ name: "Carl", age: 13 },
	{ name: "Simon", age: 24 },
	{ name: "Mark", age: 15 },
	{ name: "Sandra", age: 34 },
	{ name: "Alice", age: 28 },
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);
