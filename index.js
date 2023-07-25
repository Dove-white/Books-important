let myNav = document.getElementById("myNav");
let myList = false;

function openCloseNav() {
  if (myList == false) {
    myNav.style.height = "100%";
    myList = true;
  } else if (myList == true) {
    myNav.style.height = "0%";
    myList = false;
  }
}

function toTransform(x) {
  x.classList.toggle("change");
}

let typed = new Typed('.my-names', {
    strings: [
      'Dugbazah',
      'Redeemer',
    ],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500,
    loop: false,
    showCursor: true,
    cursorChar: '|',
  });

  let typed2 = new Typed('.site-title', {
    strings: [
      'DESIGN',
      'JS',
      'FUNCTIONS',
    ],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500,
    loop: false,
    showCursor: true,
    cursorChar: '|',
  });