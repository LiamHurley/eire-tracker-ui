import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const OutfieldPerformances = ({ performances, rowsPerPage, page }) => {
    return (
        <TableContainer sx={{ marginTop: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Home</TableCell>
                            <TableCell>Away</TableCell>
                            <TableCell>G</TableCell>
                            <TableCell>A</TableCell>
                            <TableCell>Mins</TableCell>
                            <TableCell>Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {performances.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((performance) => (
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