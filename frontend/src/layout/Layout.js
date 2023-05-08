import React from "react";
import Fade from "react-bootstrap/Fade";
import LandingContent from "content/LandingContent";
import Question1Content from "content/Question1Content";
import Question2Content from "content/Question2Content";
import Question3Content from "content/Question3Content";
import Question4Content from "content/Question4Content";
import Question5Content from "content/Question5Content";
import useStepper from "hooks/useStepper";
import useTransition from "hooks/useTransition";
import useQuestion1 from "hooks/useQuestion1";
import useQuestion2 from "hooks/useQuestion2";
import useQuestion3 from "hooks/useQuestion3";
import useQuestion4 from "hooks/useQuestion4";
import useQuestion5 from "hooks/useQuestion5";

import "./index.scss";

const ContentArea = (props) => {
  const bgStyle = props.style ?? {
    backgroundColor: "#e9ecef",
  };
  return (
    <div id={props.id} className={`py-3 ${props.className}`} style={bgStyle}>
      <div className="container py-5">{props.children}</div>
    </div>
  );
};

// Colors
// Set 1: "#1e3b7e, #0977b8, #28bc98, #1ba248"
// Set 2: "#2a4689, #009572, #6d3898, #3d329b, #618489"
const GRADIENT_COLORS = "#1e3b7e, #0977b8, #28bc98, #1ba248";
const NO_OF_BOMBS = 50;
const NO_OF_BOXES = 1000;
const MAX_AMOUNT = 10;

const Layout = () => {
  const { step, goNext, goBack } = useStepper();

  const { open, onGoNext, onGoBack } = useTransition(goNext, goBack);

  const question1Hook = useQuestion1();
  const question2Hook = useQuestion2();
  const question3Hook = useQuestion3();
  const question4Hook = useQuestion4();
  const question5Hook = useQuestion5(NO_OF_BOXES, NO_OF_BOMBS, MAX_AMOUNT);

  const { submitValues: submitValuesForQn1 } = question1Hook;
  const { submitValues: submitValuesForQn2 } = question2Hook;
  const { submitValues: submitValuesForQn3 } = question3Hook;
  const { submitValues: submitValuesForQn4 } = question4Hook;
  const { submitValues: submitValuesForQn5 } = question5Hook;

  const submitAllValues = async () => {
    submitValuesForQn1();
    submitValuesForQn2();
    submitValuesForQn3();
    submitValuesForQn4();
    submitValuesForQn5();
  };

  const contentPages = [
    { src: <LandingContent goNext={onGoNext} /> },
    {
      src: (
        <Question1Content
          goBack={onGoBack}
          goNext={onGoNext}
          hook={question1Hook}
        />
      ),
    },
    {
      src: (
        <Question2Content
          goBack={onGoBack}
          goNext={onGoNext}
          hook={question2Hook}
        />
      ),
    },
    {
      src: (
        <Question3Content
          goBack={onGoBack}
          goNext={onGoNext}
          hook={question3Hook}
        />
      ),
    },
    {
      src: (
        <Question4Content
          goBack={onGoBack}
          goNext={onGoNext}
          hook={question4Hook}
        />
      ),
    },
    {
      src: (
        <Question5Content
          goBack={onGoBack}
          goNext={onGoNext}
          hook={question5Hook}
          submitAllValues={submitAllValues}
        />
      ),
    },
    { src: <h1>Thank you for your input.</h1> },
  ];
  return (
    <ContentArea
      fluid
      id="home"
      style={{
        background: `linear-gradient(136deg,${GRADIENT_COLORS})`,
        backgroundSize: "700% 700%",
        overflow: "hidden",
      }}
      className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      {/* <div id="stars" /> */}
      <Fade id="fade" in={open}>
        {<div>{contentPages[step].src}</div>}
      </Fade>
    </ContentArea>
  );
};

export default Layout;
