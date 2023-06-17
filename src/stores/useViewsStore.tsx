import { create } from "zustand";

interface ViewsStore {
  view: string;
  setView: (x: string) => void;
}

const useViewsStore = create<ViewsStore>((set) => ({
  view: "home",
  setView: (v) => set(() => ({ view: v })),
}));

export default useViewsStore;
