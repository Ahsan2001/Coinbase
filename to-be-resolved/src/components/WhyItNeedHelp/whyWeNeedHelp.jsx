import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from "./style.module.css";


const WhyWeNeedHelp = () => {

  return (
    <Box component="section"  className={styles.needHelp}>
      <Grid container p={{xs:2 , md: 12}}  spacing={4} >
        <Grid item lg={10} md={10} xs={12} align="center" alignItems="center" sx={{ margin: '0 auto' }}>
          <Typography variant="h1">
            WHY IT NEEDS HELP
          </Typography>
          <Typography variant="subtitle2">
          "Earth “our home” is the only planet among several Billion other planets in our Galaxy that provides the correct
            environment to sustain human, plant and animal life as we know it. This environment had been finely balanced to
            promote, maintain and sustain life for several thousand years. Humans, the most intelligent species on Earth should
            have been good stewards and helped maintain that balance. Unfortunately a lack of good stewardship by humans has
            created an imbalance. Climate change ascribed to a rise in greenhouse gases is a symptom of the unbalanced
            environment on Earth. It is a major if not the only factor leading to extreme events such as stronger and more
            frequent hurricanes, more frequent and intense wild fires, unprecedented draughts some places, while unprecedented
            rainfall and storms in other places. An increasing potential for geographical expansion and severity of emerging
            infectious diseases especially with a zoonotic potential due to climate change and global warming is a rising threat
            to the health and safety of humans. Mother Nature needs help to rectify this imbalance so that we could have a
            balanced environment again for continuation of life on earth with cleaner air, land, water and without increasing
            pandemics. "
          </Typography>
          <Typography variant="h1">
            Consequences of not helping 
          </Typography>
          <Typography variant="subtitle2">
            Earth is the only home we have. Relocating to another planet with an environment necessary to support human life
            is a viable option in Sci-Fi materials only. This leaves humans on earth one of two options. Either help Mother
            Nature restore the balanced environment required for survival or do not help and perish.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default WhyWeNeedHelp