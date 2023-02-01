import { useState } from "react";

const useQuestion1 = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);

  const submitValues = () => {
    console.log("Question 1 values: ", value1, value2, value3, value4, value5);
  };

  return {
    value1,
    setValue1,
    value2,
    setValue2,
    value3,
    setValue3,
    value4,
    setValue4,
    value5,
    setValue5,
    submitValues,
  };
};

export default useQuestion1;
