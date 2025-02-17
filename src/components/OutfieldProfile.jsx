import React, { useState } from "react";
import { Paper, Typography, Card, CardContent } from "@mui/material";
import "../styles/player-profile.css";
import { OUTFIELD_PROFILE_STATS } from "../utils/constants";
import P90Toggle from "./P90Toggle";
import { convertToP90 } from "../utils/statsUtils";
import { p90ableStats } from "../utils/constants";

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
                            <Typography key={stat.key}>
                            <strong>{stat.label}:</strong> {" "}
                            {selectedStatsType === "Overall"
                                ? player.overallStatsDto[stat.key]
                                : p90ableStats.includes(`overallStatsDto.${stat.key}`) && player.overallStatsDto.minutesPlayed > 0
                                ? convertToP90(player, stat.key)
                                : player.overallStatsDto[stat.key]
                            }
                        </Typography>
                        ))}
                    </CardContent>
                </Card>

                {/* Passing Stats */}
                <Card className="stats-card">
                    <CardContent>
                        <Typography variant="h5" className="section-title">Creativity</Typography>
                        {OUTFIELD_PROFILE_STATS.Creativity.map((stat) => (
                            <Typography key={stat.key}>
                                <strong>{stat.label}:</strong> {" "}
                                {selectedStatsType === "Overall"
                                    ? player.overallStatsDto[stat.key]
                                    : p90ableStats.includes(`overallStatsDto.${stat.key}`) && player.overallStatsDto.minutesPlayed > 0
                                    ? convertToP90(player, stat.key)
                                    : player.overallStatsDto[stat.key]
                                }
                            </Typography>
                        ))}
                    </CardContent>
                </Card>

                {/* Attacking Stats */}
                <Card className="stats-card">
                    <CardContent>
                        <Typography variant="h5" className="section-title">Attacking</Typography>
                        {OUTFIELD_PROFILE_STATS.Attacking.map((stat) => (
                            <Typography key={stat.key}>
                            <strong>{stat.label}:</strong> {" "}
                            {selectedStatsType === "Overall"
                                ? player.overallStatsDto[stat.key]
                                : p90ableStats.includes(`overallStatsDto.${stat.key}`) && player.overallStatsDto.minutesPlayed > 0
                                ? convertToP90(player, stat.key)
                                : player.overallStatsDto[stat.key]
                            }
                        </Typography>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </Paper>
    );
};

export default OutfieldProfile;