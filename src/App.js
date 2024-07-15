import "./App.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./app/Layout";
import  useStore  from "./app/storeBudget";
import { createIndexedDb, getFromIndexedDb, getData } from "./app/indexedDB";
import HomePage from "../src/pages/HomePage";
import SettingsPage from "../src/pages/SettingsPage";
import HistoryPage from "../src/pages/HistoryPage";
import styled from "styled-components";

const Container = styled.main`
  width: 810px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  // grid-template-rows: repeat(5, 1fr);
  padding: 0 1%;
`;

function App() {
  const { setTransactions, transactions } = useStore();

  createIndexedDb();

  useEffect(() => {
    getData().then((result) => {
      setTransactions(result)
      console.log(result)
    }).catch((err) => {
      console.error(err)
    });
   
  }, []);

  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
