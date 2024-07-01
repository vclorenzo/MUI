import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react';

const MUITabs = () => {
  const [value, setValue] = useState('1');
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
          <TabList
            aria-label='Tabs example'
            onChange={handleChange}
            textColor='secondary'
            indicatorColor='secondary'
            // centered
            variant='scrollable'
            scrollButtons='auto'
          >
            <Tab
              label='Tab One'
              value={'1'}
              //   icon={<FavoriteIcon />}
              //   iconPosition='start'
            ></Tab>
            <Tab label='Tab Two' value={'2'}></Tab>
            <Tab label='Tab Three' value={'3'}></Tab>
            <Tab label='Tab Four' value={'4'}></Tab>
            <Tab label='Tab Five' value={'5'}></Tab>
            <Tab label='Tab Six' value={'6'}></Tab>
          </TabList>
        </Box>
        <TabPanel value='1'>Panel One</TabPanel>
        <TabPanel value='2'>Panel Two</TabPanel>
        <TabPanel value='3'>Panel Three</TabPanel>
        <TabPanel value='4'>Panel Four</TabPanel>
        <TabPanel value='5'>Panel Five</TabPanel>
        <TabPanel value='6'>Panel Six</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MUITabs;
