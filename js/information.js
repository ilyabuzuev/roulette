import { stones } from "../data/data.js";

const information = () => {
  const informationList = document.getElementById('informationList');

  const formatStr = (str) => {
    let formatedStr = str.substr(0, 1).toUpperCase() + str.substr(1, str.length - 1);
    
    return formatedStr;
  }

  for (let stone in stones) {
    informationList.innerHTML += `
      <li class="information__item item-information ${stones[stone].stoneRarity}">
        <div class="item-information__left">
          <img class="item-information__img" src=${stones[stone].stoneImg} alt=${stones[stone].stoneName}>
        </div>
        <div class="item-information__right">
          <h3 class="item-information__title">${stones[stone].stoneName}</h3>
          <p class="item-information__rarity">${formatStr(stones[stone].stoneRarity)}</p>
          <p class="item-information__description">${stones[stone].stoneDescription}</p>
        </div>
      </li>
    `;
  }
}

information();