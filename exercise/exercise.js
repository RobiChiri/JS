let promise = new Promise((resolve, reject) => {
  const number = 15;
  if (number > 10)
    resolve(number)
  else
    reject(number)
})


promise
  .then((number) => console.log(`${number} is greater than 10`))
  .catch ((number) => console.log(`${number} is less than 10`))



