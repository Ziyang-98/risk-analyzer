import { getRandomNumbers } from "common/utils";
import { useEffect, useState } from "react";

// Bomb Game
const useQuestion5 = (noOfBoxes, noOfBombs) => {
  // O represents incentive
  // 1 represents bomb
  const BOMB_VALUE = 1;
  const [boxes, setBoxes] = useState([]);
  const [boxNumber, setBoxNumber] = useState(1);

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

  const isLastBox = () => {
    return boxNumber === noOfBombs;
  };

  const incrementBoxNumber = () => {
    setBoxNumber(boxNumber + 1);
  };

  const submitValues = () => {
    console.log("Question 5 results: ", boxes);
  };

  return {
    boxes,
    submitValues,
    isBombTriggered,
    isLastBox,
    incrementBoxNumber,
  };
};

export default useQuestion5;
