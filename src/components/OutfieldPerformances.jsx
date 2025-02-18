import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const OutfieldPerformances = ({performances}) => {
    return (
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
                        {performances.map((performance) => (
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
    );
}

export default OutfieldPerformances;