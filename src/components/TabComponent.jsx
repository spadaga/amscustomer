import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabInnerComponent from './TabInnerComponent';
import StaticMessage from './StaticMessage';
import { styled } from '@mui/system';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
// Custom styled Tab component with reduced height
const CustomTab = styled(Tab)({
    textTransform: 'none',
    padding: '6px 12px', // Reduce padding to decrease overall height
    minHeight: '46px', // Reduce minHeight to control the height of the Tab
   
  });
export default function TabComponent() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', padding: "0px", overflow: "auto", }}>
            <Box sx={{ width: '100%', padding: "8px", }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                        sx={{
                            padding: '0px 0px',
                            '& .MuiTabs-indicator': {
                                height: '4px', // Thickness of the underline
                                backgroundColor: 'var(--ced-color-global-brand-3) !important', // Color of the underline
                                borderRadius: '4px', // Optional: round the corners of the underline
                                marginTop:"0"
                            },
                            '& .MuiButtonBase-root': {
                                "padding": "var(--ced-spacing-small)", "fontWeight": "var(--ced-font-weight-bold)", "fontSize": "var(--ced-font-size-xsmall)", "letterSpacing": "0.3px", "lineHeight": "1.143", "color": "var(--ced-color-text) !important", "textAlign": "center", "backgroundColor": "var(--ced-color-background-transparent) !important", "borderRadius": "var(--ced-border-radius-base)",
                                "borderStyle": "solid !important", "borderRadius": "var(--ced-border-radius-base)",
                                '&:hover': {
                                    backgroundColor: "var(--ced-color-background-transparent-hover) !important",

                                },
                                '&:focus': {
                                    "borderWidth": "var(--ced-border-width-large) !important", "borderColor": "var(--ced-color-focus-indicator) !important", "borderStyle": "solid !important", "outlineWidth": "0 !important", "padding": "var(--ced-spacing-small) !important", "borderBottomLeftRadius": "var(--ced-border-radius-base)", "borderBottomRightRadius": "var(--ced-border-radius-base)",
                                    marginTop:"4px",marginBottom:"4px"
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
                        }}

                    >
                        <CustomTab  label="INVENTORY MANAGER" {...a11yProps(0)} sx={{height:"30px"}} />
                        <CustomTab  label="TOOL MANAGER" {...a11yProps(1)} sx={{height:"30px"}}/>

                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <TabInnerComponent />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <StaticMessage message="WIP"></StaticMessage>
                </CustomTabPanel>

            </Box> </Box>
    );
}
