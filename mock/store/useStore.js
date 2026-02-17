import create from "zustand";

export const useStore = create((set) => ({
  user: null,
  balance: 0,
  transactions: [],
  selectedBank: "BancYouk",

  login: (name) => set({ user: name, balance: 25000, transactions: [] }),
  logout: () => set({ user: null, balance: 0, transactions: [] }),
  addTransaction: (tx) =>
    set((state) => ({
      transactions: [tx, ...state.transactions],
      balance: tx.type === "Payment" ? state.balance - tx.amount : state.balance + tx.amount,
    })),
  selectBank: (bank) => set({ selectedBank: bank }),
}));
