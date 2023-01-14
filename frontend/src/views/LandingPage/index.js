import React from "react";
import Container from "react-bootstrap/Container";

const Jumbotron = (props) => {
  const bgStyle = props.style ?? { backgroundColor: "#e9ecef" };
  return (
    <div id={props.id} className={`py-3 ${props.className}`} style={bgStyle}>
      <div className="container py-5">{props.children}</div>
    </div>
  );
};

const content = {
  gradientColors: "#2a4689, #009572, #6d3898, #3d329b, #618489",
  title: "Insert Survey Name",
  message: "Insert purpose",
};

const LandingPage = () => {
  return (
    <Jumbotron
      fluid
      id="home"
      style={{
        background: `linear-gradient(136deg,${content.gradientColors})`,
        backgroundSize: "1200% 1200%",
      }}
      className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <div id="stars"></div>
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
    </Jumbotron>
  );
};

export default LandingPage;
