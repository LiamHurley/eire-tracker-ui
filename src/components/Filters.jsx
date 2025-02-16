import React from "react";
import { FormGroup, FormControlLabel, Checkbox, Select, MenuItem, Radio, RadioGroup, FormControl } from "@mui/material";

const Filters = ({
    selectedPositions,
    setSelectedPositions,
    selectedStatsType,
    setSelectedStatsType,
    selectedCategory,
    setSelectedCategory
}) => {
    const handlePositionChange = (event) => {
        const { value, checked } = event.target;
        setSelectedPositions(checked
            ? [...selectedPositions, value]
            : selectedPositions.filter(pos => pos !== value)
        );
    };

    const handleStatsTypeChange = (event) => {
        setSelectedStatsType(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <>
            {/* Position Filters */}
            <FormGroup row>
                {["GK", "DEF", "MID", "FWD"].map(position => (
                    <FormControlLabel
                        key={position}
                        control={
                            <Checkbox
                                checked={selectedPositions.includes(position)}
                                onChange={handlePositionChange}
                                value={position}
                            />
                        }
                        label={position}
                    />
                ))}
            </FormGroup>

            {/* Stats Type Toggle (Overall / p90) */}
            <FormControl component="fieldset">
                <RadioGroup
                    row
                    value={selectedStatsType}
                    onChange={handleStatsTypeChange}
                    aria-label="stats-type"
                >
                    <FormControlLabel value="Overall" control={<Radio />} label="Overall" />
                    <FormControlLabel value="p90" control={<Radio />} label="p90" />
                </RadioGroup>
            </FormControl>

            {/* Category Filters (Goalkeeping, Defending, etc.) */}
            <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                sx={{ marginBottom: 2 }}
            >
                {["Overall", "Goalkeeping", "Defending", "Passing", "Attacking"].map(stat => (
                    <MenuItem key={stat} value={stat}>
                        {stat}
                    </MenuItem>
                ))}
            </Select>
        </>
    );
};

export default Filters;