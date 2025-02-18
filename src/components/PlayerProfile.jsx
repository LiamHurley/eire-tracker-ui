import React from "react";
import { useParams } from "react-router-dom";
import { Paper, Typography, CircularProgress, Divider } from "@mui/material";
import usePlayer from "../hooks/usePlayer";
import GoalkeeperProfile from "./GoalkeeperProfile";
import OutfieldProfile from "./OutfieldProfile";
import GoalkeeperPerformances from "./GoalkeeperPerformances";
import OutfieldPerformances from "./OutfieldPerformances";
import PlayerProfileBasicDetails from "./PlayerProfileBasicDetails";

const PlayerProfile = () => {
    const { id } = useParams();
    const { player, loading } = usePlayer(id);

    if (loading) return <CircularProgress />;
    if (!player) return <Typography variant="h6">Player not found</Typography>;

    return (
        <Paper className="player-profile">
            <PlayerProfileBasicDetails player={player} />
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