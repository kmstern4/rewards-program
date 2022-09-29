import { useState } from 'react';
import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import TabPanel from './components/TabPanel';

const App = () => {
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <>
      <Container>
        <Typography variant="h4" mt={2} fontWeight={500} textAlign={'center'}>Customer Rewards Program</Typography>
      </Container>
      <Box sx={{ borderBottom: 1, borderColor: '#404040' }}>
        <Tabs 
          value={value} 
          onChange={handleTabChange} 
          data-testid="tabs" 
          sx={{ '& .MuiButtonBase-root': {
            color: '#b3b3b3'
            }
          }}
        >
          <Tab label="Customer One" sx={{ marginLeft: "4rem" }} />
          <Tab label="Customer Two" />
          <Tab label="Customer Three" />
        </Tabs>
      </Box>
      <TabPanel value={value} id={0} name="Helena Riggs" />
      <TabPanel value={value} id={1} name="Mark Scout" />
      <TabPanel value={value} id={2} name="Burt Goodman" />
    </>
  );
}

export default App;
