let mainCon = document.querySelector(".main-container");
let container = document.querySelector(".container");
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let popCoins = document.querySelectorAll(".pop-coins");
let popMain = document.querySelector(".popMain");
let win = document.querySelector(".win");
let restartBtn = document.querySelector(".restart");

let heads = 0;
let tails = 0;
for (let i = 0; i < popCoins.length; i++) {
  popCoins[i].style.display = "none";
}
popMain.style.display = "none";
win.style.display = "none";
restartBtn.style.display = "none";

flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spinTheHeads 3s forwards";
    }, 100);

    heads++;

    setTimeout(function () {
      for (let i = 0; i < popCoins.length; i++) {
        popCoins[i].style.display = "block";
      }
      popMain.style.display = "block";
      win.style.display = "block";
      restartBtn.style.display = "block";
      restartBtn.addEventListener("click", function () {
        document.location.reload();
      });
    }, 3000);
  } else {
    setTimeout(function () {
      coin.style.animation = "spinTheTails 3s forwards";
    }, 100);
    tails++;
  }

  disableButton();
});

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 3000);
}
