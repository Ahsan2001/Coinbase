import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import styles from './style.module.css'
import { Link } from 'react-router-dom'
import Brain1 from "../../../assets/images/brainstorm.png"
import ProjectManagement from "../../../assets/images/project-management.png"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const BrowseNaturalTours = () => {
  return (
    <Box className={styles.browseMainWrap}>
      <Grid container p={2} sx={{ width: '80%', margin: '0 auto' }}>
        <Grid item lg={12} xs={12} >
          <Typography variant="h1"> Natural Wonderlands Tours </Typography>
          <Typography variant="h5" align="center"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's
            <br />
            standard dummy text ever since the 1500s, when an unknown printer took </Typography>

          <Grid container sx={{ width: '90%', margin: '0 auto' }}>
            <Grid item lg={6} md={8} xs={12} p={3} align="center">
              <Box component="div" className={styles.innerComponent} >
                <Box component="div" className={styles.InnerImg} >
                  <img src={Brain1} alt="BrainStorming" />
                </Box>
                <Box component="div" className={styles.InnerContent}>
                  <Typography variant="h4"> Self Guided </Typography>
                  <Typography variant="subtitle1"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  </Typography>
                  <Link to="/natural-tour"> Continue  <KeyboardArrowRightIcon /> </Link>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={6} md={6} xs={12} p={3} align="center">
              <Box component="div" className={styles.innerComponent} >
                <Box component="div" className={styles.InnerImg} >
                  <img src={ProjectManagement} alt="BrainStorming" />
                </Box>
                <Box component="div" className={styles.InnerContent}>
                  <Typography variant="h4"> System Guided </Typography>
                  <Typography variant="subtitle1"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  </Typography>
                  <Link to=""> Continue   <KeyboardArrowRightIcon /> </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BrowseNaturalTours