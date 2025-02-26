import React, { useState } from "react";
import { Paper, Typography, Card, CardContent, TablePagination, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import "../styles/player-profile.css";
import { OUTFIELD_PROFILE_STATS } from "../utils/constants";
import P90Toggle from "./P90Toggle";
import PlayerProfileP90ToggleDisplay from "./PlayerProfileP90ToggleDisplay";
import OutfieldPerformances from "./OutfieldPerformances";
import { getCurrentYear } from "../utils/dateUtils";

const OutfieldProfile = ({ player }) => {
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
            
            <div style={{ display: "flex", gap: "1rem" }}>
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
            </div>
            {/* Stats Sections */}
            <div className="stats-container">
                {/* General Stats */}
                <Card className="stats-card">
                    <CardContent>
                        <Typography variant="h5" className="section-title">General</Typography>
                        {OUTFIELD_PROFILE_STATS.General.map((stat) => (
                            <Typography key={stat.key}>
                                <strong>{stat.label}:</strong> {season.overallStatsDto[stat.key]}
                            </Typography>
                        ))}
                    </CardContent>
                </Card>

                {/* Defensive Stats */}
                <Card className="stats-card">
                    <CardContent>
                        <Typography variant="h5" className="section-title">Defensive</Typography>
                        {OUTFIELD_PROFILE_STATS.Defensive.map((stat) => (
                            <PlayerProfileP90ToggleDisplay
                                stat={stat}
                                selectedStatsType={selectedStatsType}
                                stats={season.overallStatsDto}
                            />
                        ))}
                    </CardContent>
                </Card>

                {/* Creativity Stats */}
                <Card className="stats-card">
                    <CardContent>
                        <Typography variant="h5" className="section-title">Creativity</Typography>
                            {OUTFIELD_PROFILE_STATS.Creativity.map((stat) => (
                                <PlayerProfileP90ToggleDisplay
                                    stat={stat}
                                    selectedStatsType={selectedStatsType}
                                    stats={season.overallStatsDto}
                                />
                            ))}
                    </CardContent>
                </Card>

                {/* Attacking Stats */}
                <Card className="stats-card">
                    <CardContent>
                        <Typography variant="h5" className="section-title">Attacking</Typography>
                            {OUTFIELD_PROFILE_STATS.Attacking.map((stat) => (
                                <PlayerProfileP90ToggleDisplay
                                    stat={stat}
                                    selectedStatsType={selectedStatsType}
                                    stats={season.overallStatsDto}
                                />
                            ))}
                    </CardContent>
                </Card>

                <div className="performance-history">
                    <Typography variant="h5">Matches</Typography>
                    <OutfieldPerformances 
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
            </div>
        </Paper>
    );
};

export default OutfieldProfile;