import { Box, Typography, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from "./style.module.css"
import stewardship1 from "../../assets/images/stewardship-1.png"
import ImagesModal from '../CustomModal/ImagesModal';
import { useSelector } from 'react-redux';



const StewardShipContent = () => {

    const { user  } = useSelector(s=>s)

    const [username , setUsername] = useState(user?.name);

    return (
        <React.Fragment>
            <Box component="section" className={styles.thankyouMainWrap}>
                <Grid container className='container' >

                    <Grid item lg={6} md={6} xs={12} px={4} data-aos="fade-right" data-aos-duration='1300'>
                        <Box className={styles.bannerWrap}>
                            <img src={stewardship1} alt="banner" />
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12} px={4} data-aos="fade-up" data-aos-duration='1300'>
                        <Box className={styles.bannerContent}>
                            <Typography variant="h3">
                                Stewardship Pledge
                            </Typography>
                            <Typography variant="subtitle2">
                                Any registered user of AUMANA website can take the Stewardship pledge. It can be made only once.
                                The person taking this pledge will be deemed “Mater Natura Adjutor”.
                                <br />
                                <br />
                                In English it means “Mother Nature’s Helper”. On taking this pledge, that person will be allowed to
                                download a NW Collage card image with that designation. This free download is available once and only
                                once upon taking this pledge.
                            </Typography>
                            <Typography variant="h3">
                                Categories
                            </Typography>
                            <Typography variant="subtitle2">
                                Every person in the world falls in one of these three categories of stewardship.
                            </Typography>
                            <ol>
                                <li>Lacking stewardship 
                                    <span>These individuals make and leave the world worse than what they found or inherited.</span>
                                </li>
                                <li>Good Stewards
                                    <span>These individuals make and leave the world no better or worse than what they found or inherited.</span>
                                </li>
                                <li> Better Stewards
                                    <span>These individuals make and leave the world better than what they found or inherited.</span>
                                </li>
                            </ol>
                        </Box>
                    </Grid>

                    <Grid item lg={12} md={12} xs={12} px={4} mt={4}>
                        <Box className={styles.bannerContent}>
                            <Typography variant="h3">
                                The Pledge
                            </Typography>
                            <Typography variant="subtitle2" className={styles.inputBoxes}>
                                I 
                                <TextField value={username} onChange={e => setUsername(e.target.value)}  placeholder='Enter your name' required sx={{margin: "5px"}} />
                                promise to help Mother Nature by becoming and always continue
                                to be a better steward. I further promise to influence others become better stewards with my words,
                                deeds and actions
                            </Typography>
                            <ImagesModal open="false" />
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default StewardShipContent
