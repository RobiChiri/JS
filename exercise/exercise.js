const person1 = {
	firstName: "John",
	lastName: "Doe",
	age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// the assignment person2 = person1 does not create a copy of the object person1 but person2 points at the same area of memory of person1 (objects in general are references of a specific area of memory). Because of that when I change a value in person1 or person2 the change is visible on the other object too.
