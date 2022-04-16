import { FC } from "react";
import { useRecoilValue } from "recoil";
import { QuizUnit } from "../components/QuizUnit";
import { progressAtom } from "../recoil/quiz";

const testQuizList = [
  {
    question: "문제불라불라",
    answerChoiceList: ["피카츄", "또가스", "파이리"],
  },
  {
    question: "문제불라불라",
    answerChoiceList: ["피카츄", "또가스", "파이리"],
  },
  {
    question: "문제불라불라",
    answerChoiceList: ["피카츄", "또가스", "파이리"],
  },
  {
    question: "문제불라불라",
    answerChoiceList: ["피카츄", "또가스", "파이리"],
  },
  {
    question: "문제불라불라",
    answerChoiceList: ["피카츄", "또가스", "파이리"],
  },
  {
    question: "문제불라불라",
    answerChoiceList: ["피카츄", "또가스", "파이리"],
  },
];

const QuizPage: FC = function QuizPage() {
  const progress = useRecoilValue(progressAtom);

  return (
    <div className="bg-gray-50">
      <div className="max-w-xl mx-auto space-y-4">
        <div className="flex items-center h-screen">
          <div className="bg-white shadow-md w-full">
            <QuizUnit order={progress + 1} quiz={testQuizList[progress]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
