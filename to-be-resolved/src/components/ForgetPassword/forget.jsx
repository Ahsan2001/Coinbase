import React, {useState} from 'react'

import styles from "./styles.module.css"
import {Button, Grid, TextField,CircularProgress, Typography} from '@mui/material'
import {Box} from '@mui/system'
import MailIcon from '@mui/icons-material/Mail';
import axios from 'axios';
import { api_base_url } from '../../helper/webservices';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Forget = () => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        axios.post(`${api_base_url}send-otp`, {
            email: email,
        }).then(response => {
            setLoading(false);
            toast.success(response.data.message);
            navigate(`/verify-otp/${email}`);
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
                        Forget Password
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box sx={{width: 500, maxWidth: '100%',}} className={styles.parentBox}>
                        <TextField fullWidth  required={true}  label="Enter your email address" id="emailAddress" value={email} onChange={e => setEmail(e.target.value)}/>
                        <MailIcon fontSize="medium"/>
                    </Box>
                    <Box sx={{width: 500, maxWidth: '100%',}}> 
                      {loading ?  <Button variant="contained" className={styles.loading} type="submit"> <CircularProgress color="success" /></Button> :   <Button variant="contained" className={styles.signUpbtn} type="submit">GET OTP</Button>}
                    </Box>
                </form>
            </Grid>
        </Grid>
    )
}

export default Forget