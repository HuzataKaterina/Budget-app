import React from "react";
import CurrentBudgetDetails from '../widgets/CurrentBudgetDetails';
import CurrentBudgetCard from "../widgets/CurrentBudgetCard";
import ListOfTransactions from "../shared/ListOfTransactions";

const HomePage = () => {
  return (
    <>
      <CurrentBudgetCard />
      <CurrentBudgetDetails />
      <ListOfTransactions />
    </>
  );
};

export default HomePage;
