import React from "react";
import ListOfTransactions from "../shared/ListOfTransactions";
import HistoryBudgetCard from "../widgets/HistoryBudgetCard";

const HistoryPage = () => {
  return (
    <>
      <HistoryBudgetCard />
      <ListOfTransactions />
    </>
  );
};

export default HistoryPage;
