import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabInnerComponent from './TabInnerComponent';
import StaticMessage from './StaticMessage';
import { styled } from '@mui/system';

// Custom Tab styles
const CustomTab = styled(Tab)({
  textTransform: 'none',
  padding: '6px 12px',
  minHeight: '46px',
  textTransform:"uppercase"
});

// Reusable styles for the Tabs component
const tabsStyles = {
  padding: '0px 0px',
  '& .MuiTabs-indicator': {
    height: '4px',
    backgroundColor: 'var(--ced-color-global-brand-3) !important',
    borderRadius: '4px',
  },
  '& .MuiButtonBase-root': {
    padding: 'var(--ced-spacing-small)',
    fontWeight: 'var(--ced-font-weight-bold)',
    fontSize: 'var(--ced-font-size-xsmall)',
    letterSpacing: '0.3px',
    lineHeight: '1.143',
    color: 'var(--ced-color-text) !important',
    backgroundColor: 'var(--ced-color-background-transparent) !important',
    borderRadius: 'var(--ced-border-radius-base)',
    borderStyle: 'solid !important',
    '&:hover': {
      backgroundColor: 'var(--ced-color-background-transparent-hover) !important',
    },
    '&:focus': {
      borderWidth: 'var(--ced-border-width-large) !important',
      borderColor: 'var(--ced-color-focus-indicator) !important',
      borderStyle: 'solid !important',
      outlineWidth: '0 !important',
      marginTop: '4px',
      marginBottom: '4px',
    },
  },
  '& .Mui-selected': {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '-4px',
      height: '4px',
    },
  },
};

// Accessible props for the tabs
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// Custom Tab Panel Component
function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1, pt: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function TabComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', padding: '0px', overflow: 'auto' }}>
      <Box sx={{ width: '100%', padding: '8px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={tabsStyles}
          >
            <CustomTab label="INVENTORY MANAGER" {...a11yProps(0)} sx={{ height: '30px',textTransform:"uppercase" }} />
            <CustomTab label="TOOL MANAGER" {...a11yProps(1)} sx={{ height: '30px' ,textTransform:"uppercase"}} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <TabInnerComponent />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <StaticMessage message="WIP" />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
