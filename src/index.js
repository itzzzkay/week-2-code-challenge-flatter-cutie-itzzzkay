document.addEventListener("DOMContentLoaded", getCharacters);

function getCharacters() {
  fetch("https://anything-you-want-blond.vercel.app/characters")
    .then((response) => response.json())
    .then((data) => {
      const characterBar = document.getElementById("character_bar");
      characterBar.innerHTML = "";

      data.forEach((character) => {
        const span = document.createElement("span");
        span.textContent = character.name;
        span.addEventListener("click", () => characterDetails(character));
        characterBar.appendChild(span);
      });
    })
    .catch((error) => console.error(error));
}

function characterDetails(character) {
  const name = document.getElementById("name");
  const image = document.getElementById("image");
  const votes = document.getElementById("vote-count");

  name.textContent = character.name;
  image.src = character.image;
  image.alt = character.name;
  votes.textContent = character.votes;
}
