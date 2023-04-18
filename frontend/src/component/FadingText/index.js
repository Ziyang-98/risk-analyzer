import { useState, useEffect } from "react";
import "./index.scss";

function FadingOutText({ text, variant = "", type = "" }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fading-out-text ${
        visible ? "" : "hidden"
      } ${variant} ${type}`}
    >
      {text}
    </div>
  );
}

export default FadingOutText;
