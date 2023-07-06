import { Box, Typography, Grid, TextField } from '@mui/material';
import React from 'react';
import styles from "./style.module.css";
import banner from "../../assets/images/thankyou/banner.png"
import ImagesModal from "../CustomModal/ImagesModal"

const ThankYouHome = () => {
  return (
    <Box component="section" className={styles.thankyouMainWrap}>
      <Grid container className='container' >
        <Grid item lg={6} md={6} xs={12} px={4} data-aos="fade-right" data-aos-duration='1300'>
          <Box className={styles.bannerWrap}>
            <img src={banner} alt="banner" />
          </Box>
        </Grid>
        <Grid item lg={6} md={6} xs={12} px={4} data-aos="fade-up" data-aos-duration='1300'>
          <Box className={styles.bannerContent}>
            <Typography variant="h4">
              A sincere and heartfelt thank you for:
            </Typography>
            <Typography variant="h3">
              Building the platform for Aumana’s message
            </Typography>
            <Typography variant="subtitle2">
              I needed help to create a web presence for Aumana and was fortunate to connect with Webcraftive Studios. As a startup, I was given short shrift by many companies in the business of website design and development but thankfully people at this firm were more receptive to my request.
              <br />
              <br />
              Lead by Jason Walterr, the project team assigned for fulfilling my requirements not only created a platform to display images show casing the Natural Wonderlands we have been blessed with. They also created the software which allows users to design and build their own masterpiece in the form of a card or poster with images from the website. Jason has been a trusted advisor and guide for all matters pertaining to technology that makes Aumana’s web presence possible.
              <br />
              <br />
              If you need help creating a web presence, I whole heartedly endorse Webcraftive Studios and encourage you to contact them for those needs and if you are lucky, you might even get a chance for working with Jason.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={12} md={12} xs={12} px={4} data-aos="fade-up" data-aos-duration='1300'>
          <Box className={styles.bannerContent}>
            <Typography variant="h3">
              Taking the Stewardship Pledge
            </Typography>
            <Typography variant="subtitle2" className={styles.inputBoxes}>
              One person can initiate but not perpetuate the changes necessary to safeguard our Natural Wonderlands and prevent them from becoming Natural Wastelands.
              <br />
              <TextField id="number-of-person" required /> number of people in <TextField id="number-of-person" required /> countries have taken the pledge to become better stewards thereby helping Mother Nature for the benefit of mankind.
            </Typography>
            <ImagesModal open={false} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ThankYouHome