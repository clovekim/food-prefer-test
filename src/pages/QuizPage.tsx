import { FC } from "react";
import { useRecoilValue } from "recoil";
import { QuizUnit } from "../components/QuizUnit";
import { progressAtom, quizListAtom } from "../recoil/quiz";

const QuizPage: FC = function QuizPage() {
  const quizList = useRecoilValue(quizListAtom);
  const progress = useRecoilValue(progressAtom);

  return (
    <div className="bg-gray-50">
      <div className="max-w-xl mx-auto space-y-4 bg-white sm:bg-gray-50">
        <div className="flex sm:items-center h-screen">
          <div className="w-full mt-12 sm:mt-0 sm:bg-white">
            <QuizUnit order={progress + 1} quiz={quizList[progress]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
