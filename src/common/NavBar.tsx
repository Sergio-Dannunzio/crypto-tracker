import { AppBar, Badge, Box, Button, ClickAwayListener, Container, Grid, Grow, IconButton, ListItem, ListItemButton, ListItemText, MenuItem, MenuList, Paper, Popper, Stack, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CottageIcon from '@mui/icons-material/Cottage';
import MenuIcon from '@mui/icons-material/Menu';
import './styleNavBar.css';

export const NavBar: React.FC<{}> = () =>{
    const navigate = useNavigate();
      const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

    return (
        <Box>
            <AppBar position="sticky">
                <Toolbar>
                    <Container disableGutters>
                        <Grid container direction="row" alignItems="center" sx={(theme) => ({
                            
                            [theme.breakpoints.up("sm")]:{
                                justifyContent: "space-between",
                                height: "100%"
                                }})}>
                                <Stack direction="row" spacing={2} sx={(theme) => ({
                            
                            [theme.breakpoints.up("sm")]:{
                                display:"none"
                                }})}>
                                <div>
                                <IconButton
                                ref={anchorRef}
                                  id="composition-button"
                                  aria-controls={open ? 'composition-menu' : undefined}
                                  aria-expanded={open ? 'true' : undefined}
                                  aria-haspopup="true"
                                  onClick={handleToggle}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={(theme) => ({
                                    margin: "0",
                                    padding: "0",
                                    [theme.breakpoints.up("sm")]:{
                                    display: "none",
                                }})}
                            >
                                <MenuIcon />
                            </IconButton>
                                <Popper
                                  open={open}
                                  anchorEl={anchorRef.current}
                                  role={undefined}
                                  placement="bottom-start"
                                  transition
                                  disablePortal
                                  sx={{paddingTop: "15px"}}
                                >
                                  {({ TransitionProps, placement }) => (
                                    <Grow
                                      {...TransitionProps}
                                      style={{
                                        transformOrigin:
                                          placement === 'bottom-start' ? 'left top' : 'left bottom',
                                      }}
                                    >
                                      <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                          <MenuList
                                            autoFocusItem={open}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                          >
                                            <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
                                            <MenuItem onClick={() => navigate("login")} >Login</MenuItem>
                                            <MenuItem onClick={() => navigate("register")}>Register</MenuItem>
                                          </MenuList>
                                        </ClickAwayListener>
                                      </Paper>
                                    </Grow>
                                  )}
                                </Popper>
                                </div>
                                </Stack>
                            <Grid item sx={(theme) => ({
                                    
                                [theme.breakpoints.up("sm")]:{
                                    display: "flex",
                                    mt: ".5em"
                                }})}>
                                <a href="/crypto-tracker.github.io" >
                                    <CottageIcon color="primary" fontSize="large" sx={(theme) => ({
                                    display: "none",
                                [theme.breakpoints.up("sm")]:{
                                    display: "flex",
                                }})}></CottageIcon>
                                </a>
                            <Grid item sx={(theme) => ({
                                mt: "0",
                            [theme.breakpoints.up("sm")]:{
                                    mt: "-.4em"
                                }})}>
                            <ListItem key={"Cryptos"} disablePadding>
                                <ListItemButton component={Link} to="/coins" sx={{ textAlign: 'center' }}>
                                <ListItemText primary={"Cryptos"} />
                                </ListItemButton>
                            </ListItem>
                            </Grid>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={1.5} sx={(theme) => ({
                                    display: "none",
                                [theme.breakpoints.up("sm")]:{
                                    display: "flex",
                                    marginRight: "24px"
                                }})}>
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