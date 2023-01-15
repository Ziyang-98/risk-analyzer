import React from "react";
import LandingContent from "content/LandingContent";

const Jumbotron = (props) => {
  const bgStyle = props.style ?? {
    backgroundColor: "#e9ecef",
  };
  return (
    <div id={props.id} className={`py-3 ${props.className}`} style={bgStyle}>
      <div className="container py-5">{props.children}</div>
    </div>
  );
};

// Colors
// Set 1: "#1e3b7e, #0977b8, #28bc98, #1ba248"
// Set 2: "#2a4689, #009572, #6d3898, #3d329b, #618489"
const GRADIENT_COLORS = "#1e3b7e, #0977b8, #28bc98, #1ba248";
const Layout = () => {
  return (
    <Jumbotron
      fluid
      id="home"
      style={{
        background: `linear-gradient(136deg,${GRADIENT_COLORS})`,
        backgroundSize: "700% 700%",
        overflow: "hidden",
      }}
      className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      {/* <div id="stars" /> */}
      <LandingContent />
    </Jumbotron>
  );
};

export default Layout;
