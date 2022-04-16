import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { progressAtom, quizListAtom } from "../recoil/quiz";

interface Props {
  order: number;
  quiz: any; //Quiz
}

const answerChoiceButton = (answerChoice: string, index: number) => {
  return (
    <div
      className="flex items-center gap-4 border p-2 bg-blue-50 border-blue-700 text-blue-700"
      key={index}
    >
      <div className="border border-blue-700 bg-white w-8 h-8 flex items-center justify-center">
        <p>{index}</p>
      </div>
      <p>{answerChoice}</p>
    </div>
  );
};

export const QuizUnit: FC<Props> = function QuizUnit({ order, quiz }: Props) {
  const quizList = useRecoilValue(quizListAtom);
  const setProgress = useSetRecoilState(progressAtom);
  const navigate = useNavigate();

  return (
    <div className="px-4 py-8 space-y-8 sm:border">
      <p className="text-lg font-medium">
        <span className="text-base text-blue-700">{order}+</span>{" "}
        <span>{quiz.question}</span>
      </p>
      <div className="space-y-2 px-6">
        {quiz.answerChoiceList.map((answerChoice: string, index: number) => {
          return answerChoiceButton(answerChoice, index);
        })}
      </div>
      <div className="flex justify-end gap-4">
        {order >= 2 && (
          <button
            onClick={() => {
              if (order >= 2) {
                setProgress(order - 2);
              }
            }}
            className="bg-gray-600 h-10 px-8 text-white rounded-md hover:bg-gray-400 transition-colors duration-150 ease-out"
          >
            이전
          </button>
        )}
        <button
          onClick={() => {
            if (quizList.length > order) {
              setProgress(order);
            } else {
              navigate("/result");
            }
          }}
          className="bg-blue-700 h-10 px-8 text-white rounded-md hover:bg-blue-500 transition-colors duration-150 ease-out"
        >
          {order < quizList.length ? "다음" : "결과보기"}
        </button>
      </div>
    </div>
  );
};
