export const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const convertToP90 = (player, statKey) => {
    const minutesPlayed = player?.overallStatsDto?.minutesPlayed || 0;
    const statValue = player?.overallStatsDto?.[statKey] || 0;
    if (minutesPlayed > 0) {
        const p90Value = (90 / minutesPlayed) * statValue;
        return p90Value % 1 !== 0 ? p90Value.toFixed(2) : p90Value;
    }
    return 0;
};