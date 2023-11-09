function repeatHello(callback) {
	setInterval(() => callback(), 1000);
}

repeatHello(() => console.log("Hello"));


//Using the arrow function we solve the problem of a possible error of calling the wrong function inside the setInterval method; that is because with the arrow function we are sure that we call the callback inside in the right context, without any scope issues.