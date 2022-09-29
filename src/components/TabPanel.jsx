import { Box, Button, Typography } from "@mui/material";

import { getRewardPoints } from "../services/rewardPoints";

const TabPanel = ({ children, id, name, value }) => {
    const handleClick = () => {
        const rewardPoints = getRewardPoints(id);
        console.log(rewardPoints);
    }

    return (
        <div hidden={value !== id}>
            {value === id && (
                <Box sx={{ p: 3 }}>
                    <Typography>
                        Welcome, {name}!
                    </Typography>
                    <Button onClick={handleClick} variant="contained" sx={{ marginTop: "1rem" }}>Show me my points</Button>
                </Box>
            )}
        </div>
    )
}

export default TabPanel;