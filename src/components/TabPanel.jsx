import { Box, Button, Typography } from "@mui/material";

import { getRewardPoints } from "../services/rewardPoints";
import DataTable from "./DataTable";

const TabPanel = ({ children, id, name, value }) => {
    const handleClick = () => {
        const rewardPoints = getRewardPoints(id);
        console.log(rewardPoints);
    }

    return (
        <div hidden={value !== id}>
            {value === id && (
                <Box sx={{ p: 3, paddingLeft: "4rem" }}>
                    <Typography>
                        Welcome, {name}!
                    </Typography>
                    <Button onClick={handleClick} variant="contained" sx={{ marginTop: "1rem", marginBottom: "1rem" }}>Show me my points</Button>
                    <DataTable />
                </Box>
            )}
        </div>
    )
}

export default TabPanel;