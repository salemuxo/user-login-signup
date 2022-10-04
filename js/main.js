// USER LOGIN / SIGNUP

// global variables
const users = loadUsers();

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  // local variables
  let usernameIn = document.getElementById("username-input-SU").value;
  let passwordIn = document.getElementById("password-input-SU").value;
  let conPassIn = document.getElementById("confirm-password-input-SU").value;

  // check if passwords match and username and password arent blank
  if (passwordIn === conPassIn && usernameIn != "" && passwordIn != "") {
    // loop through array and check if username exists -> alert and return
    for (let i = 0; i < users.length; i++) {
      if (usernameIn === users[i].username) {
        alert("Username already in use");
        return;
      }
    }
    // if username doesnt exist -> add object to array and alert
    users.push(newUser(usernameIn, passwordIn));
    saveUsers();
    alert(`New user added: ${usernameIn}`);
  } else alert("Invalid sign up form"); // if passwords dont match and/or blank fields -> alert
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  // local variables
  let usernameIn = document.getElementById("username-input-SI").value;
  let passwordIn = document.getElementById("password-input-SI").value;

  // loop through array and check if username and password match -> alert and return
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === usernameIn && users[i].password === passwordIn) {
      alert("Login success");
      return;
    }
  }
  // if no matching username and password found -> alert
  alert("Invalid login");
}

// helper functions
// create new user object from username and password
function newUser(usernameIn, passwordIn) {
  return {
    username: usernameIn,
    password: passwordIn,
  };
}

// save users to localStorage
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

// load users from localStorage
function loadUsers() {
  let userStr = localStorage.getItem("users");
  return JSON.parse(userStr) ?? [];
}
