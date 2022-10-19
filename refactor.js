function returnRandomNumber() {
  return Math.random();
}

function roundNum(num){
  return Math.round(num * 100);
}

function randomMath(num, numCalculator, randomM){
  switch(randomM){
    case 1: 
      return `Seu número é ${roundNum(numCalculator) + num}!`;
    case 2:
      return `Seu número é ${roundNum(numCalculator) - num}!`;
    case 3:
      return `Seu número é ${roundNum(numCalculator) * num}!`;
    case 4:
      return `Seu número é ${roundNum(numCalculator) / num}!`;
  }
}