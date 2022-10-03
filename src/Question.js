import styled from "styled-components";
import setaPlay from "./assets/img/seta_play.png";
import setaVirar from "./assets/img/seta_virar.png";
import iconeCerto from "./assets/img/icone_certo.png";
import iconeQuase from "./assets/img/icone_quase.png";
import iconeErro from "./assets/img/icone_erro.png";
import questionUpdate from "./questionUpdate";
export default function Question({
  questionInfos,
  index,
  setCurrentOpen,
  arrayQuestions,
  setArrayQuestions,
  currentOpen,
}) {
  function openCard() {
    arrayQuestions.map((card, i) => {
      if (
        arrayQuestions[i].status === "open" ||
        arrayQuestions[i].status === "showAnswer"
      ) {
        questionUpdate(
          arrayQuestions,
          setArrayQuestions,
          "closer",
          "notAnswered",
          i
        );
      }
      return 0;
    });
    questionUpdate(
      arrayQuestions,
      setArrayQuestions,
      "open",
      "notAnswered",
      index
    );
  }

  function checkType(type) {
    if (type === "zap")
      return (
        <QuestionClosed
          botao={iconeCerto}
          index={index}
          cor="#69C036"
          linha="line-through"
        />
      );
    if (type === "almostRemembered")
      return (
        <QuestionClosed
          botao={iconeQuase}
          index={index}
          cor="#EE8F2B"
          linha="line-through"
        />
      );
    if (type === "notRemembered")
      return (
        <QuestionClosed
          botao={iconeErro}
          index={index}
          cor="#E74E29"
          linha="line-through"
        />
      );
  }

  return (
    <>
      {questionInfos.status === "closer" ? (
        <QuestionClosed
          index={index}
          openCard={openCard}
          botao={setaPlay}
          cor="#000000"
          linha="none"
        />
      ) : questionInfos.status === "open" ? (
        <QuestionOpened
          value={questionInfos.question}
          isShowButton={true}
          setCurrentOpen={setCurrentOpen}
          index={index}
          arrayQuestions={arrayQuestions}
          setArrayQuestions={setArrayQuestions}
        />
      ) : questionInfos.status === "showAnswer" ? (
        <QuestionOpened
          value={questionInfos.answer}
          isShowButton={false}
          setCurrentOpen={setCurrentOpen}
          index={index}
          arrayQuestions={arrayQuestions}
          setArrayQuestions={setArrayQuestions}
        />
      ) : (
        checkType(questionInfos.answerType)
      )}
    </>
  );
}

function QuestionOpened({
  value,
  isShowButton,
  setCurrentOpen,
  index,
  arrayQuestions,
  setArrayQuestions,
}) {
  function showAnswer() {
    setCurrentOpen(index);
    questionUpdate(
      arrayQuestions,
      setArrayQuestions,
      "showAnswer",
      "notAnswered",
      index
    );
  }

  return (
    <QuestionOpen>
      <p>{value}</p>
      {isShowButton ? (
        <img src={setaVirar} alt="Virar Card" onClick={showAnswer} />
      ) : (
        ""
      )}
    </QuestionOpen>
  );
}

function QuestionClosed({ index, openCard, botao, cor, linha }) {
  return (
    <QuestionCloser cor={cor} linha={linha} data-identifier="flashcard">
      <p>Pergunta {index + 1}</p>
      <img src={botao} alt="Botão" onClick={openCard} />
    </QuestionCloser>
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
    color: ${(props) => props.cor};
    text-decoration: ${(props) => props.linha};
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
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`;
