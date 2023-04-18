import React from "react";
import QuestionComponent from "component/QuestionComponent";
import ChestImg from "assets/img/chest.PNG";
import Button from "react-bootstrap/Button";
import "./index.scss";

const question = {
  title:
    "There are 1000 boxes and 50 of these boxes contains a bombs. Each of the remaining box contains a value of $1~$10 inside with varying probability, $10 being most rare $1 being most common.",
  task:
    "You can choose to open as many boxes as you want. " +
    "Before opening a box, you can decide to stop if you want to and leave with the current accumulated amount, or continue opening boxes. " +
    "If the box opened contains a bomb, you won't be able to open anymore boxes and you will lose all accumulated amount.",
};

const Question5Content = ({ goBack, goNext, hook }) => {
  const { boxes, boxNumber, amount, isBombTriggered, onOpenBox, addToAmount } =
    hook;
  return (
    <QuestionComponent goBack={goBack} goNext={goNext}>
      <div className="lead typist question-title">{question.title}</div>
      <div className="lead typist question-title">{question.task}</div>
      <div className="box-game-container">
        <div className="lead typist">Box No. {boxNumber}</div>
        <div>
          <img src={ChestImg} alt="box" />
        </div>
        <div className="lead typist">Accumulated amount: ${amount}</div>
        <Button className="h5" variant="info" onClick={onOpenBox}>
          Open box
        </Button>
      </div>
    </QuestionComponent>
  );
};

export default Question5Content;
