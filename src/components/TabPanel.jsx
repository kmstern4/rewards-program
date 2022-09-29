import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

import { getRewardPoints } from "../services/rewardPoints";
import DataTable from "./DataTable";

const TabPanel = ({ children, id, name, value }) => {
    const [data, setData] = useState({});
    const [showDataTable, setShowDataTable] = useState(false);
    
    const handleClick = (id) => {
        const rewardPoints = getRewardPoints(id);
        console.log(rewardPoints);
        setData(rewardPoints);
        setShowDataTable(true);
    }

    return (
        <div hidden={value !== id}>
            {value === id && (
                <Box sx={{ p: 3, paddingLeft: "4rem" }}>
                    <Typography>
                        Welcome, {name}!
                    </Typography>
                    <Button onClick={() => handleClick(id)} variant="contained" sx={{ marginTop: "1rem", marginBottom: "1.5rem" }}>Show me my points</Button>
                    {showDataTable &&
                        <DataTable data={data}/>
                    }
                </Box>
            )}
        </div>
    )
}

export default TabPanel;