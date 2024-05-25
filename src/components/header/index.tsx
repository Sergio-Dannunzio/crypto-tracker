import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

type HeaderProps = {
    tittle: string,
    description: string,
    element?: React.ReactNode | null;
}
 
export const HeaderComponent: React.FC<HeaderProps> = ({tittle,description,element}) =>{
    return (
        <div>
            <Box sx={{width:"100%", height: "350px"}}>
                <Grid container direction="row" sx={{height: "100%"}}>
                    <Grid item xs={7}>
                        <Grid container direction="column" sx={{height: "100%", width: "450px"}}>
                            <Grid item sx={{width: "100%", paddingTop: "176px"}}>
                                <Typography variant="h3" >{tittle}</Typography>
                            </Grid>
                            <Grid item sx={{ mt: 2}}>
                                <Typography sx={{fontSize: "16px"}}>{description}</Typography>
                            </Grid>
                            {element !== undefined && (<Grid sx={{ mt: 4 }} item>{element}</Grid>)}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
    )
}