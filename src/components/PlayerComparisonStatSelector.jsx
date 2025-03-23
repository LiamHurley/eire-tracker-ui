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
            options: ["Appearances", "Minutes", "Starts", "Subbed On", "Subbed Off"],
        },
        {
            title: "Defending",
            options: ["Clean Sheets"],
        },
        {
            title: "Passing",
            options: ["Passes Attempted", "Passes Completed", "Pass Completion %", "Big Chances Created", "Long Balls"],
        },
        {
            title: "Shooting",
            options: ["Goals", "Shots Taken", "Shots On Target"],
        },
        {
            title: "Goalkeeping",
            options: ["Saves", "Clean Sheets"],
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