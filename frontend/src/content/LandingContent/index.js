import React from "react";
import Container from "react-bootstrap/Container";

// Alt title: Understanding Your Tolerance to Risk in Investment
const content = {
  title: "Are you risky with your money?",
  message1:
    "Hello! we are a group of students from NUS conducting a survey to gather insights on the risk tolerance of individuals.",

  message2: "The survey will take approximately 5-10 mins to complete.",
};

const LandingContent = ({ goNext }) => {
  console.log(goNext);
  return (
    <Container className="text-center">
      <h2 className="display-3">{content.title}</h2>
      <div className="lead typist">{content.message1}</div>
      <div className="lead typist">{content.message2}</div>
      <div className="p-3"></div>
      <div
        className="btn btn-outline-light btn-lg "
        role="button"
        aria-label="Click to start survey"
        onClick={() => {
          goNext();
        }}
      >
        Click to start
      </div>
    </Container>
  );
};

export default LandingContent;
