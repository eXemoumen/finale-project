var navbtn = document.getElementById("data-navbtn");
var dropdown = document.querySelector(" [data-dropdown] ");
var emailbox = document.querySelector("[data-emailbox]");
var passwordbox = document.querySelector("[data-passwordbox]");
var loginbtn = document.querySelector("[data-loginbtn]");
var text = document.getElementById("text");
var password = document.getElementById("password-text");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var emailvalid = "";
var pwvalid = "";
var btnsroole = document.querySelector("[data-scroolbtn]");
const cards = document.getElementsByClassName("card");
const menubtn = document.querySelector("[data-menubtn]");

function dropdownmenu() {
  dropdown.classList.remove;
  dropdown.classList.add("dropdown-items-active");
}
function menudropdown() {
  menubtn.style.display = "block";
}

function submit() {
  let email = emailbox.value;
  let pswrd = passwordbox.value;
  emailverification(email, emailvalid);
  passworverification(pswrd, pwvalid);
  console.log(emailvalid, pwvalid);
  if (emailvalid == "valid" && pwvalid == "valid") {
    window.location.href = "pages/mainpage.html";
    return;
  }
}
function emailverification(email) {
  if (email == "") {
    text.innerHTML = "entre a email";
    text.style.color = "#ff0000";
    emailbox.classList.add("a");
  } else if (email.match(pattern)) {
    text.innerHTML = "your email is valid.";
    text.style.color = "#00ff00";
    emailvalid = "valid";
  } else {
    text.innerHTML = "please try again!!";
    text.style.color = "#ff0000";
  }
}
function passworverification(pswrd) {
  if (pswrd == "") {
    password.innerHTML = "entre a password";
    password.style.color = "#ff0000";
  } else if (pswrd.length > 8) {
    console.log(pswrd.length);
    password.innerHTML = "your password is valid.";
    password.style.color = "#00ff00";
    pwvalid = "valid";
  } else {
    password.innerHTML = "entre 8 caractrs";
    password.style.color = "#ff0000";
  }
}
function cardinfo() {
  console.log("helo");
  window.location.href = "../pages/info.html";

  return;
}
