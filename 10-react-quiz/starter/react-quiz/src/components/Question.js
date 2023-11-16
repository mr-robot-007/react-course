import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  // console.log(question);
  const {questions,index} = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
        <Options question={question} />
    </div>
  );
}

export default Question;
