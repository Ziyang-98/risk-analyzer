import { generateRandom, getRandomNumbers } from "common/utils";
import { useEffect, useState } from "react";

// Bomb Game
const useQuestion5 = (noOfBoxes, noOfBombs, maxAmount) => {
  // O represents incentive
  // 1 represents bomb
  const BOMB_VALUE = 1;
  const [boxes, setBoxes] = useState([]);
  const [boxNumber, setBoxNumber] = useState(1);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const initBoxes = new Array(noOfBoxes).fill(0);
    const randomIndices = getRandomNumbers(noOfBoxes, noOfBombs);
    randomIndices.forEach((i) => {
      initBoxes[i] = 1;
    });
    setBoxes(initBoxes);
  }, [noOfBoxes, noOfBombs]);

  const isBombTriggered = () => {
    return boxes[boxNumber - 1] === BOMB_VALUE;
  };

  const hasNoMoreBoxes = () => {
    return boxNumber === noOfBombs;
  };

  const incrementBoxNumber = () => {
    setBoxNumber(boxNumber + 1);
  };

  const addToAmount = () => {
    const amountToAdd = generateRandom(1, maxAmount);
    setAmount(amount + amountToAdd);
  };

  const onOpenBox = () => {
    if (isBombTriggered) {
      // Handle when bomb is triggered
    }
    addToAmount();
    incrementBoxNumber();
  };

  const submitValues = () => {
    console.log("Question 5 results: ", boxes);
  };

  return {
    boxes,
    boxNumber,
    amount,
    isBombTriggered,
    onOpenBox,
    addToAmount,
    submitValues,
  };
};

export default useQuestion5;
