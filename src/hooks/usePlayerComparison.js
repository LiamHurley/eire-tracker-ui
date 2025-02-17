// import { useState } from "react";
// import { fetchPlayerById, searchPlayersByName } from "../api/playersApi";

// const usePlayerComparison = () => {
//     const [searchResults, setSearchResults] = useState([]);
//     const [selectedPlayers, setSelectedPlayers] = useState([]);

//     const handleSearch = async (query) => {
//         if (query.length > 3) {
//             const results = await searchPlayersByName(query);
//             setSearchResults(results);
//         } else {
//             setSearchResults([]);
//         }
//     };

//     const handlePlayerSelect = async (event, newValue) => {
//         if (newValue.length <= 4) {
//             const newSelectedPlayers = await Promise.all(
//                 newValue.map(async (player) => {
//                     const fullPlayerData = await fetchPlayerById(player.playerId);
//                     return fullPlayerData;
//                 })
//             );
//             setSelectedPlayers(newSelectedPlayers);
//         }
//     };

//     return { searchResults, selectedPlayers, handleSearch, handlePlayerSelect };
// };

// export default usePlayerComparison;

import { useState } from "react";
import { fetchPlayerById, searchPlayersByName } from "../api/playersApi";

const usePlayerComparison = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleSearch = async (query) => {
        if (query.length > 3) {
            const results = await searchPlayersByName(query);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const handlePlayerSelect = async (event, newValue) => {
        if (newValue.length <= 4) {
            const newSelectedPlayers = await Promise.all(
                newValue.map(async (player) => {
                    const fullPlayerData = await fetchPlayerById(player.playerId);
                    return fullPlayerData;
                })
            );
            setSelectedPlayers(newSelectedPlayers);
        }
    };

    // New function to reset search results when switching cards
    const resetSearchResults = () => {
        setSearchResults([]);
    };

    return { searchResults, selectedPlayers, handleSearch, handlePlayerSelect, resetSearchResults };
};

export default usePlayerComparison;
