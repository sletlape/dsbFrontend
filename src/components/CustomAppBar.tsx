import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar as MuiAppBar, Box, Button, Toolbar, Typography } from '@mui/material';

const AppBar: React.FC = () => {
    return (
        <MuiAppBar position="static">
            <Toolbar>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
                        Dynamic Sentence Builder
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button
                            component={Link}
                            to="/"
                            sx={{
                                mx: 2,
                                color: 'white',
                                backgroundColor: 'transparent',
                                '&.active': {
                                    color: 'secondary.main',
                                },
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/build"
                            sx={{
                                mx: 2,
                                color: 'white',
                                backgroundColor: 'transparent',
                                '&.active': {
                                    color: 'secondary.main',
                                },
                            }}
                        >
                            Build
                        </Button>
                    </Box>
                </Box>
            </Toolbar>
        </MuiAppBar>
    );
};

export default AppBar;
