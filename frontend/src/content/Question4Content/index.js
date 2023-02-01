import React from "react";
import QuestionComponent from "component/QuestionComponent";
import RangeSlider from "react-bootstrap-range-slider";

const question = {
  title1:
    "For this question, please read the following information before inputting your answer:",
  title2:
    "10% standard deviation means that your asset which you purchase at $100, will most likely fall into the range of 90~110 in the next period.",
  title3:
    "With 18.6% SD, the market index (S&P500) had an average annual return of 9.1% in the last 5 years.",
  body: [
    "1. With 10% amount of standard deviation, what % expected return would be desirable to you?",
    "2. With 20% amount of standard deviation, what % expected return would be desirable to you?",
    "3. With 30% amount of standard deviation, what % expected return would be desirable to you?",
  ],
};

const MAX_PERCENTAGE = 100;
const MIN_PERCENTAGE = 1;

const Question4Content = ({ goBack, goNext, hook }) => {
  const { value1, setValue1, value2, setValue2, value3, setValue3 } = hook;

  const values = [
    { value: value1, setValue: setValue1 },
    { value: value2, setValue: setValue2 },
    { value: value3, setValue: setValue3 },
  ];

  return (
    <QuestionComponent goBack={goBack} goNext={goNext}>
      <div className="lead typist question-title">{question.title1}</div>
      <div className="h4 question-title">{question.title2}</div>
      <div className="h4 question-title">{question.title3}</div>
      {question.body.map((qn, index) => (
        <div key={index}>
          <div className="lead typist question-body">{qn}</div>
          <RangeSlider
            min={MIN_PERCENTAGE}
            max={MAX_PERCENTAGE}
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

export default Question4Content;
