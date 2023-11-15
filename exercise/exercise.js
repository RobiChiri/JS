const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function loadUser() {
  const loadedUser = localStorage.getItem("user");

  if (loadedUser) {
    const parsedUser = JSON.parse(loadedUser);
    console.log("User ID:", parsedUser.id);
    console.log("User Name:", parsedUser.name);
    console.log("User Age:", parsedUser.age);
  } else {
    console.log("No user data found in localStorage.");
  }
}

saveUser(user);
loadUser();
