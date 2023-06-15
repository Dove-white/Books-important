let myNav = document.getElementById("myNav");
let myList = false;

function openCloseNav() {
  if (myList == false) {
    myNav.style.width = "100%";
    myList = true;
  } else if (myList == true) {
    myNav.style.width = "0%";
    myList = false;
  }
}

function toTransform(x) {
  x.classList.toggle("change");
}
