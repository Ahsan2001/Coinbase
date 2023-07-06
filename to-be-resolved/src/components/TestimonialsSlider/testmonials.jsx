import React from 'react'
import Slider from "react-slick";
import styles from "./style.module.css"
import client1 from "../../assets/images/testimonials/test1.png"
import { Box, Grid, Typography } from '@mui/material';

const Testmonials = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
 
      <Box component="section" className={styles.testimonialsSection} data-aos="fade-up" data-aos-duration='1300'>
        <Grid container className='container' >
              <Grid item lg={10} md={12} xs={12} sx={{ margin: '0 auto' }} >
                <Slider {...settings}>
                    <Box component="div" className={styles.innerDiv}>
                        <Box component="div" className={styles.innerImg}>
                            <img src={client1} alt="client1" />
                        </Box>
                        <Box component="div" className={styles.innerContent}>
                            <Typography variant="h5">
                                TESTIMONIALS
                            </Typography>
                            <Typography variant="h1">
                                WHAT PEOPLE <br /> SAYS ABOUT US
                            </Typography>
                            <Typography variant="body1">
                                Earth is the only home we have. Relocating to another planet with an environment necessary to support human life is a viable option in Sci-Fi materials only. This leaves humans on earth one of two options. Either help Mother Nature restore the balanced environment required for survival or do not help and perish.
                            </Typography>
                            <Typography variant="subtitle1">
                                JOHN MACLEIN
                            </Typography>
                        </Box>
                    </Box>
                    <Box component="div" className={styles.innerDiv}>
                        <Box component="div" className={styles.innerImg}>
                            <img src={client1} alt="client1" />
                        </Box>
                        <Box component="div" className={styles.innerContent}>
                            <Typography variant="h5">
                                TESTIMONIALS
                            </Typography>
                            <Typography variant="h1">
                                WHAT PEOPLE <br /> SAYS ABOUT US
                            </Typography>
                            <Typography variant="body1">
                                Earth is the only home we have. Relocating to another planet with an environment necessary to support human life is a viable option in Sci-Fi materials only. This leaves humans on earth one of two options. Either help Mother Nature restore the balanced environment required for survival or do not help and perish.
                            </Typography>
                            <Typography variant="subtitle1">
                                JOHN MACLEIN
                            </Typography>
                        </Box>
                    </Box>
                    <Box component="div" className={styles.innerDiv}>
                        <Box component="div" className={styles.innerImg}>
                            <img src={client1} alt="client1" />
                        </Box>
                        <Box component="div" className={styles.innerContent}>
                            <Typography variant="h5">
                                TESTIMONIALS
                            </Typography>
                            <Typography variant="h1">
                                WHAT PEOPLE <br /> SAYS ABOUT US
                            </Typography>
                            <Typography variant="body1">
                                Earth is the only home we have. Relocating to another planet with an environment necessary to support human life is a viable option in Sci-Fi materials only. This leaves humans on earth one of two options. Either help Mother Nature restore the balanced environment required for survival or do not help and perish.
                            </Typography>
                            <Typography variant="subtitle1">
                                JOHN MACLEIN
                            </Typography>
                        </Box>
                    </Box>
                </Slider>
            </Grid>
        </Grid>
    </Box>
    )
}

export default Testmonials