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
        case "clean sheets":
            return "cleanSheets";
        case "aerial duels won":
            return "cleanSheets";
        case "aerial duels won %":
            return "aerialDuelsWonPercentage";
        case "duels won":
            return "duelWon";
        case "duels won %":
            return "duelWonPercentage";
        case "interceptions":
            return "interceptionWon"
        case "tackles":
            return "totalTackle";
        case "blocks":
            return "outfielderBlock";
        case "fouls":
            return "fouls";
        case "error lead to shot":
            return "errorLeadToAShot";
        case "expected assists":
            return "expectedAssists";
        case "passes attempted":
            return "totalPass";
        case "passes completed":
            return "accuratePass";
        case "pass completion %":
            return "passAccuracy";
        case "big chances created":
            return "bigChanceCreated";
        case "key passes":
            return "keyPass";
        case "long balls":
            return "totalLongBalls";
        case "crosses completed":
            return "accurateCross";
        case "possession lost":
            return "possessionLostCtrl";
        case "goals":
            return "goals";
        case "expected goals":
            return "expectedGoals";
        case "shots taken":
            return "totalShotsTaken";
        case "shots on target":
            return "onTargetScoringAttempt";
        case "big chances missed":
            return "bigChanceMissed";
        case "saves":
            return "saves";
        case "goals prevented":
            return "goalsPrevented";
        case "punches":
            return "punches";
        case "saved shots from inside the box":
            return "savedShotsFromInsideTheBox";
        case "fouled":
            return "wasFouled";
        case "touches":
            return "touches";
        case "captain":
            return "captain";    
        default:
            return statName;
    }
}