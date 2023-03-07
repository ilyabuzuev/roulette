import { data } from "../data/data.js";

const chestsList = document.getElementById('chestsList');
const rouletteBox = document.getElementById('rouletteBox');
const overlay = document.getElementById('overlay');
const prizeWindow = document.getElementById('prizeWindow');
const prizeOverlay = document.getElementById('prizeOverlay');

let isAnimate = false;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min + 1) + min;
}

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
  const windowWidth = 'width: 1000px';
  const windowHeight = 'height: 200px';

  let currentChest;

  chests.forEach(chest => {
    chest.addEventListener('click', () => {
      currentChest = chestsData[chest.id];

      renderRouletteBox(currentChest);

      overlay.classList.remove('display-none');
    })
  })

function renderRouletteBox(chestContent) {
  rouletteBox.innerHTML += `
    <div class="roulette__container">
      <div class="roulette__top">
        <div class="roulette__window" style="${windowWidth}; ${windowHeight}">
          <ul class="stones__list list-reset" id="stonesList"></ul>
          <div class="roulette__arrow"></div>
        </div>
      </div>
      <div class="roulette__bottom">
        <h3 class="roulette__heading ${chestContent.chestRarity}">${chestContent.chestName}</h3>
        <ul class="roulette__list list-reset" id="rouletteList"></ul>
        <button class="roulette__button button-reset" id="startButton">Крутить</nutton>
      </div>
    </div>
    <button class="roulette__close button-reset" id="rouletteClose">✕</button>
  `;

  const rouletteList = document.getElementById('rouletteList');

  chestContent.chestStones.forEach(stone => {
    rouletteList.innerHTML += `
      <li class="roulette__item stone ${stone.stoneRarity}">
        <img class="stone__img" src="${stone.stoneImg}" alt="${stone.stoneName}">
        <h4 class="stone__name">${stone.stoneName}</h4>
      </li>`
  });

  function createRandomList(chestContent) {
    let chestStones = chestContent.chestStones;
    let stones = [];
    let chances = [];
    let numberList = [];
    let randomNumber;
    let chancesSum = 0;
  
    for (let i = 0; i < chestStones.length; i++) {
      stones.unshift([
        chestStones[i].stoneName,
        chestStones[i].stoneChance,
        chestStones[i].stoneImg,
        chestStones[i].stoneRarity,
      ]);
    }

    stones.forEach(stone => {
      chances.push(stone[1]);
    })

    for (let i = 0; numberList.length < 100; i++) {
      chancesSum = chances.reduce((prev, curr) => prev + curr);
    
      randomNumber = getRandomNumber(0, chancesSum);
  
      outer:
      for (let j = 0; j < stones.length; j++) {
        if (randomNumber >= (chancesSum - stones[j][1]) && randomNumber < chancesSum) {
          numberList.push(stones[j]);
          break;
        } else {
          chancesSum -= stones[j][1];
            continue outer;
        }
      }
    }

    return numberList;
  }

  const stonesList = document.getElementById('stonesList');

  function renderElements(list) {
    for (let i = 0; i < list.length; i++) { 
      stonesList.innerHTML += `<li class="stones__item ${list[i][3]}"><img class="stones__img" src="${list[i][2]}" alt="${list[i][0]}"></li>` 
    }
  }
  
  function getPrize(numberList, itemID) {
    return numberList[itemID];
  }

  function rotateTo(width, margin, id) {
    return (width * id + margin * id) - (width * 3 + margin * 2) + getRandomInt(0, width);
  }

  function animate({timing, draw, duration}) {
    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
  
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction);
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  function showPrize(list, id) {
    let stoneName = list[id][0];
    let formatWinStoneName = stoneName.charAt(0).toUpperCase() + stoneName.slice(1);

    prizeWindow.classList.remove('display-none');
    prizeWindow.classList.add(`${list[id][3]}`);

    prizeOverlay.classList.remove('display-none');
  
    prizeWindow.innerHTML = `
      <div class="prize__top">
        <img class="prize__img" src="${list[id][2]}" alt="${formatWinStoneName}">
      </div>
      <div class="prize__name ${list[id][3]}">${formatWinStoneName}</div>
      <button class="prize__button button-reset" id="acceptPrizeButton">Подтвердить</button>
    `;
  
    animate({
      duration: 600,
      timing: function easyOut(timeFraction) {
        return 1 - Math.pow(1 - timeFraction, 3)
      },
      draw: function(progress) {
        prizeWindow.style.boxShadow = `0px 0px ${progress * 130}px 30px`;
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target.id == 'prizeOverlay' || e.target.id == 'acceptPrizeButton') {
        prizeWindow.innerHTML = '';
        prizeWindow.className = 'prize__window display-none';

        prizeOverlay.classList.add('display-none');

        startButton.classList.remove('disabled');

        stonesList.innerHTML = '';

        isAnimate = false;
      }
    });
  }

  function clearStonesList() {
    stonesList.innerHTML = '';
  }

  function savePrizeToHistory(list, id) {
    let prize = list[id];
    let prizeHistory = [];
    let currentPrizeHistory;

    if (!localStorage.getItem('prizeHistory')) {
      prizeHistory.push(prize);
    } else {
      currentPrizeHistory = JSON.parse(localStorage.getItem('prizeHistory'));
    
      currentPrizeHistory.forEach(prize => {
        prizeHistory.push(prize);
      });

      prizeHistory.push(prize);
    }

    localStorage.setItem('prizeHistory', JSON.stringify(prizeHistory));
  }

  closeRouletteBox();

  const startButton = document.getElementById('startButton');

  startButton.addEventListener('click', () => {
    clearStonesList();

    let itemWidth = 160;
    let itemMargin = 10;
    let itemID = 70;

    let rotate = rotateTo(itemWidth, itemMargin, itemID);
    let createdList = createRandomList(currentChest);

    startButton.classList.add('disabled');

    isAnimate = true;

    renderElements(createdList);

    savePrizeToHistory(createdList, itemID);

    animate({
      duration: 10000,
      timing: function easeOut(timeFraction) {
        return 1 - Math.pow(1 - timeFraction, 3);
      },
      draw: function(progress) {
        stonesList.style.right = progress * rotate + 'px';
      }
    });

    setTimeout(function() {
      showPrize(createdList, itemID);
    }, 10200);
  });
  }
};

function closeRouletteBox() {
  rouletteClose.addEventListener('click', () => {
    if (!isAnimate) {
      rouletteBox.innerHTML = '';

      overlay.classList.add('display-none');
    }
  });

  overlay.addEventListener('click', () => {
    if (!isAnimate) {
      rouletteBox.innerHTML = '';

      overlay.classList.add('display-none');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      if (!isAnimate) {
        rouletteBox.innerHTML = '';
  
        overlay.classList.add('display-none');
      }
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
