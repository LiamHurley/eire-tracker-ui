const BASE_HEADERS = [
    { label: "Name", key: "name" },
    { label: "Club", key: "club" },
    { label: "Pos", key: "position" },
    { label: "Apps", key: "overallStatsDto.matchesPlayed" },
    { label: "Mins", key: "overallStatsDto.minutesPlayed" },
];

export const STAT_HEADERS = {
    Overall: [
      ...BASE_HEADERS,
      { label: "Goals", key: "overallStatsDto.goals" },
      { label: "Assists", key: "overallStatsDto.goalAssist" },
      { label: "Avg rating", key: "overallStatsDto.rating" }
    ],
    Goalkeeping: [
      ...BASE_HEADERS,
      { label: "Saves", key: "overallStatsDto.saves" },
      { label: "CS", key: "overallStatsDto.cleanSheets" },
      { label: "Passing acc %", key: "overallStatsDto.passAccuracy" },
      { label: "Avg rating", key: "overallStatsDto.rating" }
    ],
    Defending: [
      ...BASE_HEADERS,
      { label: "Errors", key: "overallStatsDto.errorLeadToAShot" },
      { label: "Aerial duels", key: "overallStatsDto.totalAerialDuels" },
      { label: "Aerial win %", key: "overallStatsDto.aerialDuelsWonPercentage" },
      { label: "Duel win %", key: "overallStatsDto.duelWonPercentage" },
      { label: "Int", key: "overallStatsDto.interceptionWon" },
      { label: "Tackles", key: "overallStatsDto.totalTackle" },
      { label: "Blocks", key: "overallStatsDto.outfielderBlock" },
      { label: "Avg rating", key: "overallStatsDto.rating" }
    ],
    Passing: [
      ...BASE_HEADERS,
      { label: "Passes", key: "overallStatsDto.totalPass" },
      { label: "Assists", key: "overallStatsDto.goalAssist" },
      { label: "Passing acc %", key: "overallStatsDto.passAccuracy" },
      { label: "Long balls", key: "overallStatsDto.totalLongBalls" },
      { label: "Long ball acc %", key: "overallStatsDto.longBallAccuracy" },
      { label: "Big chances created", key: "overallStatsDto.bigChanceCreated" },
      { label: "Key passes", key: "overallStatsDto.keyPass" },
      { label: "Poss lost", key: "overallStatsDto.possessionLostCtrl" },
      { label: "Avg rating", key: "overallStatsDto.rating" }
    ],
    Attacking: [
      ...BASE_HEADERS,
      { label: "Goals", key: "overallStatsDto.goals" },
      { label: "Assists", key: "overallStatsDto.goalAssist" },
      { label: "Shots", key: "overallStatsDto.totalShotsTaken" },
      { label: "Big chances missed", key: "overallStatsDto.bigChanceMissed" },
      { label: "Aerial win %", key: "overallStatsDto.aerialDuelsWonPercentage" },
      { label: "Avg rating", key: "overallStatsDto.rating" }
    ],
};

export const p90ableStats = [
    "overallStatsDto.goals",
    "overallStatsDto.goalAssist",
    "overallStatsDto.keyPass",
    "overallStatsDto.saves",
    "overallStatsDto.cleanSheets",
    "overallStatsDto.interceptionWon",
    "overallStatsDto.totalLongBalls",
    "overallStatsDto.possessionLostCtrl",
    "overallStatsDto.bigChanceMissed",
    "overallStatsDto.totalShotsTaken",
    "overallStatsDto.totalAerialDuels",
    "overallStatsDto.totalTackle",
    "overallStatsDto.outfielderBlock",
    "overallStatsDto.bigChanceCreated",
    "overallStatsDto.errorLeadToAShot",
    "overallStatsDto.totalPass"
];