import { atom, AtomEffect } from "recoil";
import { recoilPersist } from "recoil-persist";

type RecoilPersist<T> = {
  persistAtom: AtomEffect<T>;
};

const { persistAtom: persistProgressAtom } = recoilPersist({
  key: "recoil-persist-progress",
}) as RecoilPersist<number>;

const { persistAtom: persistQuizAnswerListAtom } = recoilPersist({
  key: "recoil-persist-quizAnswerList",
}) as RecoilPersist<Quiz[]>;

export const progressAtom = atom<number>({
  key: "progressAtom",
  default: 0,
  effects_UNSTABLE: [persistProgressAtom],
});

const testQuizList = [
  {
    question: "문제불라불라",
    answerChoiceList: ["피카츄", "또가스", "파이리"],
  },
  {
    question: "문제아수라",
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
  {
    question: "문제아수라",
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
  choiceNumber?: number;
};

export const quizListAtom = atom<Quiz[]>({
  key: "quizlist",
  default: testQuizList, // null,
});

export const quizAnswerListAtom = atom<Quiz[]>({
  key: "quizAnswerList",
  default: testQuizList,
  effects_UNSTABLE: [persistQuizAnswerListAtom],
});
