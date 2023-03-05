const prizeHistory = () => {
  const historyList = document.getElementById('historyList');
  const clearPrizeHistoryButton = document.getElementById('clearPrizeHistoryButton');

  function getPrizeHistory() {
    return JSON.parse(localStorage.getItem('prizeHistory'));
  }

  function setHistoryContent(prizeHistory) {
    if (prizeHistory) {
      prizeHistory.forEach((prize, index) => {
        historyList.innerHTML += `
          <li class="history__item item-history" data-id="${index}">
            <p class="item-history__name ${prize[3]}">${prize[0]}</p>
            <img class="item-history__img" src=${prize[2]} alt=${prize[0]}>
            <p class="item-history__description">${prize[5]}</p>
          </li>
        `
      });
    } else {
      historyList.innerHTML = `<p class="history__message">История выпадений отсутсвует</p>`;
    }
  }

  function clearPrizeHistory() {
    historyList.innerHTML = '';

    localStorage.removeItem('prizeHistory');

    historyList.innerHTML = `<p class="history__message">История выпадений отсутсвует</p>`;
  }

  clearPrizeHistoryButton.addEventListener('click', () => {
    clearPrizeHistory();
  });

  let prizeHistory = getPrizeHistory();

  setHistoryContent(prizeHistory);
};

prizeHistory();