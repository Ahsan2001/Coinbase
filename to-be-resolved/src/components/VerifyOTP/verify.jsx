import React, {useState} from 'react'

import styles from "./styles.module.css"
import {Button, CircularProgress, Grid, TextField, Typography} from '@mui/material'
import {Box} from '@mui/system'
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
import { api_base_url } from '../../helper/webservices';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Verify = () => {

    const [otp, setOTP] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        axios.post(`${api_base_url}check-otp`, {
            otp: otp,
        }).then(response => {
            setLoading(false);
            toast.success(response.data.message);
            navigate(`/change-password/${otp}`);
        }).catch(error => {
            setLoading(false);
            Object.values(error.response.data.errors).map((v, k) => (
                toast.error(v[0])
            ));
        });
    }

    const SetOpt = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setOTP(e.target.value);
        }
    }



    return (
        <Grid container direction="row" justifyContent="center" className={styles.LoginBg}>
            <Grid item lg={6} md={6} xs={12}  px={2} align="center">
                <Box className={styles.RegisterformHead}>
                    <Typography variant="h1">
                        Verify OTP
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box sx={{width: 500, maxWidth: '100%',}} className={styles.parentBox}>
                        <TextField fullWidth  required={true}  label="Enter OPT Code" value={otp} onChange={ (e) =>  SetOpt(e)}/>
                        <LockIcon fontSize="medium"/>
                    </Box>
                    <Box sx={{width: 500, maxWidth: '100%',}}> 
                    {loading ? <Button  type="submit" variant="contained" className={styles.loading}  >   <CircularProgress color="success" /> </Button> :<Button variant="contained" className={styles.signUpbtn} type="submit">Verify OPT</Button>}
                    </Box>
                </form>
            </Grid>
        </Grid>
    )
}

export default Verify