import { useState } from "react";
import { searchPlayersByName } from "../api/playersApi";

const usePlayerComparisonSearch = () => {
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

    const handlePlayerSelectWrapper = (handlePlayerSelect, player, cardIndex) => {
        handlePlayerSelect(player, cardIndex);
        setPlayers(PLACEHOLDERS);
    }

    return {handleSearch, players, handlePlayerSelectWrapper};
};

export default usePlayerComparisonSearch;