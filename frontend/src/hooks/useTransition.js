import { useState } from "react";

const useTransition = (goNext, goBack) => {
  const [open, setOpen] = useState(true);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const SWITCH_CONTENT_DURATION = 500;
  const TRANSITION_DURATION = 500;

  const onGoNext = () => {
    onClose();
    // Leaving time between transitions to change content
    setTimeout(goNext, SWITCH_CONTENT_DURATION);
    setTimeout(onOpen, TRANSITION_DURATION);
  };

  const onGoBack = () => {
    onClose();
    // Leaving time between transitions to change content
    setTimeout(goBack, SWITCH_CONTENT_DURATION);
    setTimeout(onOpen, TRANSITION_DURATION);
  };

  return { open, onGoNext, onGoBack };
};

export default useTransition;
