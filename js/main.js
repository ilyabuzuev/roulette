import data from "../data/data.js";

const chestsList = document.getElementById('chestsList');
const rouletteBox = document.getElementById('rouletteBox');
const overlay = document.getElementById('overlay');

function setChests(chests) {
  chests.forEach(chest => {
    chestsList.innerHTML += `
      <li class="chests__item chest ${chest.chestRarity}" id="${chest.chestID}">
        <div class="chest__top">
          <img class="chest__img" src="${chest.chestImg}" alt="${chest.chestName}">
        </div>
        <div class="chest__bottom">
          <h3 class="chest__name">${chest.chestName}</h3>
          <p class="chest__description">${chest.chestDescription}</p>
        </div>
      </li>
    `;
  });
};

function getChests() {
  const chestsList = document.querySelectorAll('.chest');

  return chestsList;
  
};

function createRouletteBox(chestsData, chests) {
  const windowWidth = 'width: 1200px';
  const windowHeight = 'height: 200px';

  chests.forEach(chest => {
    chest.addEventListener('click', () => {
      renderRouletteBox(chestsData[chest.id]);

      overlay.classList.remove('display-none');
    })
  })

  function renderRouletteBox(chestContent) {
    rouletteBox.innerHTML += `
      <div class="roulette__container">
        <div class="roulette__top">
          <div class="roulette__window" style="${windowWidth}; ${windowHeight}"></div>
        </div>
        <div class="roulette__bottom">
          <h3 class="roulette__heading ${chestContent.chestRarity}">${chestContent.chestName}</h3>
          <ul class="roulette__list list-reset" id="rouletteList"></ul>
        </div>
      </div>
      <button class="roulette__close button-reset" id="rouletteClose">✕</button>
    `;

    const rouletteList = document.getElementById('rouletteList');
    const rouletteClose = document.getElementById('rouletteClose');

    chestContent.chestStones.forEach(stone => {
      rouletteList.innerHTML += `
        <li class="roulette__item stone ${stone.stoneRarity}">
          <img class="stone__img" src="${stone.stoneImg}" alt="${stone.stoneName}">
          <h4 class="stone__name">${stone.stoneName}</h4>
        </li>`
    });

    closeRouletteBox();
  }
};

function closeRouletteBox() {
  rouletteClose.addEventListener('click', () => {
    rouletteBox.innerHTML = '';

    overlay.classList.add('display-none');
  });

  overlay.addEventListener('click', () => {
    rouletteBox.innerHTML = '';

    overlay.classList.add('display-none');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      rouletteBox.innerHTML = '';

      overlay.classList.add('display-none');
    }
  });
}

function main() {
  const chestsData = data.chests;

  setChests(chestsData);

  const chests = getChests();

  createRouletteBox(chestsData, chests);
};

main();
