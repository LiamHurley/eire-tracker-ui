import { Typography, Grid } from "@mui/material";
import { POSITION_LONG_NAMES } from "../utils/stringUtils";
import { getCurrentYear } from "../utils/dateUtils";
import { getNestedValue } from "../utils/statsUtils";

const PlayerComparisonDisplay = ({ player, selectedStats }) => {
    const seasonStats = player.seasons?.find((s) => s.year === getCurrentYear())?.overallStatsDto;

    return (
        <>
            <Typography variant="h6" gutterBottom>{player.name}</Typography>
            <Typography variant="subtitle1" color="textSecondary">{player.club}</Typography>
            <Typography variant="subtitle1" color="textSecondary">{POSITION_LONG_NAMES.get(player.position)}</Typography>
            <Grid container spacing={1} sx={{ mt: 2 }}>
            { selectedStats.map((stat) => (
                <>
                    <Grid item xs={6}>
                        <Typography variant="body2">{stat}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" align="right">{getNestedValue(seasonStats, stat.toLowerCase())}</Typography>
                    </Grid>
                </>
            ))}
            </Grid>
        </>
    )
}

export default PlayerComparisonDisplay;