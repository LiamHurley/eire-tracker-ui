import { useState } from "react";
import { fetchPlayerById } from "../api/playersApi";

const usePlayerComparison = () => {
    const [players, setPlayers] = useState([null, null, null, null]);
    const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
    const [cardIndex, setCardIndex] = useState(null);

    const handlePlayerSelect = async (player, index) => {
        const apiPlayer = await fetchPlayerById(player.playerId);
        const currentPlayers = [...players];
        currentPlayers[index] = apiPlayer;
        setPlayers(currentPlayers);
        setIsSearchOverlayOpen(false);
    };

    const handleClearCard = (index) => {
        const newPlayers = [...players];
        newPlayers[index] = null;
        setPlayers(newPlayers);
    }

    return { handlePlayerSelect, players, handleClearCard, setCardIndex, 
        setIsSearchOverlayOpen, isSearchOverlayOpen, cardIndex };
};

export default usePlayerComparison;