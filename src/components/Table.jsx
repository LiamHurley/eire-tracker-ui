import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, 
    Grid, Paper, Box, Typography } from "@mui/material";
import "../styles/table-components.css";
import { p90ableStats } from "../utils/constants";

const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

const convertToP90 = (player, statKey) => {
    const minutesPlayed = player?.overallStatsDto?.minutesPlayed || 0;
    const statValue = player?.overallStatsDto?.[statKey] || 0;
    if (minutesPlayed > 0) {
        const p90Value = (90 / minutesPlayed) * statValue;
        return p90Value % 1 !== 0 ? p90Value.toFixed(2) : p90Value;
    }
    return 0;
};

const TableComponent = ({ players, headers, order, orderBy, handleSortRequest, rowsPerPage, page, statsType }) => {

    return (
        <Box className="table-container">
            <Grid container spacing={3}>
                {/* Table */}
                <Grid item xs={12}>
                    <Paper className="table-wrapper">
                        <TableContainer style={{ maxHeight: "400px", overflowY: "auto" }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {headers.map((header) => (
                                            <TableCell key={header.key} className="table-header">
                                                <TableSortLabel
                                                    active={orderBy === header.key}
                                                    direction={orderBy === header.key ? order : "asc"}
                                                    onClick={() => handleSortRequest(header.key)}
                                                >
                                                    {header.label}
                                                </TableSortLabel>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {players.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((player) => (
                                        <TableRow key={player.playerId} className="table-row">
                                            {headers.map((header) => (
                                                <TableCell key={header.key} className="table-cell">
                                                    {p90ableStats.includes(header.key) && statsType === "p90"
                                                        ? convertToP90(player, header.key.split(".").pop())
                                                        : getNestedValue(player, header.key)}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TableComponent;
