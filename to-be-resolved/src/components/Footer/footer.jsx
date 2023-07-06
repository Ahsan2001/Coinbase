import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'
import { Box, Grid, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import BlockAnimation from '../../utils/BlockAnimation';


const Footer = () => {
  return (
    <footer className={styles.footer_main}>
      <Grid container direction="row" py={2} justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={12}>
          <Typography variant="h1" align="center" className={styles.footer_logo}>AUMANA</Typography>
          <Typography variant="subtitle1" align="center" className={styles.footer_para}>
            <BlockAnimation type="blocks" text="AUMANA is an acronym of the Latin term “Auxilium Mater Natura”. In English, it means “Help Mother Nature”" />
          </Typography>
          <Box className={styles.footer_menu}>
            <Link to="/">Home</Link>
            <Link to="/about">About Aumana</Link>
            <Link to="/natural-tour">Natural</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/refund-policy">Refund Policy</Link>
          </Box>
          <Typography variant="h1" className={styles.follow} align="center"> Follow us </Typography>
          <Box className={styles.social_icons}>
            <Link to="" className={styles.footer_icons_links}><FacebookOutlinedIcon fontSize="medium" /></Link>
            <Link to="" className={styles.footer_icons_links}><TwitterIcon fontSize="medium" /></Link>
            <Link to="" className={styles.footer_icons_links}><InstagramIcon fontSize="medium" /></Link>
            <Link to="" className={styles.footer_icons_links}><PinterestIcon fontSize="medium" /></Link>
          </Box>
          <Typography variant="h6" align="center" className={styles.copyright}>Copyright © 2022. All rights reserved </Typography>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer