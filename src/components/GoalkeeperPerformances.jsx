import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";

const GoalkeeperPerformances = ({ performances, rowsPerPage, page }) => {
    return (
        <>
            <Typography variant="h6" sx={{ marginTop: 3 }}>Match History</Typography>
            <TableContainer sx={{ marginTop: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Match Date</TableCell>
                            <TableCell>Home Team</TableCell>
                            <TableCell>Away Team</TableCell>
                            <TableCell>Saves</TableCell>
                            <TableCell>Clean Sheet</TableCell>
                            <TableCell>Minutes Played</TableCell>
                            <TableCell>Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {performances.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((performance) => (
                            <TableRow key={performance.performanceId}>
                                <TableCell>{performance.matchDate}</TableCell>
                                <TableCell sx={{ fontWeight: performance.homeAway === 'H' ? 'bold' : 'normal' }}>{performance.homeTeam}</TableCell>
                                <TableCell sx={{ fontWeight: performance.homeAway === 'A' ? 'bold' : 'normal' }}>{performance.awayTeam}</TableCell>
                                <TableCell>{performance.saves}</TableCell>
                                <TableCell>{performance.cleanSheet ? 'Y' : 'N'}</TableCell>
                                <TableCell>{performance.minutesPlayed}</TableCell>
                                <TableCell>{performance.rating}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default GoalkeeperPerformances;