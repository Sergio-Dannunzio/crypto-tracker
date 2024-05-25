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
            <Box sx={{width:"100%", height: "350px", backgroundColor: "#0C1418"}}>
                        <Grid container sx={{height: "100%", width: "100%", display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
                            <Grid item sx={{ paddingTop: "46px", paddingLeft: "106px"}}>
                                <Typography variant="h5" >{tittle}</Typography>
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
                                <Grid sx={{marginTop: "80px", marginLeft: "86px", display: "flex", flexDirection: "column"}}>
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
                                <Grid sx={{marginTop: "80px", marginLeft: "86px", display: "flex", flexDirection: "column"}}>
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
                                <Grid sx={{marginTop: "80px", marginLeft: "86px", display: "flex", flexDirection: "column"}}>
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
                            <Grid sx={{marginTop: "46px", display: "flex", paddingRight: "106px"}}>
                                <Link href="https://www.linkedin.com/in/sergio-dannunzio/" target="_blank" underline="none" sx={{height: "0", marginLeft: "10px"}}>
                                <LinkedInIcon sx={{fontSize: "42px"}}></LinkedInIcon>
                                </Link>
                                <Link href="https://github.com/Sergio-Dannunzio" target="_blank" underline="none" sx={{height: "0", marginLeft: "10px"}}>
                                <GitHubIcon sx={{fontSize: "42px"}}></GitHubIcon>
                                </Link>
                                <Link href="mailto:sergiodannunzio@hotmail.com" target="_blank" underline="none" sx={{height: "0", marginLeft: "10px"}}>
                                <EmailOutlinedIcon sx={{fontSize: "42px"}}></EmailOutlinedIcon>
                                </Link>
                            </Grid>
                        </Grid>
            </Box>
        </div>
    )
}