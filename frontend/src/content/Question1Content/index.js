import React from "react";
import QuestionComponent from "component/QuestionComponent";

const Question1Content = ({ goBack, goNext }) => {
  return (
    <QuestionComponent goBack={goBack} goNext={goNext}>
      <h1>Question 1 Content</h1>
    </QuestionComponent>
  );
};

export default Question1Content;
