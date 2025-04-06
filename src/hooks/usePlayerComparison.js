import { useState, useEffect } from "react";
import { fetchPlayerById } from "../api/playersApi";
import { sanitise } from "../utils/statsUtils";
import { getCurrentYear } from "../utils/dateUtils";

const usePlayerComparison = () => {
    const [players, setPlayers] = useState([null, null, null, null]);
    const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
    const [cardIndex, setCardIndex] = useState(null);
    const [selectedStatsType, setSelectedStatsType] = useState("Overall");
    const DEFAULT_STATS = ["Appearances", "Minutes", "Goals", "Assists"];
    const [selectedStats, setSelectedStats] = useState(DEFAULT_STATS);
    const [statLeaders, setStatLeaders] = useState([]);

    useEffect(() => {
        const calculateStatLeaders = () => {
            return selectedStats.map(stat => getTopPlayerByStat(stat));
        };
      
        setStatLeaders(calculateStatLeaders());
    }, [players, selectedStats]);

    useEffect(() => {
        console.log("Updated statLeaders:", statLeaders);
    }, [statLeaders]);

    const handlePlayerSelect = async (player, index) => {
        const apiPlayer = await fetchPlayerById(player.playerId);
        const currentPlayers = [...players];
        currentPlayers[index] = apiPlayer;
        setPlayers(currentPlayers);
        setIsSearchOverlayOpen(false);
    };

    const handleStatsTypeChange = (event, newStatsType) => {
        if (newStatsType !== null) {
            setSelectedStatsType(newStatsType);
            // convert all p90able stats on the player objects themselves?
        }
    };

    function getTopPlayerByStat(stat) {
        let topPlayerId = '';
        let topValue = -Infinity;
        const sanitisedStat = sanitise(stat.toLowerCase());
        
        for (const player of players) {
            if (player !== null) {
                const value = player?.seasons?.find((s) => s.year === getCurrentYear())?.overallStatsDto?.[sanitisedStat];
            
                if (value != null && value > topValue) {
                    topValue = value;
                    topPlayerId = player.playerId;
                }
            }
        }
        
        return {
            stat: stat,
            playerId: topPlayerId,
            value: topValue === -Infinity ? '' : topValue
        };
    }

    const handleClearCard = (index) => {
        const newPlayers = [...players];
        newPlayers[index] = null;

        for (let i = 1; i <= newPlayers.length; i++) {
            if (!newPlayers[i - 1] && newPlayers[i]) {
                newPlayers[i - 1] = newPlayers[i];
                newPlayers[i] = null;
            }
        };

        setPlayers(newPlayers);
    }

    return { handlePlayerSelect, players, handleClearCard, setCardIndex, setIsSearchOverlayOpen, isSearchOverlayOpen, cardIndex, 
        selectedStatsType, setSelectedStatsType, selectedStats, setSelectedStats, statLeaders, handleStatsTypeChange };
};

export default usePlayerComparison;