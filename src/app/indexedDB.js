export const createIndexedDb = () => {
  const request = indexedDB.open("dbBudget", 1);
  request.onerror = (e) => {
    console.error(`Database doesn't work, error: ${e.target.error}`);
  };
  request.onsuccess = (e) => {
    const db = request.result;
  };
  request.onupgradeneeded = (e) => {
    const db = e.target.result;
    db.createObjectStore("transactions", {
      keyPath: "id",
    });
  };
};
export const deleteFromDb = (id) => {
  const request = indexedDB.open("dbBudget", 1);
  request.onsuccess = (e) => {
    const db = request.result;
    db.transaction("transactions", "readwrite")
      .objectStore("transactions")
      .delete(id);
    console.log(`${id} was deleted`);
  };
  request.onerror = (e) => {
    console.error(`error ${e.target.result}`);
  };
};
export const getData = () => {
  return new Promise((resolve, reject) => {
    const open = indexedDB.open("dbBudget", 1);
    open.onsuccess = (e) => {
      const db = e.target.result
        .transaction("transactions", "readwrite")
        .objectStore("transactions")
        .getAll();
      db.onsuccess = () => {
        resolve(db.result);
      };
    };
    open.onerror = (e) => {
      reject(e.target.error);
    };
  });
};

export const getFromIndexedDb = () => {
  let dbTransactions = [];
  const request = indexedDB.open("dbBudget", 1);
  request.onerror = (e) => {
    console.log(e.target.error);
  };
  request.onsuccess = (e) => {
    const getData = e.target.result
      .transaction("transactions", "readwrite")
      .objectStore("transactions")
      .getAll();
    getData.onsuccess = (e) => {
      dbTransactions = getData.result;
      console.log(dbTransactions);
    };
  };
};
export const saveToIndexedDb = (transaction) => {
  const request = indexedDB.open("dbBudget", 1);
  request.onupgradeneeded = (e) => {
    const db = e.target.result;
    db.createObjectStore("transactions", {
      keyPath: "id",
    });
  };
  request.onerror = (e) => {
    console.error(`Transaction wasn't added, error: ${e.target.error}`);
  };
  request.onsuccess = () => {
    const db = request.result;
    db.transaction("transactions", "readwrite")
      .objectStore("transactions")
      .add(transaction);
  };
};
