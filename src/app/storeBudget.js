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
      deleteFromDb(id);
      set((state) => ({
        transactions: state.transactions.filter((transaction) => {
          return transaction.id !== id;
        }),
      }));
    },
    monthTransactions: [],
    setMonthTransactions: (month, year) =>
      set((state) => ({
        monthTransactions: state.transactions.filter((transaction) => {
          return (
            transaction.date.slice(5, 7) === month &&
            transaction.date.slice(0, 4) === year
          );
        }),
      })),
    budgetMonth: {},
    setBudgetMonth: () =>
      set((state) => ({
        budgetMonth: state.monthTransactions.reduce(
          (acc, transaction) => {
            switch (transaction.group) {
              case "Expenses":
                return {
                  ...acc,
                  currentBudget: acc.currentBudget - transaction.sum,
                  expenses: acc.expenses + transaction.sum,
                };
              case "Incomes":
                return {
                  ...acc,
                  currentBudget: acc.currentBudget + transaction.sum,
                  incomes: acc.incomes + transaction.sum,
                };
              case "Savings":
                return {
                  ...acc,
                  currentBudget: acc.currentBudget - transaction.sum,
                  savings: acc.savings + transaction.sum,
                };
            }
            return acc;
          },
          {
            currentBudget: 0,
            incomes: 0,
            expenses: 0,
            savings: 0,
          }
        ),
      })),

    filteredTransactionsByGroup: [],
    setFilteredTransactions: () => {
      set((state) => ({
        filteredTransactionsByGroup: state.monthTransactions.filter(
          (transaction) => {
            return transaction.group === state.selectedGroup;
          }
        ),
      }));
    },
    monthTransactionsByCategories: [],
    setCategoryMonth: () => {
      set((state) => ({
        monthTransactionsByCategories: state.filteredTransactionsByGroup.reduce(
          (acc, transaction) => {
            const obj = acc.find((item, i) => {
              if (item.id === transaction.categoryId) {
                acc[i] = { ...acc[i], sum: acc[i].sum + transaction.sum };
                return true;
              }
            });
            if (!obj) {
              acc = [
                ...acc,
                { id: transaction.categoryId, sum: transaction.sum },
              ];
            }
            return acc;
          },
          []
        ),
      }));
    },
    selectedGroup: "Expenses",
    setSelectedGroup: (group) =>
      set(() => ({
        selectedGroup: group,
      })),
    historyMonths: [],
    setHistoryMonths: (periods) =>
      set(() => ({
        historyMonths: periods
      })),

    monthCounter: 0,
    nextMonthCounter: () =>
      set((state) => ({
        monthCounter:
          state.monthCounter === state.historyMonths.length - 1
            ? 0
            : state.monthCounter + 1,
      })),
    prevMonthCounter: () => {
      set((state) => ({
        monthCounter:
          state.monthCounter === 0
            ? state.historyMonths.length - 1
            : state.monthCounter - 1,
      }));
    },
    historySelectedButton: "monthly",
    setHistorySelectedButton: (period) =>
      set(() => ({ historySelectedButton: period })),
    selectedMonth: {},
    setSelectedMonth: (month, year) =>
      set(() => ({ selectedMonth: { month: month, year: year } })),
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
