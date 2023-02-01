import { useState } from "react";

const useQuestion1 = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [thirdValue, setThirdValue] = useState(0);
  const [fourthValue, setFourthValue] = useState(0);
  const [fifthValue, setFifthValue] = useState(0);

  const submitValues = () => {
    console.log(
      "Question 1 values",
      firstValue,
      secondValue,
      thirdValue,
      fourthValue,
      fifthValue
    );
  };

  return {
    firstValue,
    setFirstValue,
    secondValue,
    setSecondValue,
    thirdValue,
    setThirdValue,
    fourthValue,
    setFourthValue,
    fifthValue,
    setFifthValue,
    submitValues,
  };
};

export default useQuestion1;
