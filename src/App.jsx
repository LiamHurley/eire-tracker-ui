import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayersTable from "./components/OverallTable";
import PlayerProfile from "./components/PlayerProfile";
import Header from "./components/Header";
import PlayerComparison from "./components/PlayerComparison";

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<PlayersTable />} />
          <Route path="/players/:id" element={<PlayerProfile />} />
          <Route path="/compare" element={<PlayerComparison />} />
      </Routes>
    </>
  );
}

export default App