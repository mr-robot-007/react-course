import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, points, answer, numQuestions, maxPossiblePoints } = useQuiz();

  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numQuestions}
      ></progress>

      <p>
        Question <strong>{index + Number(answer !== null)}</strong> /{" "}
        {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
