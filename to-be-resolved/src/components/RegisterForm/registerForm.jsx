import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
// import assets 
import styles from "./style.module.css"
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import { api_base_url } from "../../helper/webservices";
import {toast} from "react-toastify";


const RegisterForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        axios.post(`${api_base_url}register`, {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword,
        }).then(response => {
            setLoading(false);
            toast.success(response.data.message);
            navigate('/login');
        }).catch(error => {
            setLoading(false);
            Object.values(error.response.data.errors).map((v, k) => (
                toast.error(v[0])
            ));
        });
    }

  return (
      <Grid component="section" container direction="row" justifyContent="center" className={styles.registerBg} >
          <Grid item lg={6} md={6} xs={12} px={2} align="center">
            <Box className={styles.RegisterformHead}>
                  <Typography variant="h1">
                      Register
                  </Typography>
                  <Typography variant="h6">
                      Create your new account
                  </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <Box sx={{ width: 500, maxWidth: '100%', }} className={styles.parentBox} >
                    <TextField fullWidth label="Enter your name"  required={true} value={name} onChange={e => setName(e.target.value)} />
                    <MailIcon fontSize="medium" />
                </Box>
              <Box sx={{ width: 500, maxWidth: '100%', }} className={styles.parentBox} >
                  <TextField fullWidth label="Enter your email address" id="emailAddress"  required={true} value={email} onChange={e => setEmail(e.target.value)}/>
                  <MailIcon fontSize="medium" />
              </Box>
              <Box sx={{ width: 500, maxWidth: '100%', }} className={styles.parentBox}>
                  <TextField fullWidth label="Enter your password" id="password" type={"password"}  required={true} value={password} onChange={e => setPassword(e.target.value)}/>
                  <LockIcon fontSize="medium" />
              </Box>
              <Box sx={{ width: 500, maxWidth: '100%', }} className={styles.parentBox}>
                  <TextField fullWidth label="Enter your confirm password" id="cpassword" type={"password"}  required={true}  value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                  <LockIcon fontSize="medium" />
              </Box>
              <Box sx={{ width: 500, maxWidth: '100%', }} >
                 {loading ? <Button  type="submit" variant="contained" className={styles.loading}  >   <CircularProgress color="success" /> </Button> :  <Button  type="submit" variant="contained" className={styles.signUpbtn}  >Sign up</Button>}
             </Box>
            </form>
          </Grid>
      </Grid>
  )
}

export default RegisterForm