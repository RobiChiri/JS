async function fetchToDos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
}

fetchToDos()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
