import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./index.scss";

const QuestionComponent = (props) => {
  const { children, goBack, goNext, isLastQuestion = false, onSubmit } = props;
  return (
    <Container className="container">
      {children}
      <Button
        className="question-container-back-button"
        variant="outline-light"
        onClick={goBack}
      >
        Back
      </Button>
      <Button
        className="question-container-next-button"
        variant="outline-light"
        onClick={isLastQuestion ? onSubmit : goNext}
      >
        {isLastQuestion ? "Submit" : "Next"}
      </Button>
    </Container>
  );
};

export default QuestionComponent;
