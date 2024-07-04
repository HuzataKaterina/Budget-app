import { create } from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => ({
  transactions: [],
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [...state.transactions, { ...transaction, id: nanoid() }],
    })),
  deleteTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((transaction) => {
        return transaction.id !== id;
      }),
    })),
    expensesCategory: [
      {
        id: 1,
        name: "Food&Drinks",
      },
      {
        id: 2,
        name: "Transport",
      },
      {
        id: 3,
        name: "Entertainmant",
      },
      {
        id: 4,
        name: "Health",
      },
      {
        id: 5,
        name: "Shopping",
      },
    ],
    incomesCategory: [
      {
        id: 6,
        name: "Salary",
      },
      {
        id: 7,
        name: "Royalty",
      },
      {
        id: 8,
        name: "Rental",
      },
    ],
    savingsCategory: [
      {
        id: 9,
        name: "Short-term goals",
      },
      {
        id: 10,
        name: "Long-term goals",
      },
    ],

}));
export default useStore;
