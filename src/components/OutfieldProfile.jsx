import React from "react";
import { Paper, Grid, Typography, Divider } from "@mui/material";
import "../styles/player-profile.css";
import { OUTFIELD_PROFILE_STATS } from "../utils/constants";

const OutfieldProfile = ({ player }) => {
    return (
        <Paper className="player-profile">
            {/* Stats Sections */}
            <Grid container spacing={2}>
                {/* General Stats */}
                <Grid item xs={12} sm={6}>
                    <Paper className="stats-section">
                        <Typography variant="h5" className="section-title">General</Typography>
                        {OUTFIELD_PROFILE_STATS.General.map((stat) => (
                            <Typography key={stat.key}>
                                <strong>{stat.label}:</strong> {player.overallStatsDto[stat.key]}
                          </Typography>
                        ))}
                    </Paper>
                </Grid>

                {/* Defensive Stats */}
                <Grid item xs={12} sm={6}>
                    <Paper className="stats-section">
                        <Typography variant="h5" className="section-title">Defensive</Typography>
                        {OUTFIELD_PROFILE_STATS.Defensive.map((stat) => (
                            <Typography key={stat.key}>
                                <strong>{stat.label}:</strong> {player.overallStatsDto[stat.key]}
                          </Typography>
                        ))}
                    </Paper>
                </Grid>

                {/* Passing Stats */}
                <Grid item xs={12} sm={6}>
                    <Paper className="stats-section">
                        <Typography variant="h5" className="section-title">Creativity</Typography>
                        {OUTFIELD_PROFILE_STATS.Creativity.map((stat) => (
                            <Typography key={stat.key}>
                                <strong>{stat.label}:</strong> {player.overallStatsDto[stat.key]}
                          </Typography>
                        ))}
                    </Paper>
                </Grid>

                {/* Attacking Stats */}
                <Grid item xs={12} sm={6}>
                    <Paper className="stats-section">
                        <Typography variant="h5" className="section-title">Attacking</Typography>
                        {OUTFIELD_PROFILE_STATS.Attacking.map((stat) => (
                            <Typography key={stat.key}>
                                <strong>{stat.label}:</strong> {player.overallStatsDto[stat.key]}
                          </Typography>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default OutfieldProfile;