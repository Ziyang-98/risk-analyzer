// Get m random unique numbers from 0 to n-1
export function getRandomNumbers(n, m) {
  const randomNos = [];
  while (randomNos.length < m) {
    const num = Math.floor(Math.random() * n);
    if (randomNos.indexOf(num) === -1) randomNos.push(num);
  }
  return randomNos;
}

export function generateRandom(min, max) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}
