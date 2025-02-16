import React from "react";
import { Paper, Grid, Typography, Divider } from "@mui/material";
import "../styles/player-profile.css";
import { calculateAge } from "../utils/dateUtils";

const OutfieldProfile = ({ player }) => {
    if (!player) return <Typography>No data available</Typography>;

    const playerAge = calculateAge(player.dateOfBirth);

    return (
        <Paper className="player-profile">
            {/* Basic Information */}
            <Typography variant="h4" className="profile-name">{player.name}</Typography>
            <Typography variant="h6" className="profile-basic-info">
                Age: {playerAge} | Position: {player.position} | Club: {player.club}
            </Typography>
            <Divider className="section-divider" />

            {/* Stats Sections */}
            <Grid container spacing={2}>
                {/* Defensive Stats */}
                <Grid item xs={12} sm={6}>
                    <Paper className="stats-section">
                        <Typography variant="h5" className="section-title">Defensive Stats</Typography>
                        <Typography><strong>Tackles:</strong> {player.overallStatsDto.totalTackle}</Typography>
                        <Typography><strong>Interceptions:</strong> {player.overallStatsDto.interceptionWon}</Typography>
                    </Paper>
                </Grid>

                {/* Passing Stats */}
                <Grid item xs={12} sm={6}>
                    <Paper className="stats-section">
                        <Typography variant="h5" className="section-title">Passing Stats</Typography>
                        <Typography><strong>Passes Completed:</strong> {player.overallStatsDto.totalPass}</Typography>
                        {/* <Typography><strong>Assists:</strong> {player.passingStats.assists}</Typography>
                        <Typography><strong>Key Passes:</strong> {player.passingStats.keyPasses}</Typography> */}
                    </Paper>
                </Grid>

                {/* Attacking Stats */}
                <Grid item xs={12} sm={6}>
                    <Paper className="stats-section">
                        <Typography variant="h5" className="section-title">Attacking Stats</Typography>
                        <Typography><strong>Goals:</strong> {player.overallStatsDto.goals}</Typography>
                        {/* <Typography><strong>Shots on Target:</strong> {player.attackingStats.shotsOnTarget}</Typography>
                        <Typography><strong>Dribbles:</strong> {player.attackingStats.dribbles}</Typography> */}
                    </Paper>
                </Grid>

                {/* General Stats */}
                <Grid item xs={12} sm={6}>
                    <Paper className="stats-section">
                        <Typography variant="h5" className="section-title">General Stats</Typography>
                        <Typography><strong>Minutes Played:</strong> {player.overallStatsDto.minutesPlayed}</Typography>
                        {/* <Typography><strong>Matches Played:</strong> {player.generalStats.matchesPlayed}</Typography>
                        <Typography><strong>Yellow Cards:</strong> {player.generalStats.yellowCards}</Typography> */}
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default OutfieldProfile;
