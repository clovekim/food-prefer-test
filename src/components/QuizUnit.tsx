import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { progressAtom, quizAnswerListAtom, quizListAtom } from "../recoil/quiz";

interface Props {
  order: number;
  quiz: any; //Quiz
}

export const QuizUnit: FC<Props> = function QuizUnit({ order, quiz }: Props) {
  const quizList = useRecoilValue(quizListAtom);
  const setProgress = useSetRecoilState(progressAtom);
  const [choiceNumber, setChoiceNumber] = useState<number | undefined>(
    undefined
  );

  const [quizAnswerList, setQuizAnswerList] =
    useRecoilState(quizAnswerListAtom);

  const navigate = useNavigate();

  const onNextClick = () => {
    const tempAnswerList = quizAnswerList.slice();
    const quizWithAnswer = {
      ...tempAnswerList[order - 1],
      choiceNumber: choiceNumber,
    };
    tempAnswerList.splice(order - 1, 1, quizWithAnswer);
    setQuizAnswerList(tempAnswerList);
    setProgress(order);
  };

  const onSubmit = async () => {
    const tempAnswerList = quizAnswerList.slice();
    const quizWithAnswer = {
      ...tempAnswerList[order - 1],
      choiceNumber: choiceNumber,
    };
    tempAnswerList.splice(order - 1, 1, quizWithAnswer);
    setQuizAnswerList(tempAnswerList);

    alert("성공");
    console.log(tempAnswerList);
    // api back한테 보내는 행위
  };

  const answerChoiceButton = (answerChoice: string, index: number) => {
    return (
      <label>
        <div className="flex items-center gap-4 border p-2 bg-blue-50 border-blue-700 text-blue-700">
          <div className="pl-1 flex items-center">
            <input
              type="radio"
              className="w-4 h-4"
              name={`quiz-${order}`}
              onChange={(e: any) => {
                if (e.target.checked) {
                  setChoiceNumber(index);
                }
              }}
            />
          </div>
          <p>{answerChoice}</p>
        </div>
      </label>
    );
  };

  return (
    <div className="px-4 py-8 space-y-8 sm:border">
      <p className="text-lg font-medium">
        <span className="text-base text-blue-700">{order}+</span>{" "}
        <span>{quiz.question}</span>
      </p>
      <div className="space-y-2 px-6">
        {quiz.answerChoiceList.map((answerChoice: string, index: number) => {
          return (
            <div key={index}>{answerChoiceButton(answerChoice, index)}</div>
          );
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
        {quizList.length > order ? (
          <button
            onClick={onNextClick}
            className="bg-blue-700 h-10 px-8 text-white rounded-md hover:bg-blue-500 transition-colors duration-150 ease-out"
          >
            다음
          </button>
        ) : (
          <button
            onClick={onSubmit}
            disabled={}
            className="bg-blue-700 h-10 px-8 text-white rounded-md hover:bg-blue-500 transition-colors duration-150 ease-out"
          >
            결과보기
          </button>
        )}
      </div>
    </div>
  );
};
