import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";
import { useFormik } from "formik";

type LoginType = {
    username: string;
    password: string;
}

const LoginPage: React.FC<{}> = () => {
    const { getSuccess } = useNotification();
    const formik = useFormik<LoginType>({
        initialValues: {
          username: "",
          password: ""
        },
        validationSchema: LoginValidate,
        onSubmit: (values: LoginType) => {
          getSuccess(JSON.stringify(values));
        },
      });
    return (
        <Container maxWidth="sm">
            <Grid 
                container 
                direction="column" 
                justifyContent="center" 
                sx={{ minHeight: "90vh" }}>
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em"}}>
                        <Typography variant="h4" sx={{ mt:1,mb:1}} textAlign="center">Login</Typography>
                        <Box component="form" onSubmit={formik.handleSubmit}>
                            <TextField 
                                name="username" 
                                margin="normal"
                                fullWidth 
                                label="Email" 
                                type="email" 
                                sx={{ mt:2,mb:1.5 }} 
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username}/>
                            <TextField 
                                name="password" 
                                margin="normal" 
                                fullWidth 
                                label="Password" 
                                type="password" 
                                sx={{ mt:2,mb:1.5 }} 
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}/>
                            <Button fullWidth type="submit" sx={{ mt:1.5,mb:1.5 }} variant="contained">Login</Button>
                            <Button fullWidth type="submit" variant="outlined" href="/register">Register</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LoginPage