"use strict";

const getLocalStorageValue = JSON.parse(localStorage.getItem("queries"));
if (!getLocalStorageValue) {
  window.location.href = "../html/registr.html";
} else {
  alert(
    `Welcome to ${getLocalStorageValue.username} ${getLocalStorageValue.lastname}`
  );
}
