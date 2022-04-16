import { atom, AtomEffect } from "recoil";
import { recoilPersist } from "recoil-persist";

type RecoilPersist<T> = {
  persistAtom: AtomEffect<T>;
};

const { persistAtom } = recoilPersist({
  key: "recoil-persist-progress",
}) as RecoilPersist<number>;

export const progressAtom = atom<number>({
  key: "progressAtom",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

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

export type Quiz = {
  question: string;
  answerChoiceList: string[];
};

export const quizListAtom = atom<Quiz[]>({
  key: "quizlist",
  default: testQuizList, // null,
});
