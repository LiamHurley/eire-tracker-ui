import React, { useState } from "react";
import { Card, CardContent, Typography, Button, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import usePlayerComparison from "../hooks/usePlayerComparison";
import "../styles/comparison.css";
import PlayerComparisonSearch from "./PlayerComparisonSearch";

const PlayerComparison = () => {
    const { searchResults, handlePlayerSelect, handleSearchChange, players, 
        selectedPlayerIndex, handleClearCard, isSearchDisplayed, setSearchDisplayed } = usePlayerComparison();
    const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);


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
                                            onClick={() => setIsSearchOverlayOpen(true)}
                                        >
                                            <Typography variant="h6">Add player</Typography>
                                        </Button>
                                        {/* <TextField
                                            label="Search Player"
                                            variant="outlined"
                                            onChange={(e) => handleSearchChange(e, index)}
                                            fullWidth
                                            disabled={index !== 0 && !players[0]}
                                        /> */}
                                        {/* { selectedPlayerIndex === index &&
                                            <div className="search-results">
                                                {searchResults?.map((player) => (
                                                    <Button
                                                        key={player.playerId}
                                                        onClick={() => handlePlayerSelect(player, index)}
                                                    >
                                                        {player.name}
                                                    </Button>
                                                ))}
                                            </div>
                                        } */}
                                    </div>
                                )}
                        </CardContent>
                    </Card>
                ))}
                <PlayerComparisonSearch isOpen={isSearchOverlayOpen} onClose={() => setIsSearchOverlayOpen(false)}/>
            </div>
        </div>
    );
};

export default PlayerComparison;