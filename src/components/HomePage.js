import React from "react";
import CuttentBalance from "./CuttentBalance";
import CurrentDetailsBudget from "./CurrentDetailsBudget";
import ListOfTransactions from "./ListOfTransactions";

const HomePage = () => {
  return (
    <>
      <CuttentBalance />
      <CurrentDetailsBudget />
      <ListOfTransactions />
    </>
  );
};

export default HomePage;
