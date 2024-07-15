import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import { create } from "zustand";

export const createDb = () => {
  const db = new Dexie("DbIndexesDb");
  db.version(1).stores({
    transactions: "id, group, category, categoryId, sum, comment, date",
  });
};


