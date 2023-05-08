import { useState } from "react";
import axios from "axios";

const useQuestion4 = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  const submitValues = () => {
    const q4 = {
      p1: value1,
      p2: value2,
      p3: value3,
    }
    axios.post(process.env.REACT_APP_BACKEND_ROUTE + 'question4/add/', q4)
      .then(res => console.log(res.data));
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
