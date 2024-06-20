import { create } from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => ({
  transactions: [],
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [...state.transactions, {...transaction, id: nanoid()}],
    })),
  deleteTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((transaction) => {
        return transaction.id !== id;
      }),
    })),
}));
export default useStore;
