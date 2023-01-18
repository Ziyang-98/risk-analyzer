import { useState } from "react";

const useStepper = () => {
  const [step, setStep] = useState(0);

  const goBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const goNext = () => {
    setStep(step + 1);
  };

  return { step, goNext, goBack };
};

export default useStepper;
