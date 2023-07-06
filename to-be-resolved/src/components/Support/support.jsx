import React from 'react';
import styles from './styles.module.css'
import collageImg2 from "./../../assets/images/about-2.png"
import { Box, Grid, Typography } from '@mui/material'

const SupportComponent = () => {
  return (
    <React.Fragment>

        <Box className={styles.aboutParentBox}>

            <Grid container p={3} className='container'>

                <Grid item lg={7} md={12} xs={12} align="left" className={styles.collageContent}>
                    <Typography variant="h1" data-aos="fade-up" data-aos-duration='1300'>
                        Support
                    </Typography>
                    <Typography variant="subtitle2" data-aos="fade-up" data-aos-duration='1400'>
                        Aumana is mindful and aware that helping Mother Nature in a meaningful manner necessitates coordinated and
                        sustained efforts at local, regional and global levels. Numerous government and non-government organizations are
                        engaged in such efforts. Aumana will support efforts of likeminded organizations by:
                    </Typography>
                    <ol type='i'>
                        <li>Urging its registered users that whenever feasible they should help accomplish tasks in projects undertaken by such
                            organizations in their local areas .</li>
                        <li>Identifying organizations undertaking efforts aligned with one or more categories of Aumana’s multi-category
                            approach for helping Mother Nature. The four categories are Prevention, Recovery, Rehab and Education. Aumana
                            will support such organizations with funds raised by licensing Natural Wonderland and NW Collage images. A
                            sliding scale method will be used to qualify recipients for these funds. Under this method, an organization
                            undertaking efforts aligned with all four categories will receive more funds than others who are aligned with fewer
                            categories. Organizations receiving funds from Aumana will be considered our “Supported Partners” because
                            accomplishment of our mutual objectives will be intertwined. They dependent on Aumana to fund some if not all
                            efforts undertaken and Aumana dependent on them to undertake efforts that will help mother nature.</li>
                    </ol>
                </Grid>

                <Grid item lg={5} md={12} xs={12}  p={5} align="left" className={styles.innerImage}>
                    <img src={collageImg2} alt="collage" className="IMG_Fluid" />
                </Grid>

                <Grid item lg={12} md={12} xs={12} pt={5} align="left" className={styles.collageContent}>
                    <Typography variant="subtitle2" data-aos="fade-up" data-aos-duration='1400'>
                        This is a partial list of organizations being evaluated for consideration of becoming a “Supported Partner”. Over
                        time, other organizations may be added or existing names removed as warranted by results of such partnerships.
                    </Typography>
                    <ul>
                        <li> <a href="https://www.greenpeace.org/international/" target="_blank" rel="noopener noreferrer"> Greenpeace International  </a></li>
                        <li> <a href="http://eices.columbia.edu/" target="_blank" rel="noopener noreferrer"> Earth Institute Center for Environmental Research and Conservation  </a></li>
                        <li> <a href="https://www.earthisland.org/" target="_blank" rel="noopener noreferrer"> Earth Island Institute </a></li>
                        <li> <a href="https://earthjustice.org/" target="_blank" rel="noopener noreferrer"> Earth Justice </a></li>
                        <li> <a href="https://www.edf.org/" target="_blank" rel="noopener noreferrer"> Environmental Defense Fund.  </a></li>
                        <li> <a href="https://www.fauna-flora.org/" target="_blank" rel="noopener noreferrer"> Fauna and Flora International  </a></li>
                        <li> <a href="https://www.nf-int.org/en" target="_blank" rel="noopener noreferrer"> Nature Friends International  </a></li>
                        <li> <a href="https://www.iucn.org/" target="_blank" rel="noopener noreferrer"> International Union for Conservation of Nature  </a></li>
                        <li> <a href="https://www.nature.org/en-us/" target="_blank" rel="noopener noreferrer"> Nature Conservancy  </a></li>
                        <li> <a href="https://www.nrdc.org/" target="_blank" rel="noopener noreferrer"> Natural Resources Defense Council  </a></li>
                        <li> <a href="https://www.wetlands.org/" target="_blank" rel="noopener noreferrer"> Wetlands International  </a></li>
                        <li> <a href="http://www.worldagroforestry.org/" target="_blank" rel="noopener noreferrer"> World Agroforestry Centre  </a></li>
                        <li> <a href="https://www.worldwildlife.org/" target="_blank" rel="noopener noreferrer"> World Wildlife Fund  </a></li>
                    </ul>
                </Grid>

            </Grid>

        </Box>

  </React.Fragment>
  )
}

export default SupportComponent