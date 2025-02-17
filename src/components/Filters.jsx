import React from "react";
import {
    Select,
    MenuItem,
    FormControl,
    Typography,
    Card,
    CardContent,
    Grid,
    ToggleButton,
    ToggleButtonGroup
} from "@mui/material";
import "../styles/filters.css";

const Filters = ({
    selectedPositions,
    setSelectedPositions,
    selectedStatsType,
    setSelectedStatsType,
    selectedCategory,
    setSelectedCategory
}) => {
    const handlePositionChange = (event, newPositions) => {
        if (newPositions.length > 0) {
            setSelectedPositions(newPositions);
        }
    };

    const handleStatsTypeChange = (event, newStatsType) => {
        if (newStatsType !== null) {
            setSelectedStatsType(newStatsType);
        }
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <Card className="filters-container">
            <CardContent>
                <Typography variant="h6" gutterBottom className="filters-title">
                    Filter Players
                </Typography>

                <Grid container spacing={2} className="filters-grid">
                    {/* Position Filters - Replacing Checkboxes with Toggle Buttons */}
                    <Grid item xs={12} sm={4}>
                        <Card className="filter-card">
                            <Typography variant="subtitle1" gutterBottom>
                                Position
                            </Typography>
                            <ToggleButtonGroup
                                value={selectedPositions}
                                onChange={handlePositionChange}
                                aria-label="position-filter"
                                className="position-toggle-group"
                            >
                                {["GK", "DEF", "MID", "FWD"].map(position => (
                                    <ToggleButton
                                        key={position}
                                        value={position}
                                        className="position-toggle-btn"
                                    >
                                        {position}
                                    </ToggleButton>
                                ))}
                            </ToggleButtonGroup>
                        </Card>
                    </Grid>

                    {/* Stats Type Toggle Button */}
                    <Grid item xs={12} sm={4}>
                        <Card className="filter-card">
                            <Typography variant="subtitle1" gutterBottom>
                                Stats Type
                            </Typography>
                            <ToggleButtonGroup
                                value={selectedStatsType}
                                exclusive
                                onChange={handleStatsTypeChange}
                                aria-label="stats-type"
                            >
                                <ToggleButton value="Overall" className="stats-toggle-btn">
                                    Overall
                                </ToggleButton>
                                <ToggleButton value="p90" className="stats-toggle-btn">
                                    Per 90
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Card>
                    </Grid>

                    {/* Category Filters */}
                    <Grid item xs={12} sm={4}>
                        <Card className="filter-card">
                            <Typography variant="subtitle1" gutterBottom>
                                Category
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    value={selectedCategory}
                                    onChange={handleCategoryChange}
                                    className="category-select"
                                >
                                    {["Overall", "Goalkeeping", "Defending", "Passing", "Attacking"].map(stat => (
                                        <MenuItem key={stat} value={stat}>
                                            {stat}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Filters;