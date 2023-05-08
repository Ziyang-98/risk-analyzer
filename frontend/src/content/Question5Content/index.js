import React from "react";
import QuestionComponent from "component/QuestionComponent";
import ChestImg from "assets/img/chest.PNG";
import ExplosionImg from "assets/img/explosion-resized.png";
import Button from "react-bootstrap/Button";
import FadingOutText from "component/FadingText";
import "./index.scss";

const question = {
  title:
    "There are 1000 boxes and 50 of these boxes contains a bomb. Each of the boxes contains a value of $1~$10 inside with varying probability, $10 being most rare and $1 being most common.",
  task:
    "You can choose to open as many boxes as you want. " +
    "Before opening a box, you can decide to stop if you want to and leave with the current accumulated amount, or continue opening boxes. " +
    "If the box opened contains a bomb, you won't be able to open anymore boxes and you will lose all accumulated amount.",
};

const Question5Content = ({ goBack, goNext, hook }) => {
  const {
    boxNumber,
    amount,
    isBombTriggered,
    onOpenBox,
    disableOpen,
    amountAdded,
    isDisplayMessage,
  } = hook;

  const displayText = isBombTriggered ? `-$${amountAdded}` : `+$${amountAdded}`;
  const displayTextType = isBombTriggered ? "error" : "success";

  return (
    <QuestionComponent goBack={goBack} goNext={goNext} isLastQuestion>
      <div className="h3 question-title">{question.title}</div>
      <div className="h3 question-title">{question.task}</div>
      <div className="box-game-container">
        <div className="lead typist">Opening Box {boxNumber}...</div>
        <div>
          <img src={isBombTriggered ? ExplosionImg : ChestImg} alt="box" />
        </div>
        <div className="floating-text-container">
          {isDisplayMessage && (
            <FadingOutText
              text={displayText}
              key={Date.now()}
              variant="h4"
              type={displayTextType}
            />
          )}
        </div>
        <div className="lead typist">Accumulated Amount: ${amount}</div>
        <Button
          className="h5"
          variant={
            isBombTriggered ? "danger" : disableOpen ? "secondary" : "info"
          }
          onClick={onOpenBox}
          disabled={disableOpen}
        >
          {isBombTriggered
            ? "Bombed!"
            : disableOpen
            ? "No more boxes"
            : "Open box"}
        </Button>
      </div>
    </QuestionComponent>
  );
};

export default Question5Content;
