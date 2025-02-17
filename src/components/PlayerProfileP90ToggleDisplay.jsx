import React from "react";
import { Typography } from "@mui/material";
import { convertToP90 } from "../utils/statsUtils";

// The StatDisplay component to handle the logic for rendering the stats.
const PlayerProfileP90ToggleDisplay = ({ stat, selectedStatsType, player, p90ableStats }) => {
    const statValue = selectedStatsType === "Overall"
        ? player.overallStatsDto[stat.key]
        : p90ableStats.includes(`overallStatsDto.${stat.key}`) && player.overallStatsDto.minutesPlayed > 0
        ? convertToP90(player, stat.key)
        : player.overallStatsDto[stat.key];

    return (
        <Typography key={stat.key}>
            <strong>{stat.label}:</strong> {statValue}
        </Typography>
    );
};

export default PlayerProfileP90ToggleDisplay;
