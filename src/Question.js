import { useState } from "react";
import styled from "styled-components";
import setaPlay from "./assets/img/seta_play.png";
import setaVirar from "./assets/img/seta_virar.png";
export default function Question({ questionInfos, index }) {
  const [cardStatus, setCardStatus] = useState(questionInfos.status);
  function openCard() {
    setCardStatus("open");
  }

  function showQuestion() {
    setCardStatus("answered");
  }

  return (
    <>
      {cardStatus === "closer" ? (
        <QuestionCloser>
          <p>Pergunta {index + 1}</p>
          <img src={setaPlay} alt="Play" onClick={openCard} />
        </QuestionCloser>
      ) : cardStatus === "open" ? (
        <QuestionOpen>
          <p>{questionInfos.question}</p>
          <img src={setaVirar} alt="Virar Card" onClick={showQuestion} />
        </QuestionOpen>
      ) : (
        <QuestionOpen>
          <p>{questionInfos.answer}</p>
        </QuestionOpen>
      )}
    </>
  );
}

const QuestionCloser = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

const QuestionOpen = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 20px;
    height: 20px;
  }
`;
