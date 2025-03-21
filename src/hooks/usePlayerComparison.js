import { useState } from "react";
import { fetchPlayerById, searchPlayersByName } from "../api/playersApi";

const usePlayerComparison = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [players, setPlayers] = useState([null, null, null, null]);
    const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(null);

    const handleSearch = async (query) => {
        if (query.length > 3) {
            const results = await searchPlayersByName(query);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const handleSearchChange = (e, index) => {
        setSelectedPlayerIndex(index);
        resetSearchResults();
        if (selectedPlayerIndex !== null) {
            handleSearch(e.target.value);
        }
    };

    const handlePlayerSelect = async (player, index) => {
        const apiPlayer = await fetchPlayerById(player.playerId);
        const currentPlayers = [...players];
        currentPlayers[index] = apiPlayer;
        setPlayers(currentPlayers);
        setSelectedPlayers(apiPlayer);  
        setSelectedPlayerIndex(null);
    };

    const resetSearchResults = () => {
        setSearchResults([]);
    };

    const handleClearCard = (index) => {
        const newPlayers = [...players];
        newPlayers[index] = null;
        setPlayers(newPlayers);

        resetSearchResults();
    }

    return { searchResults, selectedPlayers, handleSearch, handlePlayerSelect, resetSearchResults, 
        handleClearCard, handleSearchChange, players, selectedPlayerIndex, setPlayers, handleClearCard };
};

export default usePlayerComparison;