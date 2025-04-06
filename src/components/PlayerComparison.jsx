import React, { useState } from "react";
import { Card, CardContent, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import usePlayerComparison from "../hooks/usePlayerComparison";
import "../styles/comparison.css";
import PlayerComparisonSearch from "./PlayerComparisonSearch";
import PlayerComparisonDisplay from "./PlayerComparisonDisplay";
import PlayerComparisonStatSelector from "./PlayerComparisonStatSelector";
import P90Toggle from "./P90Toggle";

const PlayerComparison = () => {
    const { handlePlayerSelect, players, handleClearCard, setCardIndex, setIsSearchOverlayOpen, isSearchOverlayOpen, cardIndex, 
        selectedStatsType, setSelectedStatsType, selectedStats, setSelectedStats, statLeaders, handleStatsTypeChange } = usePlayerComparison();
    
    const [isStatSelectorOpen, setIsStatSelectorOpen] = useState(false);
    
    const handleSearchOverlay = (index) => {
        setCardIndex(index);
        setIsSearchOverlayOpen(true);
    };

    return (
        <div className="comparison-container">
            <P90Toggle
                selectedStatsType={selectedStatsType}
                handleStatsTypeChange={handleStatsTypeChange}
            />
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
                                    <PlayerComparisonDisplay 
                                        player={player} 
                                        selectedStats={selectedStats} 
                                        statType={selectedStatsType} 
                                        leader={statLeaders.filter(sl => sl.playerId === player.playerId).map(s => s.stat)} 
                                    />
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
                <PlayerComparisonStatSelector
                    isOpen={isStatSelectorOpen}
                    onClose={() => setIsStatSelectorOpen(false)}
                    setStats={setSelectedStats}
                    selectedStats={selectedStats}
                />
            </div>
            { players[0] && <Button onClick={() => setIsStatSelectorOpen(true)}>Select stats</Button> }
        </div>
    );
};

export default PlayerComparison;