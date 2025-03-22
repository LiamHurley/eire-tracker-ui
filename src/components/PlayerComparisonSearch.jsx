import { useState } from "react";
import { motion } from "framer-motion";
import { TextField, Button, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { fetchPlayerById, searchPlayersByName } from "../api/playersApi";
import "../styles/comparison-search.css";

export default function PlayerComparisonSearch({isOpen, onClose}) {
    const PLACEHOLDERS = [{name:"Evan Ferguson"},{name:"Finn Azaz"},
        {name:"Rocco Vata"},{name:"Tom Cannon"},{name:"Jake O'Brien"}]
    const [players, setPlayers] = useState(PLACEHOLDERS);
    
    const handleSearch = async (query) => {
        if (query.length > 3) {
            const results = await searchPlayersByName(query);
            setPlayers(results);
        } else {
            setPlayers(PLACEHOLDERS);
        }
    };

    if (!isOpen) return null; 

    return (
        <>
            <div className="overlay" onClick={onClose}></div>
            
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="search-container"
            >
                <div className="search-header">
                <span className="search-title">Search</span>
                <IconButton onClick={onClose} color="inherit">
                    <Close />
                </IconButton>
                </div>
                <div className="search-input">
                <TextField 
                    fullWidth
                    variant="outlined"
                    placeholder="Search for a player" 
                    onChange={(e) => handleSearch(e.target.value)}
                />
                </div>
                <div className="search-results">
                {players.map((player, index) => (
                    <div key={index} className="search-item">
                    <span className="add-icon">➕</span>
                    <span>{player.name}</span>
                    </div>
                ))}
                </div>
            </motion.div>
        </>
    );
}
