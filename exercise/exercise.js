class Person {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	set firstName(newName) {
		if (typeof newName != String) return "";
		else this.firstName = newName;
	}

	set lastName(newLastName) {
		if (typeof newLastName != String) return "";
		else this.lastName = newLastName;
	}

	set age(newAge) {
		if (newAge < 1) {
			this.age = 1;
		} else if (newAge > 110) {
			this.age = 110;
		} else {
			this.age = newAge;
		}
	}

	get firstName() {
		return this.firstName;
	}

	get lastName() {
		return this.lastName;
	}

	get age() {
		return this.age;
	}

	get fullName() {
		return this.firstName + " " + this.lastName;
	}
}
const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
