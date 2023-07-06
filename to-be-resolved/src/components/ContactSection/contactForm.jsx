import React, {useState} from 'react';
import styles from "./style.module.css";
import contactRight from "../../assets/images/contact-right.png";
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import axios from "axios";
import {api_base_url} from "../../helper/webservices";
import {toast} from "react-toastify";











const ContactForm = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${api_base_url}submit-contact-query`, {
            name: name,
            phone: phone,
            email: email,
            message: message
        }).then(response => {
            toast.success(response.data.message);
        }).catch(error => {
            Object.values(error.response.data.errors).map((v, k) => (
                toast.error(v[0])
            ));
        });
    }

    return (
        <Box component="section" className={styles.contactFormMain} id="contact-us">
            <Grid container sx={{ p: { lg: 3 } }} className="container">
                <Grid item lg={10} md={12} xs={12} align="center"  className={styles.contactHead} sx={{ margin: '0 auto' }} data-aos="fade-up" data-aos-duration='1300'>
                    <Typography variant="h1">GET IN TOUCH</Typography>
                    <Typography variant="h5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
                </Grid>
                <Grid container item lg={10} md={12} xs={12} className={styles.contactFormMainWrap} sx={{ margin: '0 auto' }}>
                    <Grid item lg={6} md={12} xs={12} sx={{margin: 'auto' }} align="left" >
                        <form>
                            <Typography variant="h1">Contact us</Typography>
                            <Box className={styles.parentBox} >
                                <TextField fullWidth label="Enter full name" id="FName" value={name} onChange={e => setName(e.target.value)} />
                            </Box>
                            <Box className={styles.parentBox}>
                                <TextField fullWidth label="Enter phone number" id="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
                            </Box>
                            <Box className={styles.parentBox}>
                                <TextField fullWidth label="Enter email address" id="eAddress" value={email} onChange={e => setEmail(e.target.value)}/>
                            </Box>
                            <Box className={styles.parentBox}>
                                <TextField fullWidth label="Write your message" id="msg" value={message} onChange={e => setMessage(e.target.value)}/>
                            </Box>
                            <Box align="center">
                                <Button variant="contained" onClick={(e) => handleSubmit(e)}> SEND</Button>
                            </Box>
                        </form>
                    </Grid>
                    <Grid item lg={6} className={styles.bottom_img} md={12} xs={12} data-aos="fade-up" data-aos-duration='1300'>
                        <img src={contactRight} alt="contact left" className="IMG_Fluid" />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContactForm