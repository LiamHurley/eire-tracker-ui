import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, 
    Grid, Paper, Box, } from "@mui/material";
import "../styles/table-components.css";
import { p90ableStats } from "../utils/constants";
import { convertToP90, getNestedValue } from "../utils/statsUtils";
import { Link } from "react-router-dom";

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
                                                {header.key === "name" ? (
                                                    <Link to={`/players/${player.playerId}`} className="player-link">
                                                        {getNestedValue(player, header.key)}
                                                    </Link>
                                                ) : p90ableStats.includes(header.key) && statsType === "p90" ? (
                                                    convertToP90(player, header.key.split(".").pop())
                                                ) : (
                                                    getNestedValue(player, header.key)
                                                )}
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
