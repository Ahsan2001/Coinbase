import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import styles from "./style.module.css";
import aboutLeft from '../../assets/images/whatWeNeed.png';
import BlockAnimation from '../../utils/BlockAnimation';

const WhatIsNature = () => {
  return (
    <Box className={styles.innerMainWrap}>
      <Grid container p={{xs:2 , md: 12}}  spacing={4}>
        <Grid item lg={10} md={10} xs={12} align="center" sx={{ margin: '0 auto' }}>
          <Box component="div" className={styles.innerHead} data-aos="fade-up" data-aos-duration='1300'>
            <Typography variant="h1"> WHAT IS NATURE?</Typography>
            <Typography variant="h5">
              
            <BlockAnimation type="blocks" text="
              Today there are many views about Nature. I favor the views held by Three ancient civilizations, Greek, Indian and Chinese who seemed to
               agree on the Five elements that constitute Nature I have added Creatures because they represent another essential aspect of Nature." />
              <br />
              <br />
              <strong>GREEK:</strong>  - Aether, Air, Water, Fire, Earth
              <br />
              <strong>INDIAN:</strong> - Aakash, Vayu, Jal, Agni, Prithvi
              <br />
              <strong>CHINESE:</strong>  - Kong, Feng, Shui, Huo, Tu
            </Typography>
          </Box>
        </Grid>

        <Grid item lg={6} md={6} xs={12} px={3}>
          <img src={aboutLeft} alt="About us" className="IMG_Fluid" />
        </Grid>

        <Grid item lg={6} md={6} xs={12} px={3}>
          <Box component="div" className={styles.innerTextContent} data-aos="fade-up" data-aos-duration='1300'>
            <Typography variant="h5">ABOUT </Typography>
            <Typography variant="h1"> WHY IS IT CALLED MOTHER?</Typography>
            <Typography variant="subtitle1">
              
               Protection, Nourishment, Reproduction and Sustenance are critical functions that all mothers undertake. 
               Nature’s Protective Shield in the form of our atmosphere and the Ozone layer around our “home” Earth safeguards us from space rocks 
               (meteors) and diverts harmful UV rays emitted by the Sun.</Typography>
            <Typography variant="subtitle1"> All living beings require food for nourishment and water for sustenance. Nature provides ample sources for either one or both on land, sea and air Nature also provides a variety of environments on land, air and water that are appropriate and idyllic for a variety of species on Earth to inhabit, reproduce and grow.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default WhatIsNature