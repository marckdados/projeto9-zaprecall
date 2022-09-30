import styled from "styled-components";
import logo from "./assets/img/logo.png";
import Footer from "./Footer";
import Questions from "./Questions";

const arrayQuestions = [
  {
    question: "O que é JSX ? ",
    answer: "Uma extensão de linguagem do JavaScript.",
    status: "closer",
    answerType: "notAnswered",
  },
  {
    question: "O React é __ ",
    answer: "uma biblioteca JavaScript para construção de interfaces",
    status: "closer",
    answerType: "notAnswered",
  },
  {
    question: "Componentes devem iniciar com __ ",
    answer: "letra maiúscula",
    status: "closer",
    answerType: "notAnswered",
  },
  {
    question: "Podemos colocar __ dentro do JSX",
    answer: "expressões",
    status: "closer",
    answerType: "notAnswered",
  },
  {
    question: "O ReactDOM nos ajuda __",
    answer: " interagindo com a DOM para colocar componentes React na mesma",
    status: "closer",
    answerType: "notAnswered",
  },
  {
    question: "Usamos o npm para __",
    answer: "gerenciar os pacotes necessários e suas dependências",
    status: "closer",
    answerType: "notAnswered",
  },
  {
    question: "Usamos props para __",
    answer: "passar diferentes informações para componentes ",
    status: "closer",
    answerType: "notAnswered",
  },
  {
    question: "Usamos estado (state) para __",
    answer:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    status: "closer",
    answerType: "notAnswered",
  },
];

export default function Body() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo" />
        <h1>ZapRecall</h1>
      </Logo>
      <Questions arrayQuestions={arrayQuestions} />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;
