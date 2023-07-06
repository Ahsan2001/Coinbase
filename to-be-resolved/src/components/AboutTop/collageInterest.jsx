import React from 'react'

// import assets 
import styles from './style.module.css'
import collageImg from "./../../assets/images/about-1.png"
import { Box, Grid, Typography } from '@mui/material'



const CollageInterest = () => {
  return (
    <React.Fragment>
      <Box className={styles.aboutParentBox}>
        <Grid container  className="container" >
          <Grid item lg={6} md={12} xs={12} py={4} px={4} data-aos="fade-right" data-aos-duration='1400'>
            <img src={collageImg} alt="collage" className="IMG_Fluid" />
          </Grid>
          <Grid item lg={6} md={12} xs={12} py={4} px={4} align="left" className={styles.collageContent}>
            <Typography variant="h1" data-aos="fade-up" data-aos-duration='1300'>
              About Aumana
            </Typography>
            <Typography variant="subtitle2" data-aos="fade-up" data-aos-duration='1400'>
              AUMANA will champion the case for helping “Mother Nature” by becoming and/or keep on being a good steward. This website with images of natural wonderlands that we have been blessed with is an example. Out of the Billions of planets in our galaxy, these wonderlands can only be observed on our home planet Earth. They will become natural wastelands if we don’t become better stewards and help “Mother Nature”. If everyone on earth becomes a better steward, the weight of our combined actions will have a far reaching impact on reducing global warming, recovering from past environmental abuse and rehabilitating ecosystems to restore environmental balance required for sustaining life on earth. Though I hope AUMANA can do it all by itself, I know that realistically it will require the efforts of many individuals, governments, private and non-government organizations to help “Mother Nature”. Every one of these organizations requires funding for their activities. AUMANA will generate funds through the sale of natural wonderland images and use them to help fund activities of other organizations that share its vision.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default CollageInterest