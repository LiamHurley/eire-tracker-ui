import React from "react";
import { Typography } from "@mui/material";
import { convertToP90 } from "../utils/statsUtils";
import { p90ableStats } from "../utils/constants";

const PlayerProfileP90ToggleDisplay = ({ stat, selectedStatsType, player }) => {
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
