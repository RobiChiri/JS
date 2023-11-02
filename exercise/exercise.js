const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

// const json = JSON.stringify(person.id, person.age);

const getIdAndAge = person => {
	return {
		id: person.id,
		age: person.age,
	};
};

const json = JSON.stringify(getIdAndAge(person));


console.log(json); // Should return: { id: 1, age: 25 }