import React, { useState } from "react";
import { Card, CardContent, Typography, Button, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import usePlayerComparison from "../hooks/usePlayerComparison";
import "../styles/comparison.css";

const PlayerComparison = () => {
    // State for selected players in each card
    const [players, setPlayers] = useState([null, null]);
    const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(null);

    // Using the custom hook for player comparison
    const { searchResults, handleSearch, resetSearchResults } = usePlayerComparison(); // Added resetSearchResults

    // Handle when a user clicks on an empty card to search for a player
    const handleCardClick = (index) => {
        setSelectedPlayerIndex(index);
        resetSearchResults(); // Reset search state when a new card is clicked
    };

    // Handle typing in the search input
    const handleSearchChange = (e) => {
        if (selectedPlayerIndex !== null) {
            handleSearch(e.target.value); // Trigger search for the player
        }
    };

    // Handle player selection from search results
    const handlePlayerSelect = (player) => {
        if (selectedPlayerIndex !== null) {
            const newPlayers = [...players];
            newPlayers[selectedPlayerIndex] = player; // Populate selected player into the card
            setPlayers(newPlayers);
            setSelectedPlayerIndex(null); // Reset search after selecting a player
        }
    };

    // Handle clearing a card
    const handleClearCard = (index) => {
        const newPlayers = [...players];
        newPlayers[index] = null; // Set the card to null to indicate it's empty
        setPlayers(newPlayers);

        resetSearchResults(); // Reset search results when clearing the card
    }

    return (
        <div className="comparison-container">
            <div className="cards-container">
                {players.map((player, index) => (
                    <Card
                        key={index}
                        className="comparison-card"
                        onClick={() => handleCardClick(index)}
                    >
                        <CardContent>
                            {player ? (
                                <div>
                                    <IconButton
                                        edge="end"
                                        color="inherit"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent triggering the card click event
                                            handleClearCard(index); // Clear the card
                                        }}
                                        sx={{ position: 'absolute', top: 8, right: 8 }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <Typography variant="h6">{player.name}</Typography>
                                    <Typography variant="body2">{player.position}</Typography>
                                    <Typography variant="body2">{player.club}</Typography>
                                </div>
                            ) : (
                                // Display "Click to search" when no player is selected for this card
                                selectedPlayerIndex === index ? (
                                    <div className="search-box">
                                        <TextField
                                            label="Search Player"
                                            variant="outlined"
                                            onChange={handleSearchChange}
                                            fullWidth
                                        />
                                        <div className="search-results">
                                            {searchResults?.map((player) => (
                                                <Button
                                                    key={player.playerId}
                                                    onClick={() => handlePlayerSelect(player)}
                                                >
                                                    {player.name}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Typography variant="h6" className="cta-text">Click to search</Typography> // CTA Text
                                )
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PlayerComparison;
