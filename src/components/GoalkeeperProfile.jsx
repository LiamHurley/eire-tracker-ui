import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import "../styles/player-profile.css";

const GoalkeeperProfile = ({ player }) => {
    return (
        <Paper className="goalkeeper-stats">
            <Typography variant="h5" className="section-title">Stats</Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}><strong>Saves:</strong> {player.overallStatsDto.saves}</Grid>
                {/* <Grid item xs={6}><strong>Save %:</strong> {stats.savePercentage}%</Grid>
                <Grid item xs={6}><strong>Clean Sheets:</strong> {stats.cleanSheets}</Grid>
                <Grid item xs={6}><strong>Goals Conceded:</strong> {stats.goalsConceded}</Grid>
                <Grid item xs={6}><strong>Penalty Saves:</strong> {stats.penaltySaves}</Grid>
                <Grid item xs={6}><strong>Minutes Played:</strong> {stats.minutesPlayed}</Grid> */}
            </Grid>
        </Paper>
    );
};

export default GoalkeeperProfile;
