import { FC } from "react";

interface Props {
  order: number;
  quiz: any; //Quiz
}

const answerChoiceButton = (answerChoice: string, index: number) => {
  return (
    <div className="flex items-center gap-4 border p-2 bg-blue-50 border-blue-700 text-blue-700">
      <div className="border border-blue-700 bg-white w-8 h-8 flex items-center justify-center">
        <p>{index}</p>
      </div>
      <p>{answerChoice}</p>
    </div>
  );
};

export const QuizUnit: FC<Props> = function QuizUnit({ order, quiz }: Props) {
  return (
    <div className="px-4 py-8 border space-y-8">
      <p className="text-lg font-medium">
        <span className="text-base text-blue-700">{order}+</span>{" "}
        <span>{quiz.question}</span>
      </p>
      <div className="space-y-2 px-6">
        {quiz.answerChoiceList.map((answerChoice: string, index: number) => {
          return answerChoiceButton(answerChoice, index);
        })}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {}}
          className="bg-blue-700 h-10 px-8 text-white rounded-md hover:bg-blue-500 transition-colors duration-150 ease-out"
        >
          다음
        </button>
      </div>
    </div>
  );
};
