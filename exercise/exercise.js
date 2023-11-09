const isLogged = true;

function checkIfLogged() {
	return new Promise((resolve, reject) => {
		if (isLogged) {
			resolve(Math.random());
		} else {
			reject(new Error("User is not logged in"));
		}
	});
}

//  Create a second function that also returns a promise
function checkRandomNumber(random) {
	return new Promise((resolve, reject) => {
		if (random > 0.5) {
			resolve({ name: "John", age: 24 });
		} else {
			reject(new Error("Random number is not greater than 0.5"));
		}
	});
}

// Chain the promises together using the then method
checkIfLogged()
	.then(random => checkRandomNumber(random))
	.then(finalObject => console.log(finalObject))
	.catch(error => console.error("Caught an error:", error))
	.finally(() => console.log("Finally"));
