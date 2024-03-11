import { create } from "zustand";

const useBooleanStore = create((set: any) => ({
  toggleSitebarValue: false,
  toggleSitebarHandler: () =>
    set((state: any) => ({ toggleSitebarValue: !state.toggleSitebarValue })),
}));

export default useBooleanStore;
