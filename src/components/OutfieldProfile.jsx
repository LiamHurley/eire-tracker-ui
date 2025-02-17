import React, { useState } from "react";
import { Paper, Typography, Card, CardContent } from "@mui/material";
import "../styles/player-profile.css";
import { OUTFIELD_PROFILE_STATS } from "../utils/constants";
import P90Toggle from "./P90Toggle";
import { p90ableStats } from "../utils/constants";
import PlayerProfileP90ToggleDisplay from "./PlayerProfileP90ToggleDisplay";

const OutfieldProfile = ({ player }) => {
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
            {/* Stats Sections */}
            <div className="stats-container">
                {/* General Stats */}
                <Card className="stats-card">
                    <CardContent>
                        <Typography variant="h5" className="section-title">General</Typography>
                        {OUTFIELD_PROFILE_STATS.General.map((stat) => (
                            <Typography key={stat.key}>
                                <strong>{stat.label}:</strong> {player.overallStatsDto[stat.key]}
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
                                key={stat.key}
                                stat={stat}
                                selectedStatsType={selectedStatsType}
                                player={player}
                                p90ableStats={p90ableStats}
                            />
                        ))}
                    </CardContent>
                </Card>

                {/* Passing Stats */}
                <Card className="stats-card">
                    <CardContent>
                        <Typography variant="h5" className="section-title">Creativity</Typography>
                        {OUTFIELD_PROFILE_STATS.Creativity.map((stat) => (
                            <PlayerProfileP90ToggleDisplay
                                key={stat.key}
                                stat={stat}
                                selectedStatsType={selectedStatsType}
                                player={player}
                                p90ableStats={p90ableStats}
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
                                key={stat.key}
                                stat={stat}
                                selectedStatsType={selectedStatsType}
                                player={player}
                                p90ableStats={p90ableStats}
                            />
                        ))}
                    </CardContent>
                </Card>
            </div>
        </Paper>
    );
};

export default OutfieldProfile;