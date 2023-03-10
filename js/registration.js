"use strict";

function AddToRegistration(username, lastname, email, password) {
  this.username = document.querySelector(username);
  this.lastname = document.querySelector(lastname);
  this.email = document.querySelector(email);
  this.password = document.querySelector(password);
}

const todoList = new AddToRegistration(
  "#username",
  "#lastname",
  "#email",
  "#password"
);

function fullQueries() {
  if (
    this.username.value.trim() != "" ||
    this.lastname.value.trim() != "" ||
    this.email.value.trim() != "" ||
    this.password.value.trim() != ""
  ) {
    const objectQueries = {
      username: this.username.value,
      lastname: this.lastname.value,
      email: this.email.value,
      password: this.password.value
    };
    localStorage.setItem("queries", JSON.stringify(objectQueries));
  }
  console.log(this);
}

form.addEventListener("submit", e => {
  e.preventDefault();
  fullQueries.bind(todoList).call();
  if (
    todoList.username.value.trim() != "" &&
    todoList.lastname.value.trim() != "" &&
    todoList.email.value.trim() != "" &&
    todoList.password.value.trim() != ""
  ) {
    window.location.href = "login.html";
  } else {
    alert("Error Request");
  }
});
