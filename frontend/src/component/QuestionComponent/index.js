import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./index.scss";

const QuestionComponent = (props) => {
  const { children, goBack, goNext, isLastQuestion = false, onSubmit } = props;
  return (
    <Container className="question-container">
      {children}
      <div className="button-holder">
        <Button
          className="question-container-back-button"
          variant="outline-light"
          size="lg"
          onClick={goBack}
        >
          Back
        </Button>
        <Button
          className="question-container-next-button"
          variant="outline-light"
          size="lg"
          onClick={isLastQuestion ? onSubmit : goNext}
        >
          {isLastQuestion ? "Submit" : "Next"}
        </Button>
      </div>
    </Container>
  );
};

export default QuestionComponent;
