// 8 түрлі сан (әрқайсысы 2 рет қайталанады)
const values = [
  "1",
  "1",
  "2",
  "2",
  "3",
  "3",
  "4",
  "4",
  "5",
  "5",
  "6",
  "6",
  "7",
  "7",
  "8",
  "8",
];
values.sort(() => Math.random() - 0.5); // Араластырамыз

const cards = [];
const winMessage = document.getElementById("winMessage");

let firstCard = null;
let secondCard = null;
let matchedPairs = 0;

// 16 карточканы алу
for (let i = 1; i <= 16; i++) {
  let card = document.getElementById("c" + i);
  cards.push(card);

  // Карточка басқанда
  card.onclick = function () {
    if (secondCard || card.innerHTML !== "?") return;

    card.innerHTML = values[i - 1]; // Санды көрсету
    card.style.backgroundColor = "green"; // 🌟 ЖАСЫЛ ТҮСКЕ ӨЗГЕРТУ

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;

      if (firstCard.innerHTML === secondCard.innerHTML) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        firstCard.style.backgroundColor = "gray";
        secondCard.style.backgroundColor = "gray";
        matchedPairs++;

        if (matchedPairs === 8) {
          // Барлық жұп табылса
          winMessage.style.display = "block";
        }

        firstCard = null;
        secondCard = null;
      } else {
        setTimeout(() => {
          firstCard.innerHTML = "?";
          secondCard.innerHTML = "?";
          firstCard.style.backgroundColor = "blue";
          secondCard.style.backgroundColor = "blue";
          firstCard = null;
          secondCard = null;
        }, 1000);
      }
    }
  };
}
