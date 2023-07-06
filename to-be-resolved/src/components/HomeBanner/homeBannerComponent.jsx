import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import styles from "./style.module.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

const HomeBannerComponent = () => {

  return (
      <Box component="section" className={styles.HomeBanner}>
          <Grid container sx={{  width: { md: '80%', xs: '95%' },  margin: '0 auto' }} >
              <Grid item lg={10} md={10} xs={12} align="center" sx={{ margin: '0 auto' }} className={styles.innerContent} >
                  <Typography variant="h1" data-aos="fade-up" data-aos-duration='1000'>
                      AUMANA
                  </Typography>
                  <Typography variant="h5" data-aos="fade-up" data-aos-duration='1300'>
                      AUMANA is an acronym of the Latin term “Auxilium Mater Natura”. In English, it means “Help Mother Nature”
                
                  </Typography>
                  <Typography variant="h1" data-aos="fade-up" data-aos-duration='1500'>
                      NATURAL WONDERLANDS
                  </Typography>
                  <Typography variant="h5" data-aos="fade-up" data-aos-duration='1700'>
                      Showcase splendors of Nature and its creatures that we have been blessed with. They are awe inspiring in any season day and night. You can judge it for yourself by taking a tour of their images here. Unless we become better stewards and help Mother Nature, they will become “Natural Wastelands”.
                  </Typography>
                  <Box data-aos="fade-up" data-aos-duration='1700'>
                      <Link to="/natural-tour" > TOUR</Link>
                  </Box>
              </Grid>
                <Box component="div" className={styles.addBtn}>
                  <Link to="/natural-tour" > <AddCircleIcon /> &nbsp;  Add to favorites </Link>
                </Box>
          </Grid>
      </Box>

  )
}

export default HomeBannerComponent