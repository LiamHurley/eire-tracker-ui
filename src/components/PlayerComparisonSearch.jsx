import { motion } from "framer-motion";
import { TextField, Button, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import "../styles/comparison-search.css";
import usePlayerComparisonSearch from "../hooks/usePlayerComparisonSearch";

export default function PlayerComparisonSearch({isOpen, onClose, handlePlayerSelect, cardIndex}) {
    const {players, handleSearch, handlePlayerSelectWrapper} = usePlayerComparisonSearch();

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
                            <Button onClick={() => handlePlayerSelectWrapper(handlePlayerSelect, player, cardIndex)}>
                                <span className="add-icon">➕</span>
                                {player.name}
                            </Button>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}