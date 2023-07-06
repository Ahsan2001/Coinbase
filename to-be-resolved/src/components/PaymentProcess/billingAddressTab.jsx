import React, { useState } from 'react';
import styles from "./style.module.css";
import { Box, Button, Grid, Input } from '@mui/material'
import { useSelector } from "react-redux";
import axios from 'axios';
import { api_base_url } from '../../helper/webservices';
import { toast } from 'react-toastify';


const BillingAddressTab = ({ setTabIndex, tabIndex }) => {

    const { user, token } = useSelector(s => s);
    const [address, setAddress] = useState(user?.address);
    const [address2, setAddress2] = useState(user?.address_2);
    const [country, setCountry] = useState(user?.country);
    const [city, setCity] = useState(user?.city);
    const [state, setStateVal] = useState(user?.state);
    const [zipCode, setZipCode] = useState(user?.zip_code);


    const UserProfileUpdated = (e) => {
        e.preventDefault();
        axios.post(`${api_base_url}update-user-info`,
            {
                user: user,
                address: address,
                address_2: address2,
                country: country,
                city: city,
                state: state,
                zip_code: zipCode
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((res) => {
            setTabIndex(tabIndex + 1);
        })
            .catch(error => {
                Object.values(error.response.data.errors).map((v, k) => (
                    toast.error(v[0])
                ));
            });

    }



    return (
        <>
            <form onSubmit={ (e) => UserProfileUpdated(e)}>
                <Grid container>
                    <Grid item lg={6} md={12} xs={12} p={3}>
                        <Box className={styles.inputInner}>
                            <Input fullWidth value={address} required={true} placeholder="Enter address" onChange={e => setAddress(e.target.value)} />
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={12} xs={12} p={3}>
                        <Box className={styles.inputInner}>
                            <Input fullWidth value={address2} placeholder="Secondary address (optional)" onChange={e => setAddress2(e.target.value)} />
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={12} xs={12} p={3}>
                        <Box className={styles.inputInner}>
                            <Input fullWidth value={country} required={true} placeholder="Enter country" onChange={e => setCountry(e.target.value)} />
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={12} xs={12} p={3}>
                        <Box className={styles.inputInner}>
                            <Input fullWidth value={city} required={true} placeholder="Enter city" onChange={e => setCity(e.target.value)} />
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={12} xs={12} p={3}>
                        <Box className={styles.inputInner}>
                            <Input fullWidth value={state} required={true} placeholder="Enter state" onChange={e => setStateVal(e.target.value)} />
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={12} xs={12} p={3}>
                        <Box className={styles.inputInner}>
                            <Input fullWidth value={zipCode} required={true} placeholder="Enter zip code" onChange={e => setZipCode(e.target.value)} />
                        </Box>
                    </Grid>
                    <Grid item lg={12} md={12} xs={12} >
                        <Box className={styles.btnsMainWrap_2}>
                            <Button variant="text" type="submit" >Next</Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>

        </>
    )
}

export default BillingAddressTab