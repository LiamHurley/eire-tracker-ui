import React from "react";
import { Typography } from "@mui/material";
import { convertToP90 } from "../utils/statsUtils";
import { p90ableStats } from "../utils/constants";

const PlayerProfileP90ToggleDisplay = ({ stat, selectedStatsType, stats }) => {
    const statValue = selectedStatsType === "Overall"
        ? stats[stat.key]
        : p90ableStats.includes(`overallStatsDto.${stat.key}`) && stats.minutesPlayed > 0
        ? convertToP90(stats, stat.key)
        : stats[stat.key];

    return (
        <Typography key={stat.key}>
            <strong>{stat.label}:</strong> {statValue}
        </Typography>
    );
};

export default PlayerProfileP90ToggleDisplay;
