import React, { useState } from "react";
import { Paper, Typography, Card, CardContent, FormControl, Select, MenuItem, TablePagination } from "@mui/material";
import "../styles/player-profile.css";
import { GK_PROFILE_STATS } from "../utils/constants";
import PlayerProfileP90ToggleDisplay from "./PlayerProfileP90ToggleDisplay";
import P90Toggle from "./P90Toggle";
import { getCurrentYear } from "../utils/dateUtils";
import GoalkeeperPerformances from "./GoalkeeperPerformances";

const GoalkeeperProfile = ({ player }) => {
    const [selectedStatsType, setSelectedStatsType] = useState("Overall");
    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleStatsTypeChange = (event, newStatsType) => {
        if (newStatsType !== null) {
            setSelectedStatsType(newStatsType);
        }
    };

    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        const previousScrollPosition = window.scrollY;

        if (event.target.value === 'All') {
            setRowsPerPage(season.performances.length);
        } 
        else {   
            setRowsPerPage(parseInt(event.target.value, 10));
        }
        setPage(0);

        setTimeout(() => {
            window.scrollTo({ top: previousScrollPosition, behavior: "auto" });
        }, 0);
    };

    const [selectedSeason, setSelectedSeason] = useState(getCurrentYear);
        
    let season = player.seasons.find(s => s.year === selectedSeason);
    const handleSeasonChange = (event, newSeason) => {
        if (newSeason !== null){
            setSelectedSeason(event.target.value);
            season = player.seasons.find(s => s.year === event.target.value);
        }
    };
    const seasonYears = player.seasons.map(s => s.year);

    return (
        <Paper className="player-profile">
            <Typography variant="subtitle1" gutterBottom>Stats Type</Typography>
             <P90Toggle
                selectedStatsType={selectedStatsType}
                handleStatsTypeChange={handleStatsTypeChange}
            />
            <FormControl size="medium" sx={{ minWidth: 100, height: "48px" }}>
                <Select value={selectedSeason} onChange={handleSeasonChange}>
                    {seasonYears.map(year => (
                        <MenuItem key={year} value={year}>{year}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div className="stats-container">
                <Card className="stats-card">
                    <CardContent>
                        <Typography variant="h5" className="section-title">Goalkeeping</Typography>
                        {GK_PROFILE_STATS.map((stat) => (
                            <PlayerProfileP90ToggleDisplay
                                stat={stat}
                                selectedStatsType={selectedStatsType}
                                stats={season.overallStatsDto}
                            />
                        ))}
                    </CardContent>
                </Card>
            </div>

            <div className="performance-history">
                <Typography variant="h5">Matches</Typography>
                <GoalkeeperPerformances
                    performances={season.performances}
                    rowsPerPage={rowsPerPage}
                    page={page} 
                />
                <TablePagination
                    rowsPerPageOptions={[5, 10, "All"]}
                    component="div"
                    count={season.performances.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </Paper>
    );
};

export default GoalkeeperProfile;