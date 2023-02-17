import { getRandomNumbers } from "common/utils";
import { useEffect, useState } from "react";

// Bomb Game
const useQuestion5 = (noOfBoxes, noOfBombs) => {
  // O represents incentive
  // 1 represents bomb
  const [boxes, setBoxes] = useState([]);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const initBoxes = new Array(noOfBoxes).fill(0);
    const randomIndices = getRandomNumbers(noOfBoxes, noOfBombs);
    randomIndices.forEach((i) => {
      initBoxes[i] = 0;
    });
    console.log(initBoxes);
    setBoxes(initBoxes);
  }, []);

  const submitValues = () => {
    console.log("Question 5 results: ", results);
  };

  return {
    boxes,
    submitValues,
  };
};

export default useQuestion5;
