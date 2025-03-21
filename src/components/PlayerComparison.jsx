import React from "react";
import { Card, CardContent, Typography, Button, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import usePlayerComparison from "../hooks/usePlayerComparison";
import "../styles/comparison.css";

const PlayerComparison = () => {
    const { searchResults, handlePlayerSelect, handleSearchChange, players, selectedPlayerIndex, handleClearCard } = usePlayerComparison(); 

    return (
        <div className="comparison-container">
            <div className="cards-container">
                {players.map((player, index) => (
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
                                        <TextField
                                            label="Search Player"
                                            variant="outlined"
                                            onChange={(e) => handleSearchChange(e, index)}
                                            fullWidth
                                            disabled={index !== 0 && !players[0]}
                                        />
                                        { selectedPlayerIndex === index &&
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
                                        }
                                    </div>
                                )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PlayerComparison;