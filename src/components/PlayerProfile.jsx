import React from "react";
import { useParams } from "react-router-dom";
import { Paper, Typography, CircularProgress } from "@mui/material";
import usePlayer from "../hooks/usePlayer";
import GoalkeeperProfile from "./GoalkeeperProfile";
import OutfieldProfile from "./OutfieldProfile";

const PlayerProfile = () => {
    const { id } = useParams();
    const { player, loading } = usePlayer(id);

    if (loading) return <CircularProgress />;
    if (!player) return <Typography variant="h6">Player not found</Typography>;

    return (
        <Paper className="player-profile">
            <Typography variant="h4">{player.name}</Typography>
            <Typography variant="h6">Position: {player.position}</Typography>

            {player.position === "G" ? (
                <GoalkeeperProfile player={player} />
            ) : (
                <OutfieldProfile player={player} />
            )}
        </Paper>
    );
};

export default PlayerProfile;