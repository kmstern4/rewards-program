import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DataTable = () => {
    const rows = [
        {
            name: "June",
            points: "400"
        },
        {
            name: "July",
            points: "300"
        }
    ]

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
                    {rows.map((row) => (
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