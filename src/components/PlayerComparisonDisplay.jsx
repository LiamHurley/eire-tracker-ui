import { Typography, Grid } from "@mui/material";
import { POSITION_LONG_NAMES } from "../utils/stringUtils";

const PlayerComparisonDisplay = ({ player }) => {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                {player.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                {player.club}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                {POSITION_LONG_NAMES.get(player.position)}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary">
            2024/2025 Premier League
            </Typography> */}
            <Grid container spacing={1} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                    <Typography variant="body2">Games</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" align="right">
                    20
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2">Minutes</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" align="right">
                    600
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2">Goals</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" align="right">
                    10
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2">Passes Attempted</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" align="right">
                    70
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2">Assists</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" align="right">
                    3
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default PlayerComparisonDisplay;