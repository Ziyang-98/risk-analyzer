import { useState } from "react";

const useQuestion2 = () => {
  const [value, setValue] = useState(0);

  const submitValues = () => {
    console.log("Question 2 option picked: ", value);
  };

  return {
    value,
    setValue,
    submitValues,
  };
};

export default useQuestion2;
