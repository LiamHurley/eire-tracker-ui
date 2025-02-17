import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const P90Toggle = ({ selectedStatsType, handleStatsTypeChange }) => {
    return (
        <ToggleButtonGroup
            value={selectedStatsType}
            exclusive
            onChange={handleStatsTypeChange}
            aria-label="stats-type"
            sx={{ marginBottom: 2 }}
        >
            <ToggleButton value="Overall" className="stats-toggle-btn">
                Overall
            </ToggleButton>
            <ToggleButton value="p90" className="stats-toggle-btn">
                p90
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default P90Toggle;
