import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import styles from "./style.module.css";
import help1 from '../../assets/images/help-section-1.png'
import help2 from '../../assets/images/help-section-2.png'

const AumanaHelpContent = () => {
  return (
    <Box component="section" className={styles.HelpSection}>
      <Grid container p={3} className='container'>
        <Grid item lg={6} md={6} xs={12} sx={{ pr: { lg: 3 } }} mb={5} align="left" className={styles.innerContent}>
          <Typography variant="h1" data-aos="fade-up" data-aos-duration='1300'>
            HOW AUMANA HELPS
          </Typography>
          <Typography variant="subtitle2" data-aos="fade-up" data-aos-duration='1400'>
            As a global thought leader, AUMANA will utilize a multipronged approach that includes heightening awareness of
            the necessity for a universal mindset of becoming and/or continue being a better steward of Mother Nature. Images
            on this website are a minuscule glimpse of Natural Wonderlands we have been blessed with. Out of the Billions of
            planets in our galaxy, these wonderlands can only be observed on our home planet Earth. Preserving and protecting
            them is our moral and ethical obligation as human beings. If we don’t become better stewards they could easily be
            transformed into natural wastelands.
          </Typography>
          <Typography variant="subtitle2" data-aos="fade-up" data-aos-duration='1400'>
            If everyone on earth becomes a better steward, the weight of our combined actions will have a far reaching impact
            on reducing global warming, recovering from past environmental abuse and rehabilitating ecosystems to restore
            environmental balance required for sustaining life on earth. Though I hope AUMANA can do it all by itself, I know
            that to have a meaningful impact and truly help Mother Nature, Prevention, Recovery, Rehabilitation and Education
            efforts needed will require collaborative and concerted efforts of many individuals, governments, private and nongovernment organizations. Every one of these organizations requires funding for their activities. AUMANA will
            help legitimate endeavors in these areas fund their activities either wholly or in part with funds generated funds
            through the licensing and sale of natural wonderland and NW collage images.
          </Typography>

        </Grid>
        <Grid item lg={6} md={6} xs={12}  sx={{ margin: '20px 0' }}>
          <img src={help1} alt="collage" className="IMG_Fluid" />
        </Grid>
        <Grid item lg={6} md={6} xs={12}  sx={{ margin: '20px 0',pr: { lg: 3 } }} >
          <img src={help2} alt="collage" className="IMG_Fluid" />
        </Grid>
        <Grid item lg={6} md={6} xs={12}  className={styles.innerContent}>
          <Typography variant="h1" data-aos="fade-up" data-aos-duration='1300'>
            STEWARDSHIP
          </Typography>
          <Typography variant="subtitle2" data-aos="fade-up" data-aos-duration='1400'>
            AUMANA will champion the case for helping “Mother Nature” by becoming and/or keep on being a good steward. This website with images of natural wonderlands that we have been blessed with is an example. Out of the Billions of planets in our galaxy, these wonderlands can only be observed on our home planet Earth. They will become natural wastelands if we don’t become better stewards and help “Mother Nature”.
          </Typography>
          <Typography variant="subtitle2" data-aos="fade-up" data-aos-duration='1400'>
            If everyone on earth becomes a better steward, the weight of our combined actions will have a far reaching impact on reducing global warming, recovering from past environmental abuse and rehabilitating ecosystems to restore.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AumanaHelpContent