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

    const loadPlayers = useCallback(async () => {
        const data = await fetchPlayers();
        const mappedData = data.map(player => ({
            ...player,
            position: POSITION_MAP[player.position] || player.position
        }));
        setPlayers(mappedData);
        setFilteredPlayers(mappedData);
    }, []);

    useEffect(() => {
        loadPlayers();
    }, [loadPlayers]);

    useEffect(() => {
        const filtered = players.filter(player => selectedPositions.includes(player.position));
        setFilteredPlayers(filtered);
    }, [selectedPositions, players]);

    const sortPlayers = useCallback((a, b) => {
        const valueA = getNestedValue(a, orderBy);
        const valueB = getNestedValue(b, orderBy);

        if (typeof valueA === "string" && typeof valueB === "string") {
            return order === "asc"
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        }

        return order === "asc" ? valueA - valueB : valueB - valueA;
    }, [order, orderBy]);

    const sortedPlayers = [...filteredPlayers].sort(sortPlayers);

    const handleSortRequest = (property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    return { filteredPlayers: sortedPlayers, handleSortRequest };
};

export default usePlayers; // Default export
