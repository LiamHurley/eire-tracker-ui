export const getNestedValue = (obj, path) => {
    return sanitise(path).split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const convertToP90 = (stats, statKey) => {
    const minutesPlayed = stats?.minutesPlayed || 0;
    const statValue = stats?.[statKey] || 0;
    if (minutesPlayed > 0) {
        const p90Value = (90 / minutesPlayed) * statValue;
        return p90Value % 1 !== 0 ? p90Value.toFixed(2) : p90Value;
    }
    return 0;
};

const sanitise = (statName) => {
    switch (statName) {
        case "appearances":
            return "matchesPlayed";
        case "minutes":
            return "minutesPlayed";
        case "assists":
            return "goalAssist";
        default:
            return statName;
    }
}