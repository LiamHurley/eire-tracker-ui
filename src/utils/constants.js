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
      { label: "xG", key: "overallStatsDto.expectedGoals" },
      { label: "Assists", key: "overallStatsDto.goalAssist" },
      { label: "xA", key: "overallStatsDto.expectedAssists" },
      { label: "Avg rating", key: "overallStatsDto.averageRating" }
    ],
    Goalkeeping: [
      ...BASE_HEADERS,
      { label: "Saves", key: "overallStatsDto.saves" },
      { label: "CS", key: "overallStatsDto.cleanSheets" },
      { label: "Passing acc %", key: "overallStatsDto.passAccuracy" },
      { label: "Avg rating", key: "overallStatsDto.averageRating" }
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
      { label: "Avg rating", key: "overallStatsDto.averageRating" }
    ],
    Passing: [
      ...BASE_HEADERS,
      { label: "Passes", key: "overallStatsDto.totalPass" },
      { label: "Assists", key: "overallStatsDto.goalAssist" },
      { label: "xA", key: "overallStatsDto.expectedAssists" },
      { label: "Passing acc %", key: "overallStatsDto.passAccuracy" },
      { label: "Long balls", key: "overallStatsDto.totalLongBalls" },
      { label: "Long ball acc %", key: "overallStatsDto.longBallAccuracy" },
      { label: "Big chances created", key: "overallStatsDto.bigChanceCreated" },
      { label: "Key passes", key: "overallStatsDto.keyPass" },
      { label: "Poss lost", key: "overallStatsDto.possessionLostCtrl" },
      { label: "Avg rating", key: "overallStatsDto.averageRating" }
    ],
    Attacking: [
      ...BASE_HEADERS,
      { label: "Goals", key: "overallStatsDto.goals" },
      { label: "xG", key: "overallStatsDto.expectedGoals" },
      { label: "Assists", key: "overallStatsDto.goalAssist" },
      { label: "xA", key: "overallStatsDto.expectedAssists" },
      { label: "Shots", key: "overallStatsDto.totalShotsTaken" },
      { label: "Big chances missed", key: "overallStatsDto.bigChanceMissed" },
      { label: "Aerial win %", key: "overallStatsDto.aerialDuelsWonPercentage" },
      { label: "Avg rating", key: "overallStatsDto.averageRating" }
    ],
};

export const OUTFIELD_PROFILE_STATS = {
  Defensive: [
    { label: "Errors", key: "errorLeadToAShot" },
    { label: "Aerial duels", key: "totalAerialDuels" },
    { label: "Aerial win %", key: "aerialDuelsWonPercentage" },
    { label: "Duel win %", key: "duelWonPercentage" },
    { label: "Interceptions", key: "interceptionWon" },
    { label: "Tackles", key: "totalTackle" },
    { label: "Blocks", key: "outfielderBlock" },
    { label: "Fouls", key: "fouls" },
  ],
  General: [
    { label: "Appearances", key: "matchesPlayed" },
    { label: "Minutes", key: "minutesPlayed" },
    { label: "Goals", key: "goals" },
    { label: "Assists", key: "goalAssist" },
    { label: "Avg rating", key: "averageRating" },
  ],
  Creativity: [
    { label: "Expected assists", key: "expectedAssists" },
    { label: "Assists", key: "goalAssist" },
    { label: "Passes completed", key: "accuratePass" },
    { label: "Passing acc %", key: "passAccuracy" },
    { label: "Long balls", key: "totalLongBalls" },
    { label: "Long ball acc %", key: "longBallAccuracy" },
    { label: "Big chances created", key: "bigChanceCreated" },
    { label: "Key passes", key: "keyPass" },
    { label: "Touches", key: "touches" },
    { label: "Poss lost", key: "possessionLostCtrl" },
  ],
  Attacking: [
    { label: "Expected goals", key: "expectedGoals" },
    { label: "Goals", key: "goals" },
    { label: "Shots", key: "totalShotsTaken" },
    { label: "Shots on target", key: "onTargetScoringAttempt" },
    { label: "Big chances missed", key: "bigChanceMissed" },
    { label: "Aerial win %", key: "aerialDuelsWonPercentage" },
    { label: "Fouled", key: "wasFouled" },
    { label: "Offside", key: "totalOffside" },
  ],
}

export const GK_PROFILE_STATS = [
  { label: "Appearances", key: "matchesPlayed" },
  { label: "Minutes", key: "minutesPlayed" },
  { label: "Saves", key: "saves" },
  { label: "Goals prevented", key: "goalsPrevented" },
  { label: "Saves from shots inside box", key: "savedShotsFromInsideTheBox" },
  { label: "Clean sheets", key: "cleanSheets" },
  { label: "Passing acc %", key: "passAccuracy" },
  { label: "Errors leading to shot", key: "errorLeadToAShot" },
  { label: "Avg rating", key: "averageRating" },
]

export const p90ableStats = [
    "overallStatsDto.accuratePass",
    "overallStatsDto.totalLongBalls",
    "overallStatsDto.bigChanceCreated",
    "overallStatsDto.touches",
    "overallStatsDto.goals",
    "overallStatsDto.totalOffside",
    "overallStatsDto.wasFouled",
    "overallStatsDto.onTargetScoringAttempt",
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
    "overallStatsDto.totalPass",
    "overallStatsDto.expectedGoals",
    "overallStatsDto.expectedAssists",
    "overallStatsDto.goalsPrevented",
    "overallStatsDto.fouls"
];

export const negativeStats = [
  "errorLeadToAShot",
  "bigChanceMissed",
  "possessionLostCtrl",
  "fouls",
  "totalOffside"
];