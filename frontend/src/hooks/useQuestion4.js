import { useState } from "react";

const useQuestion4 = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  const submitValues = () => {
    console.log("Question 4 values: ", value1, value2, value3);
  };

  return {
    value1,
    setValue1,
    value2,
    setValue2,
    value3,
    setValue3,
    submitValues,
  };
};

export default useQuestion4;
