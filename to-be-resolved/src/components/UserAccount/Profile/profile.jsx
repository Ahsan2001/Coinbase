import {Box, Grid} from '@mui/material';
import React, {useState} from 'react'
import styles from "./style.module.css";
import {Input} from '@mui/material'
import {useSelector} from "react-redux";
import axios from "axios";
import {api_base_url} from "../../../helper/webservices";
import {store} from "../../../redux/store";
import {toast} from "react-toastify";
import actions from "../../../redux/actions";
import Cookies from "universal-cookie";

const {storeUserInfo} = actions;

const cookies = new Cookies();

const Profile = () => {
    const { token, user } = useSelector(s => s);
    const [name, setName] = useState(user?.name);
    const [address, setAddress] = useState(user?.address);
    const [address2, setAddress2] = useState(user?.address_2);
    const [country, setCountry] = useState(user?.country);
    const [city, setCity] = useState(user?.city);
    const [state, setStateVal] = useState(user?.state);
    const [zipCode, setZipCode] = useState(user?.zip_code);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${api_base_url}update-user-info`, {
            name: name,
            address: address,
            address_2: address2,
            country: country,
            city: city,
            state: state,
            zip_code: zipCode,
        },{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            setName("");
            setAddress("");
            setAddress2("");
            setCountry("");
            setCity("");
            setStateVal("");
            setZipCode("");
            store.dispatch(storeUserInfo(response.data.data, token));
            cookies.set('user', JSON.stringify(response.data.data));
            toast.success("Successfully updated.");
        }).catch(error => {
            Object.values(error.response.data.errors).map((v, k) => (
                toast.error(v[0])
            ));
        });
    }

    return (
        <Box className="my-profile-bodyy"  sx={{ px: { lg: 4 } }}>
            <Box className={styles.my_profile_heading}>
                <h2>My Profile</h2>
            </Box>
            <Box className={styles.my_profile_page_one}>
                <Grid container>

                    <Grid item lg={5} md={12} xs={12} pr={3}>
                        <Box className={styles.inputInner}>
                            <h5>User Name</h5>
                            <Input fullWidth value={name}   placeholder="Enter username " onChange={e => setName(e.target.value)}/>
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={12} xs={12} pr={3}>
                        <Box className={styles.inputInner}>
                            <h5>Email Address</h5>
                            <Input fullWidth value={user?.email} disabled/>
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={12} xs={12} pr={3}>
                        <Box className={styles.inputInner}>
                            <h5>Address</h5>
                            <Input fullWidth value={address}  placeholder="Enter address " onChange={e => setAddress(e.target.value)}/>
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={12} xs={12} pr={3}>
                        <Box className={styles.inputInner}>
                            <h5>Address 2</h5>
                            <Input fullWidth value={address2}  placeholder="Enter secondary address (Optional) " onChange={e => setAddress2(e.target.value)}/>
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={12} xs={12} pr={3}>
                        <Box className={styles.inputInner}>
                            <h5>Country</h5>
                            <Input fullWidth value={country}  placeholder="Enter country "    onChange={e => setCountry(e.target.value)}/>
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={12} xs={12} pr={3}>
                        <Box className={styles.inputInner}>
                            <h5>City</h5>
                            <Input fullWidth value={city} placeholder="Enter city "   onChange={e => setCity(e.target.value)}/>
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={12} xs={12} pr={3}>
                        <Box className={styles.inputInner}>
                            <h5>State / Province /Region</h5>
                            <Input fullWidth value={state }  placeholder="Enter state "  onChange={e => setStateVal(e.target.value)}/>
                        </Box>
                    </Grid>
                    <Grid item lg={5} md={12} xs={12} pr={3}>
                        <Box className={styles.inputInner}>
                            <h5>Zip / Postal Code</h5>
                            <Input fullWidth value={zipCode}  placeholder="Enter zip code" onChange={e => setZipCode(e.target.value)}/>
                        </Box>
                    </Grid>
                    <Grid item lg={12} md={12} xs={12}>
                        <Box className={styles.inputInner}>
                            <button onClick={(e) => handleSubmit(e)}>Save Changes</button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Profile;