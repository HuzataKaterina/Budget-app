import { create } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import { nanoid } from "nanoid";
import { saveToIndexedDb, deleteFromDb } from "./indexedDB";

const useStore = create(
  // persist(
  (set, get) => ({
    transactions: [],
    addTransaction: (transaction) => {
      const newTransaction = { ...transaction, id: nanoid() };
      saveToIndexedDb(newTransaction);
      set((state) => ({
        transactions: [...state.transactions, newTransaction],
      }));
    },
    setTransactions: (transactions) =>
      set(() => ({ transactions: transactions })),
    deleteTransaction: (id) => {
      deleteFromDb(id)
        set((state) => ({
        transactions: state.transactions.filter((transaction) => {
          return transaction.id !== id;
        }),
      }))
    },
    
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
  })
  // {
  //   name: "dbBudget",

  // }
);
// );
export default useStore;
