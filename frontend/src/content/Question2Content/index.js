import React from "react";
import QuestionComponent from "component/QuestionComponent";
import Button from "react-bootstrap/Button";

const question = {
  title: "Which one among these would you pick to invest in?",
  body: [
    "1. 100% chance of $30.",
    "2. 90% chance of $35, 10% chance of 0.",
    "3. 80% chance of $40, 20% chance of 0.",
    "4. 60% chance of $55, 40% chance of 0.",
    "5. 30% chance of $120, 70% chance of 0.",
    "6. 10% chance of $360, 90% chance of 0.",
  ],
};

const Question2Content = ({ goBack, goNext, hook }) => {
  const optionValues = [1, 2, 3, 4, 5, 6];
  const { value, setValue } = hook;
  return (
    <QuestionComponent goBack={goBack} goNext={goNext}>
      <div className="h2 question-title">{question.title}</div>
      <div className="d-grid gap-4 question-body">
        {question.body.map((qn, index) => (
          <Button
            key={index}
            variant={value === optionValues[index] ? "secondary" : "light"}
            className="question-options"
            size="lg"
            onClick={() => setValue(optionValues[index])}
          >
            <div className="typist">{qn}</div>
          </Button>
        ))}
      </div>
    </QuestionComponent>
  );
};

export default Question2Content;
