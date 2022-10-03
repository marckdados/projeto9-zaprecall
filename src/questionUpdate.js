function questionUpdate(
  arrayQuestions,
  setArrayQuestions,
  statusValue,
  answerValue,
  currentOpen
) {
  const questionUpdate = [...arrayQuestions];
  console.log(statusValue);
  questionUpdate[currentOpen].status = statusValue;

  questionUpdate[currentOpen].answerType = answerValue;
  setArrayQuestions(questionUpdate);
}

export default questionUpdate;
