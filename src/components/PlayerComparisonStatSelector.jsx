import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconButton, Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel, Typography, Drawer, Box } from "@mui/material";
import { Close } from "@mui/icons-material";
import "../styles/comparison-search.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PlayerComparisonStatSelector = ({ isOpen, onClose, setStats, selectedStats }) => {
    if (!isOpen) return null; 

    const categories = [
        {
            title: "Active Stats",
            options: selectedStats,
        },
        {
            title: "Appearances",
            options: ["Appearances", "Minutes"],
        },
        {
            title: "Defending",
            options: ["Clean Sheets", "Aerial Duels Won", "Aerial Duels Won %", "Duels Won", "Duels Won %", "Interceptions", "Tackles", "Blocks",
                "Fouls", "Error Lead To Shot"],
        },
        {
            title: "Passing",
            options: ["Assists", "Expected Assists", "Passes Attempted", "Passes Completed", "Pass Completion %", 
                "Big Chances Created", "Key Passes", "Long Balls", "Crosses Completed", "Possession Lost"],
        },
        {
            title: "Shooting",
            options: ["Goals", "Expected Goals", "Shots Taken", "Shots On Target", "Big Chances Missed"],
        },
        {
            title: "Goalkeeping",
            options: ["Saves", "Clean Sheets", "Goals Prevented", "Punches", "Saved Shots From Inside The Box", "Error Lead To Shot"],
        },
        {
            title: "Misc",
            options: ["Fouled", "Fouls", "Touches", "Captain"],
        },
    ];

    const [checked, setChecked] = useState(
        Object.fromEntries(selectedStats.map(stat => [stat, true]))
    );

    const handleChange = (event) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
        setStats(prevStats =>
            event.target.checked
                ? [...prevStats, event.target.name]
                : prevStats.filter(s => s !== event.target.name)
        );
    };
    
    return (
        <>
            <div className="overlay" onClick={onClose}></div>

            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? 0 : "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="stat-container"
            >
                <Drawer anchor="left" open={true} variant="persistent">
                    <div className="search-header">
                        <Box sx={{ width: 300, padding: 2, color: "white" }}>
                            <Typography variant="h6">Edit Stats</Typography>
                        </Box>
                        <IconButton onClick={onClose} color="inherit">
                            <Close />
                        </IconButton>
                    </div>
                    <div>
                        <Box sx={{ width: 300, padding: 2 }}>
                            {categories.map((category) => (
                                <Accordion key={category.title}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>{category.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {category.options.map((option) => (
                                            <Box key={option} display="block">
                                                <FormControlLabel
                                                    key={option}
                                                    control={
                                                        <Checkbox
                                                            checked={checked[option] || false}
                                                            onChange={handleChange}
                                                            name={option}
                                                        />
                                                    }
                                                    label={option}
                                                />
                                            </Box>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>
                    </div>
                </Drawer>
            </motion.div>
        </>
    );
};

export default PlayerComparisonStatSelector;