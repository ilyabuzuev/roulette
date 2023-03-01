function getRandomNumber(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function createRandomList(stoneChances) {
  let chances = [];
  let numberList = [];
  let randomNumber;
  let chancesSum;

  stoneChances.forEach(chance => chances.unshift(chance));

  for (let i = 0; numberList.length < 100; i++) {
    chancesSum = chances.reduce((prev, curr) => prev + curr);
    
    randomNumber = getRandomNumber(0, chancesSum);
  
    outer:
    for (let j = 0; j < chances.length; j++) {
      if (randomNumber >= (chancesSum - chances[j]) && randomNumber < chancesSum) {
        numberList.push(chances[j]);
        break;
      } else {
        chancesSum -= chances[j];
          continue outer;
      }
    }
  }

  return numberList;
}

let chances = [80, 11, 5, 2, 1, 0.5, 0.3, 0.2, 0.1];
let randomNumber;

let generatedList = createRandomList(chances);

const numbersCount = {};

for (let i = 0; i < generatedList.length; i++) {
  numbersCount[generatedList[i]] = 0;
}

for (let i = 0; i < generatedList.length; i++) {
  numbersCount[generatedList[i]] += 1;
}

console.log(numbersCount);