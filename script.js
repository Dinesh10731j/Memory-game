const ParentDiv = document.querySelector("#memory-game");

let Counter = 0;

let firstMatch = "";

let secondMatch = "";

const programmingLanguages = [
  {
    name: "JavaScript",
    image: "../images/javascript.png",
  },
  {
    name: "Python",
    image: "../images/python.png",
  },
  {
    name: "Java",
    image: "../images/java.png",
  },
  {
    name: "C++",
    image: "../images/cplus.png",
  },
  {
    name: "C#",
    image: "../images/csharp.png",
  },
  {
    name: "PHP",
    image: "../images/php.png",
  },

  {
    name: "JavaScript",
    image: "../images/javascript.png",
  },
  {
    name: "Python",
    image: "../images/python.png",
  },
  {
    name: "Java",
    image: "../images/java.png",
  },
  {
    name: "C++",
    image: "../images/cplus.png",
  },
  {
    name: "C#",
    image: "../images/csharp.png",
  },
  {
    name: "PHP",
    image: "../images/php.png",
  },
];

const cardMatched = () => {
  const cardSelected = document.querySelectorAll(".card-selected");
  cardSelected.forEach((matched) => {
    matched.classList.add("card-matched");
  });
};

const continuePlaying = () => {
  firstMatch = "";
  secondMatch = "";
  Counter = 0;
  const cardSelected = document.querySelectorAll(".card-selected");
  cardSelected.forEach((matched) => {
    matched.classList.remove("card-selected");
  });
};

ParentDiv.addEventListener("click", (e) => {
  const currentCard = e.target;
  if (currentCard.id === "memory-game") {
    return false;
  }

  Counter++;
  if (Counter < 3) {
    currentCard.parentNode.classList.add("card-selected");

    if (Counter === 1) {
      firstMatch = currentCard.parentNode.dataset.name;
      currentCard.parentNode.classList.add("card-selected");
    } else {
      secondMatch = currentCard.parentNode.dataset.name;
      currentCard.parentNode.classList.add("card-selected");
    }
    if (firstMatch !== "" && secondMatch !== "") {
      if (firstMatch === secondMatch) {
        setTimeout(cardMatched, 1000);

        setTimeout(continuePlaying, 1000);
      } else {
        continuePlaying();
      }
    }
  }
});

//Sorting the cards;
const shuffleCard = Array.from(
  programmingLanguages.sort(() => 0.5 - Math.random())
);

for (let data of shuffleCard) {
  let childDiv = document.createElement("div");
  childDiv.classList.add("cards");
  childDiv.dataset.name = data.name;

  let forntDiv = document.createElement("div");
  forntDiv.classList.add("front-card");

  let backDiv = document.createElement("div");
  backDiv.style.backgroundImage = `url(${data.image})`;
  backDiv.classList.add("back-card");

  ParentDiv.appendChild(childDiv);

  childDiv.appendChild(forntDiv);
  childDiv.appendChild(backDiv);
}
