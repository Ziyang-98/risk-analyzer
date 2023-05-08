import { generateRandom, getRandomNumbers } from "common/utils";
import { useEffect, useState } from "react";
import axios from "axios";

// Bomb Game
const useQuestion5 = (noOfBoxes, noOfBombs, maxAmount) => {
  // O represents incentive
  // 1 represents bomb
  const BOMB_VALUE = 1;
  const [boxes, setBoxes] = useState([]);
  const [boxNumber, setBoxNumber] = useState(1);
  const [amount, setAmount] = useState(0);
  const [isBombTriggered, setIsBombTriggered] = useState(false);
  const [amountAdded, setAmountAdded] = useState(0);
  const [isDisplayMessage, setIsDisplayMessage] = useState(false);

  useEffect(() => {
    const initBoxes = new Array(noOfBoxes).fill(0);
    const randomIndices = getRandomNumbers(noOfBoxes, noOfBombs);
    randomIndices.forEach((i) => {
      initBoxes[i] = 1;
    });
    setBoxes(initBoxes);
  }, [noOfBoxes, noOfBombs]);

  const incrementBoxNumber = () => {
    setBoxNumber(boxNumber + 1);
  };

  const addToAmount = () => {
    const amountToAdd = generateRandom(1, maxAmount);
    setAmountAdded(amountToAdd);
    setAmount(amount + amountToAdd);
  };

  const handleDisplayMessage = () => {
    setIsDisplayMessage(true);
    setTimeout(() => setIsDisplayMessage(false), 800);
  };

  const onOpenBox = () => {
    const boxContent = boxes[boxNumber - 1];
    if (boxContent === BOMB_VALUE) {
      setIsBombTriggered(true);
      setAmountAdded(amount);
      setAmount(0);
      return;
    }
    addToAmount();
    incrementBoxNumber();
    handleDisplayMessage();
  };

  const submitValues = () => {
    const q5 = {
      totalOpenedBoxes: boxNumber - 1,
      totalValueReceived: amount,
      totalRounds: 1,
    }
    axios.post(process.env.REACT_APP_BACKEND_ROUTE + 'question5/add/', q5);
  };

  return {
    boxes,
    boxNumber,
    amount,
    isBombTriggered,
    onOpenBox,
    disableOpen: boxNumber === noOfBoxes || isBombTriggered,
    amountAdded,
    isDisplayMessage,
    submitValues,
  };
};

export default useQuestion5;
