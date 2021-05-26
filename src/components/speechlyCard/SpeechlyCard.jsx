import React from "react";
import {
  ErrorPanel,
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import "./SpeechlyCard.css";
import { useSpeechContext } from "@speechly/react-client";
import { CardHeader, Typography } from "@material-ui/core";

const SpeechlyCard = () => {
  const isIncome = Math.round(Math.random());
  const { segment } = useSpeechContext();

  return (
    <div className="speechlyCard">
      <div className="speechlyCard__cardHeader">
        <CardHeader title="Expense Tracker" subheader="Powered with Speechly" />
        <div className="speechlyCard__buttonMobile">
          <PushToTalkButton size="3rem" />
          <ErrorPanel />
        </div>
      </div>
      <div className="speechlyCard__voiceText">
        <p>{`"${
          segment && segment.words.map((word) => word.value).join(" ")
        }"`}</p>
      </div>
      <div className="speechlyCard__button">
        <div className="speechlyCard__trySaying">
          "Add {isIncome ? "Income " : "Expense "}
          for {isIncome ? "100$ " : "50$ "}
          in Category {isIncome ? "Salary " : "Bills "}
          for {isIncome ? "Monday " : "Today "}"
        </div>
        <div className="speechlyCard__buttonDesktop">
          <PushToTalkButton size="3rem" />
          <ErrorPanel />
        </div>
      </div>
    </div>
  );
};

export default SpeechlyCard;
