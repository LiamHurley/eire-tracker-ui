import React from "react";
import { useParams } from "react-router-dom";
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, 
    TableRow, CircularProgress, Divider } from "@mui/material";
import usePlayer from "../hooks/usePlayer";
import GoalkeeperProfile from "./GoalkeeperProfile";
import OutfieldProfile from "./OutfieldProfile";
import { calculateAge } from "../utils/dateUtils";

const PlayerProfile = () => {
    const { id } = useParams();
    const { player, loading } = usePlayer(id);

    if (loading) return <CircularProgress />;
    if (!player) return <Typography variant="h6">Player not found</Typography>;

    const playerAge = calculateAge(player.dateOfBirth);

    return (
        <Paper className="player-profile">
             {/* Basic Information */}
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

            {/* Performances Table */}
            <Typography variant="h6" sx={{ marginTop: 3 }}>Performance History</Typography>
            <TableContainer sx={{ marginTop: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Match Date</TableCell>
                            <TableCell>Home Team</TableCell>
                            <TableCell>Away Team</TableCell>
                            <TableCell>Goals</TableCell>
                            <TableCell>Assists</TableCell>
                            <TableCell>Minutes Played</TableCell>
                            <TableCell>Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {player.performances.map((performance) => (
                            <TableRow key={performance.performanceId}>
                                <TableCell>{performance.matchDate}</TableCell>
                                <TableCell>{performance.homeTeam}</TableCell>
                                <TableCell>{performance.awayTeam}</TableCell>
                                <TableCell>{performance.goals}</TableCell>
                                <TableCell>{performance.goalAssist}</TableCell>
                                <TableCell>{performance.minutesPlayed}</TableCell>
                                <TableCell>{performance.rating}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default PlayerProfile;