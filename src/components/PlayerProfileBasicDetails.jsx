import { Typography } from "@mui/material";
import "../styles/player-profile.css";
import { calculateAge } from "../utils/dateUtils";

const PlayerProfileBasicDetails = ({player}) => {
    const playerAge = calculateAge(player.dateOfBirth);
    return (
        <>
            <Typography variant="h4" className="profile-name">{player.name}</Typography>
            <Typography variant="h6" className="profile-basic-info">
            Age: {playerAge} | Position: {player.position} | Club: {player.club}
            </Typography>
        </>
    );
}

export default PlayerProfileBasicDetails;