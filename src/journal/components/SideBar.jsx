import { TurnedInNot } from '@mui/icons-material'
import { Divider, Drawer, Toolbar, Typography, Box, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material'
import React from 'react'



export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent' //teporaly
                open={true}
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div' >Ronald Ormea</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map(el => (
                            <ListItem key={el} disablePadding >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid Container>
                                        <ListItemText primary={el} />
                                        <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}

