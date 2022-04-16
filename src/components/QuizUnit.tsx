import _ from "lodash";
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
  const [quizAnswerList, setQuizAnswerList] =
    useRecoilState(quizAnswerListAtom);
  const [choiceNumber, setChoiceNumber] = useState<number | undefined>(
    quizAnswerList[order - 1].choiceNumber
  );

  const navigate = useNavigate();

  const onNextClick = () => {
    const tempAnswerList = quizAnswerList.slice();
    const quizWithAnswer = {
      ...tempAnswerList[order - 1],
      choiceNumber: choiceNumber,
    };
    tempAnswerList.splice(order - 1, 1, quizWithAnswer);
    setQuizAnswerList(tempAnswerList);
    // 다음 거를 위해
    setChoiceNumber(quizAnswerList[order].choiceNumber);
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
    setChoiceNumber(undefined);
    // api back한테 보내는 행위
    console.log(tempAnswerList);
    alert("성공");
    setProgress(0);
    setQuizAnswerList(quizList);
    // navigate("/result");
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
              checked={index === choiceNumber}
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
                setChoiceNumber(quizAnswerList[order - 2].choiceNumber);
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
            disabled={_.isUndefined(choiceNumber)}
            className="bg-blue-700 h-10 px-8 text-white rounded-md hover:bg-blue-500 transition-colors duration-150 ease-out disabled:opacity-50"
          >
            다음
          </button>
        ) : (
          <button
            onClick={onSubmit}
            disabled={_.isUndefined(choiceNumber)}
            className="bg-blue-700 h-10 px-8 text-white rounded-md hover:bg-blue-500 transition-colors duration-150 ease-out disabled:opacity-50"
          >
            결과보기
          </button>
        )}
      </div>
    </div>
  );
};
