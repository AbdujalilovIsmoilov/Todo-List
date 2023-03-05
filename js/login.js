"use strict";

function AddToLogin(email, password) {
  this.email = document.querySelector(email);
  this.password = document.querySelector(password);
}

const login = new AddToLogin("#loginEmail", "#loginPassword");
const getLocalStorageValue = JSON.parse(localStorage.getItem("queries"));

function fullQueries() {
  if (
    this.email.value.trim() == getLocalStorageValue.email &&
    this.password.value.trim() == getLocalStorageValue.password
  ) {
    window.location.href = "../index.html";
  } else {
    const getLocalStorageValue = JSON.parse(localStorage.getItem("queries"));
    alert("Error Request");
    console.log(getLocalStorageValue.username);
  }
}

form.addEventListener("submit", e => {
  e.preventDefault();
  fullQueries.bind(login).call();
});
