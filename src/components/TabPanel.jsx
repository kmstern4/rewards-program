import { Box, Button, Typography } from "@mui/material";

const TabPanel = ({ children, index, name, value }) => {
    const handleClick = () => {
        console.log("clicked!");
    }

    return (
        <div hidden={value !== index}>
            {value === index && (
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