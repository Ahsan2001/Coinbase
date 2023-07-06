import React, {useState} from 'react'

import styles from "./styles.module.css"
import {Button, Grid, TextField, Typography} from '@mui/material'
import {Box} from '@mui/system'
import MailIcon from '@mui/icons-material/Mail';
import axios from 'axios';
import { api_base_url } from '../../helper/webservices';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const ChangePassword = () => {


    let { otp } = useParams();


    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${api_base_url}update-password`, {
            otp: otp,
            password: password,
            password_confirmation: confirmPassword
        }).then(res => {
            toast.success("Password Change SuccessFully");
            navigate('/login');
        }).catch(error => {
            Object.values(error.response.data.errors).map((v, k) => (
                toast.error(v[0],'error')
            ));

            
        });
    }

    const SetPasswordValue = (e) => {
        setPassword(e.target.value);
    }


    const SetConfirmPasswordValue = (e) => {
        setConfirmPassword(e.target.value);
    }


    return (
        <Grid container direction="row" justifyContent="center" className={styles.LoginBg}>
            <Grid item lg={6} md={6} xs={12} align="center">
                <Box className={styles.RegisterformHead}>
                    <Typography variant="h1">
                        Change Password 
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box sx={{width: 500, maxWidth: '100%',}} className={styles.parentBox}>
                        <TextField fullWidth  type={"password"}  label="Enter Password" value={password} onChange={ (e) =>  SetPasswordValue(e)}/>
                        <MailIcon fontSize="medium"/>
                    </Box>

                    <Box sx={{width: 500, maxWidth: '100%',}} className={styles.parentBox}>
                        <TextField fullWidth  type={"password"}  label="Enter Confirm Password" value={confirmPassword} onChange={ (e) =>  SetConfirmPasswordValue(e)}/>
                        <MailIcon fontSize="medium"/>
                    </Box>



                    <Box sx={{width: 500, maxWidth: '100%',}}> 
                        <Button variant="contained" className={styles.signUpbtn} type="submit">Save Password</Button>
                    </Box>
                </form>
            </Grid>
        </Grid>
    )
}

export default ChangePassword