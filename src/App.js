import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./app/Layout";
import HomePage from "../src/pages/HomePage";
import SettingsPage from "../src/pages/SettingsPage";
import HistoryPage from "../src/pages/HistoryPage";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.main`
  width: 810px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  // grid-template-rows: repeat(5, 1fr);
  padding: 0 1%;
`;

function App() {
  
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
