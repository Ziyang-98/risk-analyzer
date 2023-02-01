import React from "react";
import QuestionComponent from "component/QuestionComponent";
import RangeSlider from "react-bootstrap-range-slider";

const question = {
  title1:
    "For each of the following investments, you have been given $1000 either for your own consumption purposes, or for investment.",
  title2: "How much of the $1000 will you invest in each asset?",

  body: [
    "1. Investment A: 100% chance of 5% return.",
    "2. Investment B: 80% chance of 50% return, 20% chance to be 0.",
    "3. Investment C: 60% chance of 100% return, 40% chance to be 0.",
    "4. Investment D: 40% chance of 500% return, 60% chance to be 0.",
    "5. Investment E: 10% chance of 2000% return, 90% chance to be 0.",
  ],
};

const MAX_PRICE = 1000;
const MIN_PRICE = 1;

const Question3Content = ({ goBack, goNext, hook }) => {
  const {
    firstValue,
    setFirstValue,
    secondValue,
    setSecondValue,
    thirdValue,
    setThirdValue,
    fourthValue,
    setFourthValue,
    fifthValue,
    setFifthValue,
  } = hook;

  const values = [
    { value: firstValue, setValue: setFirstValue },
    { value: secondValue, setValue: setSecondValue },
    { value: thirdValue, setValue: setThirdValue },

    { value: fourthValue, setValue: setFourthValue },
    { value: fifthValue, setValue: setFifthValue },
  ];

  return (
    <QuestionComponent goBack={goBack} goNext={goNext}>
      <div className="h2 question-title">{question.title1}</div>
      <div className="h2 question-title">{question.title2}</div>
      {question.body.map((qn, index) => (
        <div key={index}>
          <div className="lead typist question-body">{qn}</div>
          <RangeSlider
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={values[index].value}
            onChange={(e) => values[index].setValue(e.target.value)}
            variant="light"
            size="sm"
          />
        </div>
      ))}
    </QuestionComponent>
  );
};

export default Question3Content;
