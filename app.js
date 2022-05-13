//Responsive Navbar
const hamburger = document.querySelector(".hamburger");
const respNav = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  respNav.style.cssText = "transform: translateY(0);";
  document.querySelector(".close-btn").addEventListener("click", () => {
    respNav.style.cssText = "transform:translateY(-1500px);";
  });
});

//Certificates popup section
const allImages = document.querySelectorAll(".image");

allImages.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".popup").style.cssText = "display:block;";

    document.querySelector(".popup").addEventListener("click", () => {
      document.querySelector(".popup").style.cssText = "display:none;";
    });
  });
});

//Clients see more

const clientBtn = document.querySelector("#see");
clientBtn.addEventListener("click", () => {
  const displayFlex = document.querySelectorAll(".img-display-none");
  displayFlex.forEach((e) => {
    e.style.display = "flex";
  });
});

//cards
const btns = document.querySelectorAll(".btns");
const cards = document.querySelectorAll(".card");

btns.forEach((elem, i) => {
  elem.addEventListener("click", () => {
    //change the background color of buttons
    for (let k = 0; k < btns.length; k++) {
      const btn = btns[k];
      btn.style.backgroundColor = "#fff";
    }

    //for the card get hidden
    for (let j = 0; j < cards.length; j++) {
      const card = cards[j];
      card.style.cssText = "visibility: hidden; transform: scale(0);";
    }

    elem.style.backgroundColor = "#16152646";

    if (i === btns.length - 1) {
      cards[0].style.cssText = "visibility: visible; transform: scale(1);";
    } else {
      cards[i + 1].style.cssText = "visibility: visible; transform: scale(1);";
    }
  });
});
