class Person {
	constructor(firstName, lastName, age) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._age = age;
	}

	set firstName(newName) {
		if (typeof newName != String) return "";
		else this._firstName = newName;
	}

	set lastName(newLastName) {
		if (typeof newLastName != String) return "";
		else this._lastName = newLastName;
	}

	set age(newAge) {
		if (newAge < 1) {
			this._age = 1;
		} else if (newAge > 110) {
			this._age = 110;
		} else {
			this._age = newAge;
		}
	}

	get firstName() {
		return this._firstName;
	}

	get lastName() {
		return this._lastName;
	}

	get age() {
		return this._age;
	}

	get fullName() {
		return this._firstName + " " + this._lastName;
	}
}
const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
