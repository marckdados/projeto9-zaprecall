import Question from "./Question";

export default function Questions({ arrayQuestions }) {
  return (
    <>
      {arrayQuestions.map((q, index) => (
        <Question key={index} index={index} questionInfos={q} />
      ))}
    </>
  );
}
