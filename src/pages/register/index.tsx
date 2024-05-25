import { Box, Button, Container, Grid, Paper, Select, TextField, Typography } from "@mui/material";
import React from "react";
import { useNotification } from "../../context/notification.context";
import { RegisterValidate } from "../../utils/validateForm";
import { useFormik } from "formik";

type RegisterType = {
    username: string;
    email: string;
    password: string;
}

const RegisterPage: React.FC<{}> = () => {
    const { getSuccess } = useNotification();
    const formik = useFormik<RegisterType>({
        initialValues: {
          username: "",
          email: "",
          password: ""
        },
        validationSchema: RegisterValidate,
        onSubmit: (values: RegisterType) => {
            console.log(values)
          getSuccess(JSON.stringify(values));
        },
      });
    return (
        <Container maxWidth="sm">
            <Grid 
                container 
                direction="column" 
                alignItems="center" 
                justifyContent="center" 
                sx={{ minHeight: "90vh" }}>
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em"}}>
                        <Typography variant="h4" sx={{ mt:1,mb:1 }} textAlign="center">Sign up</Typography>
                        <Box component="form" onSubmit={formik.handleSubmit}>
                            <TextField 
                                name="username" 
                                margin="normal"
                                fullWidth 
                                label="Username" 
                                type="username"
                                sx={{ mt:2,mb:1.5 }} 
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.touched.username && formik.errors.username}
                            />
                            <TextField 
                                name="email" 
                                margin="normal"
                                fullWidth 
                                label="Email" 
                                type="email" 
                                sx={{ mt:2,mb:1.5 }} 
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
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
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            <Button fullWidth type="submit" sx={{ mt:1.5,mb:1.5 }} variant="contained">Sign up</Button>
                            <Button fullWidth type="submit" variant="outlined" href="/login">Login</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default RegisterPage