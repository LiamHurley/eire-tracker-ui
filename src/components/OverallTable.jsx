import React, { useState } from "react";
import { Paper, TablePagination } from "@mui/material";
import Filters from "./Filters";
import TableComponent from "./Table";
import usePlayers from "../hooks/usePlayers";
import { STAT_HEADERS } from "../utils/constants";
import "../styles/overall-table.css";

const PlayersTable = () => {
    const [selectedPositions, setSelectedPositions] = useState(["GK", "DEF", "MID", "FWD"]);
    const [selectedStatsType, setSelectedStatsType] = useState("Overall");  // Overall / p90 toggle state
    const [selectedCategory, setSelectedCategory] = useState("Overall");  // Category (Goalkeeping, Defending, etc.)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const { filteredPlayers, handleSortRequest } = usePlayers(selectedPositions, selectedStatsType);

    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper sx={{ width: "90%", margin: "0 auto", overflow: "hidden", padding: 2 }} className="overall">
            <Filters
                selectedPositions={selectedPositions}
                setSelectedPositions={setSelectedPositions}
                selectedStatsType={selectedStatsType}
                setSelectedStatsType={setSelectedStatsType}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <TableComponent
                players={filteredPlayers || []}
                headers={STAT_HEADERS[selectedCategory] || []}
                order="asc"
                orderBy="name"
                handleSortRequest={handleSortRequest}
                rowsPerPage={rowsPerPage}
                page={page}
                statsType={selectedStatsType}
            />

            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={filteredPlayers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default PlayersTable;
