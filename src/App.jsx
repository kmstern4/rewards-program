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
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleTabChange} data-testid="tabs">
          <Tab label="Customer One" />
          <Tab label="Customer Two" />
          <Tab label="Customer Three" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </>
  );
}

export default App;
