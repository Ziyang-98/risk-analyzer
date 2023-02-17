// Get m random unique numbers from 0 to n-1
export function getRandomNumbers(n, m) {
  const randomNos = [];
  while (randomNos.length < m) {
    const num = Math.floor(Math.random() * n);
    if (randomNos.indexOf(num) === -1) randomNos.push(num);
  }
  return randomNos;
}
