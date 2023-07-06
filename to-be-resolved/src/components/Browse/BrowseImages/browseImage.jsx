import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styles from "./style.module.css"
import nature1 from "../../../assets/images/Browse/natureWonder1.png"
import nature3 from "../../../assets/images/Browse/interest.png"
import nature2 from "../../../assets/images/Browse/tour.png"
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";


const BrowseImage = () => {
    const { user } = useSelector(s => s);

  return (
    <Box component="section" className={styles.BrowseImagesSection}>
      <Grid container className='container' >
        <Grid item lg={12} xs={12} align="center" data-aos="zoom-out-down" data-aos-duration='1300'>
          <Typography variant="h1">Browse Images </Typography>
        </Grid>


        <Grid item lg={4} md={6} xs={12} p={3} align="center" data-aos="fade-up" data-aos-duration='1300'>
          <Box component="div" className={styles.bgBox} >
              <img src={nature1} className="IMG_Fluid" alt="Browse" />
              <Typography variant="h3">Natural Wonderlands </Typography>
              <Link to="/natural-tour" variant="text">View Images</Link>
          </Box>
        </Grid>

        <Grid item lg={4} md={6} xs={12} p={3} align="center" data-aos="fade-up" data-aos-duration='1600'>
           <Box component="div" className={styles.bgBox} >
              <img src={nature2} className="IMG_Fluid" alt="Browse" />
              <Typography variant="h3">NW Collage Tour </Typography>
              <Link to="/nw-collage-tour">View Images</Link>
          </Box>
        </Grid>

          {
              user ? <Grid item lg={4} md={6} xs={12} p={3} align="center" data-aos="fade-up" data-aos-duration='1900'>
                  <Box component="div" className={styles.bgBox} >
                      <img src={nature3} className="IMG_Fluid" alt="Browse" />
                      <Typography variant="h3">Images of Interest</Typography>
                      <Link to="/interest-images-tour">View Images</Link>
                  </Box>
              </Grid>:""
          }
      </Grid>
    </Box>
  )
}

export default BrowseImage