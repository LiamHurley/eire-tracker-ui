import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayersTable from "./components/OverallTable";
import PlayerProfile from "./components/PlayerProfile";

function App() {
  return (
    <Routes>
        <Route path="/" element={<PlayersTable />} />
        <Route path="/players/:id" element={<PlayerProfile />} />
    </Routes>
  );
}

export default App