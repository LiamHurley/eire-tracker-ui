import { Typography } from "@mui/material";

const PlayerComparisonDisplay = ({ player }) => {
    return (
        <>
            <Typography variant="h6">{player.name}</Typography>
            <Typography variant="body2">{player.position}</Typography>
            <Typography variant="body2">{player.club}</Typography>
        </>
    )
}

export default PlayerComparisonDisplay;