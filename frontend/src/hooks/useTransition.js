import { useState } from "react";

const useTransition = () => {
  const [open, setOpen] = useState(true);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return { open, onOpen, onClose };
};

export default useTransition;
