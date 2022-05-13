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
cards = document.querySelectorAll(".card");

btns.forEach((e) => {
  e.addEventListener("click", () => {
    //change the background color of button
    btns[0].style.backgroundColor = "#fff";
    btns[1].style.backgroundColor = "#fff";
    btns[2].style.backgroundColor = "#fff";
    btns[3].style.backgroundColor = "#fff";
    btns[4].style.backgroundColor = "#fff";
    btns[5].style.backgroundColor = "#fff";

    //for the card get hidden
    cards.forEach((card) => {
      card.style.cssText = "visibility: hidden; transform: scale(0);";
    });

    if (e === btns[0]) {
      btns[0].style.backgroundColor = "#16152646";
      cards[1].style.cssText = "visibility: visible; transform: scale(1);";
    } else if (e === btns[1]) {
      btns[1].style.backgroundColor = "#16152646";
      cards[2].style.cssText = "visibility: visible; transform: scale(1);";
    } else if (e === btns[2]) {
      btns[2].style.backgroundColor = "#16152646";
      cards[3].style.cssText = "visibility: visible; transform: scale(1);";
    } else if (e === btns[3]) {
      btns[3].style.backgroundColor = "#16152646";
      cards[4].style.cssText = "visibility: visible; transform: scale(1);";
    } else if (e === btns[4]) {
      btns[4].style.backgroundColor = "#16152646";
      cards[5].style.cssText = "visibility: visible; transform: scale(1);";
    } else {
      btns[5].style.backgroundColor = "#16152646";
      cards[0].style.cssText = "visibility: visible; transform: scale(1);";
    }
  });
});
