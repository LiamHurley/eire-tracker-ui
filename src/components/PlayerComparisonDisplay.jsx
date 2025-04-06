import { Typography, Grid } from "@mui/material";
import { POSITION_LONG_NAMES } from "../utils/stringUtils";
import { getCurrentYear } from "../utils/dateUtils";
import { convertToP90, getNestedValue, sanitise } from "../utils/statsUtils";
import { p90ableStats } from "../utils/constants";

const PlayerComparisonDisplay = ({ player, selectedStats, statType, leader }) => {
    const seasonStats = player.seasons?.find((s) => s.year === getCurrentYear())?.overallStatsDto;

    return (
        <>
            <Typography variant="h6" gutterBottom>{player.name}</Typography>
            <Typography variant="subtitle1" color="textSecondary">{player.club}</Typography>
            <Typography variant="subtitle1" color="textSecondary">{POSITION_LONG_NAMES.get(player.position)}</Typography>
            <Grid container spacing={1} sx={{ mt: 2 }}>
            { selectedStats.map((stat) => (
                <>
                    <Grid item xs={8}>
                        <Typography variant="body2">{stat}</Typography>
                    </Grid>
                    { statType.toLowerCase() === 'p90' && p90ableStats.includes(`overallStatsDto.${sanitise(stat.toLowerCase())}`) ? (
                        <Grid item xs={4}>
                            <Typography variant="body2" align="right" sx={{color: leader.includes(stat) ? 'green' : 'red'}}>{convertToP90(seasonStats, stat.toLowerCase())}</Typography>
                        </Grid>
                    ) :
                    <Grid item xs={4}>
                        <Typography variant="body2" align="right" sx={{color: leader.includes(stat) ? 'green' : 'red'}}>{getNestedValue(seasonStats, stat.toLowerCase())}</Typography>
                    </Grid> 
                    }
                </>
            ))}
            </Grid>
        </>
    )
}

export default PlayerComparisonDisplay;