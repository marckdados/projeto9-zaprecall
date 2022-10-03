import { useState } from "react";
import questionUpdate from "./questionUpdate";
import styled from "styled-components";
const listAnswered = [];
export default function Footer({
  currentOpen,
  arrayQuestions,
  setArrayQuestions,
}) {
  const [counter, setCounter] = useState(0);

  function sendAnswer(currentOpen, answerValue) {
    if (currentOpen === null) return;
    if (arrayQuestions[currentOpen].status === "showAnswer") {
      questionUpdate(
        arrayQuestions,
        setArrayQuestions,
        "answerd",
        answerValue,
        currentOpen
      );
      listAnswered.push(currentOpen);
      setCounter(counter + 1);
      console.log(currentOpen, listAnswered, answerValue);
    }
  }

  return (
    <Box>
      <div>
        <Button
          cor="#FF3030"
          onClick={() => sendAnswer(currentOpen, "notRemembered")}
        >
          Não lembrei
        </Button>
        <Button
          cor="#FF922E"
          onClick={() => sendAnswer(currentOpen, "almostRemembered")}
        >
          Quase não lembrei
        </Button>
        <Button cor="#2FBE34" onClick={() => sendAnswer(currentOpen, "zap")}>
          Zap !
        </Button>
      </div>
      <span>
        {counter}/{arrayQuestions.length} Concluidos
      </span>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

const Button = styled.button`
  width: 100px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) => props.cor};
  border-radius: 5px;
  border: none;
  padding: 5px;
`;
