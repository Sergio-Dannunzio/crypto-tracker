import { AppBar, Badge, Box, Button, Container, Grid, IconButton, ListItem, ListItemButton, ListItemText, Stack, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CottageIcon from '@mui/icons-material/Cottage';

export const NavBar: React.FC<{}> = () =>{
    const navigate = useNavigate();

    return (
        <Box>
            <AppBar position="sticky">
                <Toolbar>
                    <Container>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item sx={{mt: ".5em", display: "flex"}}>
                                <a href="/">
                                    <CottageIcon color="primary" fontSize="large"></CottageIcon>
                                </a>
                            <Grid item sx={{mt: "-.4em"}}>
                            <ListItem key={"Cryptos"} disablePadding>
                                <ListItemButton component={Link} to="/coins" sx={{ textAlign: 'center' }}>
                                <ListItemText primary={"Cryptos"} />
                                </ListItemButton>
                            </ListItem>
                            </Grid>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={1.5}>
                                    <Button variant="contained" onClick={() => navigate("login")}>Login</Button>
                                    <Button variant="outlined" onClick={() => navigate("register")}>Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}