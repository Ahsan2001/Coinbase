import React, {useState} from 'react'

// import assets 
import styles from "./style.module.css"
import {Button, CircularProgress, Grid, TextField, Typography} from '@mui/material'
import {Box} from '@mui/system'
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import axios from "axios";
import {api_base_url} from "../../helper/webservices";
import {toast} from "react-toastify";
import {store} from "../../redux/store";
import actions from "../../redux/actions";
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';

const {storeUserInfo} = actions;

const cookies = new Cookies();


const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        axios.post(`${api_base_url}login`, {
            email: email,
            password: password
        }).then(response => {
            setLoading(false);
            store.dispatch(
                storeUserInfo(response.data.data.user, response.data.data.token)
            );
            cookies.set('access_token', response.data.data.token);
            cookies.set('user', JSON.stringify(response.data.data.user));
            toast.success("Successfully login.");
        }).catch(error => {
            setLoading(false);
            Object.values(error.response.data.errors).map((v, k) => (
                toast.error(v[0])
            ));
        });
    }

    return (
        <Grid container direction="row" justifyContent="center" className={styles.LoginBg}>
            <Grid item lg={6} md={6} xs={12} px={2} align="center">

                <Box className={styles.RegisterformHead}>
                    <Typography variant="h1">
                        Login
                    </Typography>
                    <Typography variant="h6">
                        Sign In To Your Account
                    </Typography>
                </Box>

                <form onSubmit={handleSubmit}>
                    <Box sx={{width: 500, maxWidth: '100%',}} className={styles.parentBox}>
                        <TextField fullWidth label="Enter your email address" id="emailAddress"  required={true} value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                        <MailIcon fontSize="medium"/>
                    </Box>
                    <Box sx={{width: 500, maxWidth: '100%',}} className={styles.parentBox}>
                        <TextField fullWidth label="Enter your password" type={"password"} id="password" required={true} value={password} onChange={e => setPassword(e.target.value)}/>
                        <LockIcon fontSize="medium"/>
                        <Box className={styles.forget}> <Link to="/forget-password">  forget password ? </Link>  </Box>
                    </Box>

                    <Box sx={{width: 500, maxWidth: '100%',}}> 
                        {loading ? 
                        <Button  type="submit" variant="contained" className={styles.loading}  >   <CircularProgress color="success" /> </Button> :  <Button  type="submit" variant="contained" className={styles.signUpbtn}  >Sign In</Button>
                        }



                    </Box>
                </form>


            </Grid>
        </Grid>
    )
}

export default LoginComponent