import { useState } from "react";
import axios from "axios";

const useQuestion1 = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);

  const submitValues = () => {
    const q1 = {
      p1: value1,
      p2: value2,
      p3: value3,
      p4: value4,
      p5: value5
    }
    axios.post(process.env.REACT_APP_BACKEND_ROUTE + 'question1/add/', q1)
      .then(res => console.log(res.data));
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
