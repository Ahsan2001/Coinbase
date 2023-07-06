import React from 'react'
import styles from './style.module.css'
import { Box, Grid, Typography } from '@mui/material'

const AboutTour = () => {
  return (
      <Box component="section" className={styles.aboutParentBox}>
          <Grid container p={5} sx={{ width: '80%', margin: '0 auto' }} >
              <Grid item lg={10} md={12} xs={12} align="center" alignItems="center" className={styles.collageContent} sx={{ margin: '0 auto' }} data-aos="fade-up" data-aos-duration='1300'     >
                  <Typography variant="h1">
                      Interest In Collage Tour
                  </Typography>
                  <Typography variant="subtitle2">
                      AUMANA will champion the case for helping “Mother Nature” by becoming and/or keep on being a good steward. This website with images of natural wonderlands that we have been blessed with is an example. Out of the Billions of planets in our galaxy, these wonderlands can only be observed on our home planet Earth. They will become natural wastelands if we don’t become better stewards and help “Mother Nature”. If everyone on earth becomes a better steward, the weight of our combined actions will have a far reaching impact on reducing global warming, recovering from past
                  </Typography>
                  <Typography variant="subtitle2" pt={2} pb={5} >
                      Environmental abuse and rehabilitating ecosystems to restore environmental balance required for sustaining life on earth. Though I hope AUMANA can do it all by itself, I know that realistically it will require the efforts of many individuals, governments, private and non-government organizations to help “Mother Nature”. Every one of these organizations requires funding for their activities. AUMANA will generate funds through the sale of natural wonderland images and use them to help fund activities of other organizations that share its vision.
                  </Typography>
              </Grid>
          </Grid>
      </Box>
  )
}

export default AboutTour