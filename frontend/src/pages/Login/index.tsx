import { useState } from "react";
import { Container, Grid, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


import Layout from "../../layout"
import { PageTitle } from "../../utils/index"
import style from "./style.module.css"
import loginSchema from "../../schemas/loginSchema";
import { LoginApi } from "../../api/internal.jsx"
import { setUser } from "../../redux/userSlice.js"

interface LoginFormValues {
    username: string;
    password: string;
}

const Login: React.FC = () => {

    const { values, touched, handleChange, handleBlur, errors } = useFormik<LoginFormValues>({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    })


    const [showError, setShowError] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate ();

    const handleLogin = async () => {
        const data = {
            username: values.username,
            password: values.password
        }

        const response = await LoginApi(data);

        console.log(response)

        // if (response.status === 200) {
        //     const user = {
        //         _id: response.data.user._id,
        //         username: response.data.user.username,
        //         email: response.data.user.email,
        //         auth: response.data.user.auth,

        //     }
        //     dispatch(setUser(user));
        //     navigate('/')
        // } else if (response.status === 'ERR_BAD_REQUEST') {
        //     setShowError(response.response.data.errorMessage)
        // }

    }


    return (
        <Layout>
            <section className={style.auth__login}>
                <h4>Welcome Back :) </h4>
                <PageTitle title="Login Account" />
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item lg={4} md={6} xs={12} sx={{ mx: 'auto' }}>
                            <div className={style.input__boxess}>
                                <label htmlFor="username">Username</label>
                                <input
                                    type='text'
                                    value={values.username}
                                    name="username"
                                    id="username"
                                    onBlur={handleBlur}
                                    placeholder="Enter username"
                                    onChange={handleChange}
                                />
                                {errors.username && touched.username ? <p className={style.error}>{errors.username}</p> : undefined}
                            </div>

                            <div className={style.input__boxess}>
                                <label htmlFor="password">Password</label>
                                <input
                                    type='text'
                                    id='password'
                                    value={values.password}
                                    name="password"
                                    onBlur={handleBlur}
                                    placeholder="Enter password"
                                    onChange={handleChange}
                                />
                                {errors.password && touched.password ? <p className={style.error}>{errors.password}</p> : undefined}
                            </div>


                            <Button variant="outlined" onClick={handleLogin}>Login Account</Button>
                            <div className={style.register__line}>Dont have an account <Link to="/signup"> Register Now </Link>   </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </Layout>
    )
}

export default Login