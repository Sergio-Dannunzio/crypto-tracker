import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";

type HeaderProps = {
    tittle: string,
    element?: React.ReactNode | null;
}
 
export const FooterComponent: React.FC<HeaderProps> = ({tittle,element}) =>{
    return (
        <div>
            <Box sx={{width:"100%", backgroundColor: "#0C1418"}}>
                        <Grid container sx={(theme) => ({ width: "100%", display: "flex", flexDirection: "column", justifyContent:"center", alignContent: "center", paddingBottom: "32px",
                        [theme.breakpoints.up("sm")]:{
                            flexDirection: "row", justifyContent:"space-around"
                        }})}>
                            <Grid item sx={{ paddingTop: "46px"}}>
                                <Typography variant="h5" sx={{textAlign: "center"}}>{tittle}</Typography>
                            </Grid>
                            <Grid sx={{ display: "flex"}}>
                                <Grid sx={{marginTop: "80px", display: "flex", flexDirection: "column"}}>
                                    <Typography variant="h5" >Features</Typography>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                </Grid>
                                <Grid sx={(theme) => ({
                                            marginTop: "80px", display: "flex", flexDirection: "column",marginLeft: "20px",
                                        [theme.breakpoints.up("lg")]:{
                                            marginLeft: "86px",
                                        }})}>
                                    <Typography variant="h5" >Prices</Typography>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                </Grid>
                                <Grid sx={(theme) => ({
                                        display: "none",
                                        [theme.breakpoints.up("lg")]:{
                                            marginTop: "80px", marginLeft: "86px", display: "flex", flexDirection: "column"
                                        }})}>
                                    <Typography variant="h5" >Learn</Typography>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                </Grid>
                                <Grid sx={(theme) => ({
                                        display: "none",
                                        [theme.breakpoints.up("lg")]:{
                                            marginTop: "80px", marginLeft: "86px", display: "flex", flexDirection: "column"
                                        }})}>
                                    <Typography variant="h5" >Company</Typography>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                    <Link href="#" underline="none" sx={{marginTop: "16px"}}>
                                    {'link'}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid sx={{marginTop: "46px", display: "flex", justifyContent: "center"}}>
                                <Link href="https://www.linkedin.com/in/sergio-dannunzio/" target="_blank" underline="none" sx={{height: "0", marginLeft: "5px", marginRight: "5px"}}>
                                <LinkedInIcon sx={(theme) => ({
                                        fontSize: "36px",
                                        [theme.breakpoints.up("sm")]:{
                                            fontSize: "42px"
                                        }})}></LinkedInIcon>
                                </Link>
                                <Link href="https://github.com/Sergio-Dannunzio" target="_blank" underline="none" sx={{height: "0", marginLeft: "5px", marginRight: "5px"}}>
                                <GitHubIcon sx={(theme) => ({
                                        fontSize: "36px",
                                        [theme.breakpoints.up("sm")]:{
                                            fontSize: "42px"
                                        }})}></GitHubIcon>
                                </Link>
                                <Link href="mailto:sergiodannunzio@hotmail.com" target="_blank" underline="none" sx={{height: "0", marginLeft: "5px", marginRight: "5px"}}>
                                <EmailOutlinedIcon sx={(theme) => ({
                                        fontSize: "36px",
                                        [theme.breakpoints.up("sm")]:{
                                            fontSize: "42px"
                                        }})}></EmailOutlinedIcon>
                                </Link>
                            </Grid>
                        </Grid>
            </Box>
        </div>
    )
}