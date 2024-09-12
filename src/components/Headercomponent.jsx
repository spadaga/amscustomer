import React from 'react'
import Title from './Header/Title'
import { AppBar, Box, Toolbar } from '@mui/material'
import ProjectsAutocomplete from './Header/ProjectsAutocomplete'
import Help from './Header/Help'

const Headercomponent = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <Toolbar >
                <Title className="header-title"></Title>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ProjectsAutocomplete ></ProjectsAutocomplete>
                    <div style={{ margin: '0px 24px' }}></div> {/* Spacer */}
                    <Help  sx={{marginLeft:"8px"}}></Help>
                    </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Headercomponent
