import { useState } from "react";

export const useStats = () => {
    const [statsType, setStatsType] = useState("overall");

    const handleStatsTypeChange = (event) => {
        setStatsType(event.target.value);
    };

    return { statsType, handleStatsTypeChange };
};