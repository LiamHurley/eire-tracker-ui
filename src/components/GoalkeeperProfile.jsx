import React, { useState } from "react";
import { Paper, Typography, Card, CardContent } from "@mui/material";
import "../styles/player-profile.css";
import { GK_PROFILE_STATS } from "../utils/constants";
import PlayerProfileP90ToggleDisplay from "./PlayerProfileP90ToggleDisplay";
import P90Toggle from "./P90Toggle";

const GoalkeeperProfile = ({ player }) => {
    const [selectedStatsType, setSelectedStatsType] = useState("Overall");
    
    const handleStatsTypeChange = (event, newStatsType) => {
        if (newStatsType !== null) {
            setSelectedStatsType(newStatsType);
        }
    };

    return (
        <Paper className="player-profile">
            <Typography variant="subtitle1" gutterBottom>Stats Type</Typography>
             <P90Toggle
                selectedStatsType={selectedStatsType}
                handleStatsTypeChange={handleStatsTypeChange}
            />
            <div className="stats-container">
                <Card className="stats-card">
                    <CardContent>
                        <Typography variant="h5" className="section-title">Goalkeeping</Typography>
                        {GK_PROFILE_STATS.map((stat) => (
                            <PlayerProfileP90ToggleDisplay
                                key={stat.key}
                                stat={stat}
                                selectedStatsType={selectedStatsType}
                                player={player}
                            />
                        ))}
                    </CardContent>
                </Card>
            </div>
        </Paper>
    );
};

export default GoalkeeperProfile;