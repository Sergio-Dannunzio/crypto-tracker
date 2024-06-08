import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";

type HeaderProps = {
    tittle: string,
    description: string,
    element?: React.ReactNode | null;
}
 
export const HeaderComponent: React.FC<HeaderProps> = ({tittle,description,element}) =>{
    return (
        <Container disableGutters maxWidth={false} sx={(theme) => ({
                width:"90%",
                margin: "0",
                [theme.breakpoints.up("sm")]:{
                width:"40%",
            }})}>
            <Box>
                <Grid container direction="row" sx={{height: "100%"}}>
                    <Grid item >
                        <Grid container direction="column" sx={{height: "100%"}}>
                            <Grid item >
                                <Typography variant="h3" sx={(theme) => ({
                                                fontSize: "28px",
                                                textAlign: "center",
                                                [theme.breakpoints.up("sm")]:{
                                                fontSize: "32px",
                                            }})}>
                                            {tittle}
                                </Typography>
                            </Grid>
                            <Grid item sx={{ mt: 2}}>
                                <Typography sx={(theme) => ({
                                                textAlign: "center",
                                                fontSize: "14px",
                                                [theme.breakpoints.up("sm")]:{
                                                fontSize: "16px",
                                            }})}>
                                            {description}
                                </Typography>
                            </Grid>
                            {element !== undefined && (<Grid sx={{ mt: 4 }} item>{element}</Grid>)}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </Container>
    )
}