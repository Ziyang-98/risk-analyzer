import React from "react";
import Container from "react-bootstrap/Container";

const content = {
  title: "Insert Survey Name",
  message: "Insert purpose",
};

const LandingContent = () => {
  return (
    <Container className="text-center">
      <h1 className="display-1">{content.title}</h1>
      <div className="lead typist">{content.message}</div>
      <div className="p-5"></div>
      <div
        className="btn btn-outline-light btn-lg "
        role="button"
        aria-label="Click to start survey"
      >
        Click to start
      </div>
    </Container>
  );
};

export default LandingContent;
