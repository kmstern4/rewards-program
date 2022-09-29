import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const DataTable = ({ data }) => {
    const calculatePoints = (array) => {
        let points = 0;
        for (let i = 0; i < array.length; i++) {
            const single = array[i] - 50;
            const double = single - 50;
            if (single > 0) {
                points += single + (double > 0 ? double : 0);
            }
        }

        return points;
    }

    const createRows = (data) => {
        let rows = [];
        let total = 0;
        for (const [key, value] of Object.entries(data)) {
            let monthData = {
                name: key,
                points: calculatePoints(value)
            }
            rows.push(monthData);
            total += monthData.points;
        }

        rows.push({
            name: "Total",
            points: total
        });

        return rows;
    }

    const tableRows = createRows(data.transactions);

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 200 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Month</TableCell>
                        <TableCell align="right">Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableRows.map((row) => (
                        <TableRow 
                            key={row.name} 
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DataTable;