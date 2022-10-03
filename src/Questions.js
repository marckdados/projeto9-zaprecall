import Question from "./Question";

export default function Questions({
  setCurrentOpen,
  currentOpen,
  arrayQuestions,
  setArrayQuestions,
}) {
  return (
    <>
      {arrayQuestions.map((card, index) => (
        <Question
          key={index}
          index={index}
          questionInfos={card}
          arrayQuestions={arrayQuestions}
          setArrayQuestions={setArrayQuestions}
          setCurrentOpen={setCurrentOpen}
          currentOpen={currentOpen}
        />
      ))}
    </>
  );
}
