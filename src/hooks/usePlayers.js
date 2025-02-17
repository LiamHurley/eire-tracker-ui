import { useState, useEffect, useCallback } from "react";
import { fetchPlayers } from "../api/playersApi";

const POSITION_MAP = {
    "G": "GK",
    "D": "DEF",
    "M": "MID",
    "F": "FWD"
};

const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, key) => acc && acc[key] ? acc[key] : "0", obj);
};

const usePlayers = (selectedPositions, selectedStatType) => {
    const [players, setPlayers] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("");

    useEffect(() => {
        async function loadPlayers() {
            const data = await fetchPlayers();
            const mappedData = data.map(player => ({
                ...player,
                position: POSITION_MAP[player.position] || player.position
            }));
            setPlayers(mappedData);
            setFilteredPlayers(mappedData);
        }
        loadPlayers();
    }, []);

    useEffect(() => {
        setFilteredPlayers(players.filter(player => selectedPositions.includes(player.position)));
    }, [selectedPositions, players]);

    const getAdjustedStatValue = (player, stat) => {
        const value = getNestedValue(player, stat);
        if (selectedStatType === "p90") {
            const minutesPlayed = player.overallStatsDto.minutesPlayed || 0;
            if (minutesPlayed <= 0) {
                return 0;
            }
            const p90Value = (90 / minutesPlayed) * value;
            return p90Value % 1 !== 0 ? p90Value.toFixed(2) : p90Value;
        }
        return value;
    };

    const sortPlayers = (a, b) => {
        const valueA = getAdjustedStatValue(a, orderBy);
        const valueB = getAdjustedStatValue(b, orderBy);

        if (typeof valueA === "string" && typeof valueB === "string") {
            return order === "asc"
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        }

        return order === "asc" ? valueA - valueB : valueB - valueA;
    };

    const sortedPlayers = [...filteredPlayers].sort(sortPlayers);

    const handleSortRequest = (property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    return { filteredPlayers: sortedPlayers, handleSortRequest };
};

export default usePlayers; 