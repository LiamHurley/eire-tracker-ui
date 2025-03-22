import React from "react";
import { Card, CardContent, Typography, Button, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import usePlayerComparison from "../hooks/usePlayerComparison";
import "../styles/comparison.css";
import PlayerComparisonSearch from "./PlayerComparisonSearch";

const PlayerComparison = () => {
    const { handlePlayerSelect, players, handleClearCard, setCardIndex, 
        setIsSearchOverlayOpen, isSearchOverlayOpen, cardIndex } = usePlayerComparison();

    const handleSearchOverlay = (index) => {
        setCardIndex(index);
        setIsSearchOverlayOpen(true);
    }

    return (
        <div className="comparison-container">
            <div className="cards-container">
                { players.filter((player, index) => index <= 1 || players[index - 1]).map((player, index) => (
                    <Card
                        key={index}
                        className="comparison-card"
                    >
                        <CardContent>
                        {player ? (
                                <div>
                                    <IconButton
                                        edge="end"
                                        color="inherit"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleClearCard(index);
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
                                    <div className="search-box">
                                        <Button
                                            disabled={index !== 0 && !players[0]}
                                            onClick={() => handleSearchOverlay(index)}
                                        >
                                            <Typography variant="h6">Add player</Typography>
                                        </Button>
                                    </div>
                                )}
                        </CardContent>
                    </Card>
                ))}
                <PlayerComparisonSearch 
                    isOpen={isSearchOverlayOpen} 
                    onClose={() => setIsSearchOverlayOpen(false)}
                    handlePlayerSelect={handlePlayerSelect}
                    cardIndex={cardIndex}
                />
            </div>
        </div>
    );
};

export default PlayerComparison;