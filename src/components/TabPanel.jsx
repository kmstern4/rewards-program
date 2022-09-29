import { Box, Typography } from "@mui/material";

const TabPanel = ({ children, index, value }) => {
    return (
        <div hidden={value !== index}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

export default TabPanel;