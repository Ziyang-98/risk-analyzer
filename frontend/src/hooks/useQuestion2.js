import { useState } from "react";
import axios from "axios";

const useQuestion2 = () => {
  const [value, setValue] = useState(0);

  const submitValues = () => {
    const q2 = {
      value: value
    }
    axios.post(process.env.REACT_APP_BACKEND_ROUTE + 'question2/add/', q2)
      .then(res => console.log(res.data));
  };

  return {
    value,
    setValue,
    submitValues,
  };
};

export default useQuestion2;
