import React from "react";
import QuestionComponent from "component/QuestionComponent";
import RangeSlider from "react-bootstrap-range-slider";

const question = {
  title1:
    "Given the following lottery ticket, what is the minimum price you would sell it for? (Min $1, Max $200)",
  notes: "Avoid using a calculator, try to give an amount based on your gut.",
  body: [
    "1. A ticket with a 50% chance of winning $100, 50% chance of winning $0.",
    "2. A ticket with a 20% chance of winning $70, 30% chance of winning $50, 50% chance of winning $20.",
    "3. A ticket with a 15% chance of winning $130, 33% chance of winning $60, 52% chance of winning $20.",
    "4. A ticket with a 10% chance of winning $160, 23% chance of winning $60, 67% chance of winning $30.",
    "5. A ticket with a 5% chance of winning $200, 42% chance of winning $50, 53% chance of winning $36.",
  ],
};

const MAX_PRICE = 200;
const MIN_PRICE = 1;

const Question1Content = ({ goBack, goNext, hook }) => {
  const {
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
  } = hook;

  const values = [
    { value: value1, setValue: setValue1 },
    { value: value2, setValue: setValue2 },
    { value: value3, setValue: setValue3 },
    { value: value4, setValue: setValue4 },
    { value: value5, setValue: setValue5 },
  ];

  return (
    <QuestionComponent goBack={goBack} goNext={goNext}>
      <div className="h2 question-title">{question.title}</div>
      <div className="lead question-notes">{question.notes}</div>
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

export default Question1Content;
