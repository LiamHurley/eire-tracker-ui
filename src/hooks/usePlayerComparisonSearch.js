import { useState } from "react";
import { searchPlayersByName } from "../api/playersApi";

const usePlayerComparisonSearch = () => {
    const PLACEHOLDERS = [
        {name:"Evan Ferguson", playerId: 999231},
        {name:"Finn Azaz", playerId: 1007067},
        {name:"Rocco Vata", playerId: 1149235},
        {name:"Tom Cannon", playerId: 1005766},
        {name:"Jake O'Brien", playerId: 998253}
    ]
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