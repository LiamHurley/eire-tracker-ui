import React from "react";
import { useParams } from "react-router-dom";
import { Paper, Typography, CircularProgress, Divider } from "@mui/material";
import usePlayer from "../hooks/usePlayer";
import GoalkeeperProfile from "./GoalkeeperProfile";
import OutfieldProfile from "./OutfieldProfile";
import { calculateAge } from "../utils/dateUtils";
import GoalkeeperPerformances from "./GoalkeeperPerformances";
import OutfieldPerformances from "./OutfieldPerformances";

const PlayerProfile = () => {
    const { id } = useParams();
    const { player, loading } = usePlayer(id);

    if (loading) return <CircularProgress />;
    if (!player) return <Typography variant="h6">Player not found</Typography>;
    
    const playerAge = calculateAge(player.dateOfBirth);

    return (
        <Paper className="player-profile">
             <Typography variant="h4" className="profile-name">{player.name}</Typography>
             <Typography variant="h6" className="profile-basic-info">
                Age: {playerAge} | Position: {player.position} | Club: {player.club}
             </Typography>
             <Divider className="section-divider" />
                        
            {player.position === "G" ? (
                <GoalkeeperProfile player={player} />
            ) : (
                <OutfieldProfile player={player} />
            )}

            <Typography variant="h6" sx={{ marginTop: 3 }}>Match History</Typography>
            {player.position === "G" ? (
                <GoalkeeperPerformances performances={player.performances} />
            ) : (
                <OutfieldPerformances performances={player.performances} />
            )}
        </Paper>
    );
};

export default PlayerProfile;