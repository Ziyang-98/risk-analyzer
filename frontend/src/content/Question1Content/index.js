import React from "react";
import QuestionComponent from "component/QuestionComponent";
import RangeSlider from "react-bootstrap-range-slider";

import "./index.scss";

const question = {
  title:
    "Given the following lottery ticket, what is the minimum price you would sell it for?",
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

const Question1Content = ({ goBack, goNext }) => {
  const [value, setValue] = React.useState(1);

  return (
    <QuestionComponent goBack={goBack} goNext={goNext}>
      <div className="h2 question-title">{question.title}</div>
      {question.body.map((qn) => (
        <>
          <div className="lead typist question-body">{qn}</div>
          <RangeSlider
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant="light"
          />
        </>
      ))}
    </QuestionComponent>
  );
};

export default Question1Content;
