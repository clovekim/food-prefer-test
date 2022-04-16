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
