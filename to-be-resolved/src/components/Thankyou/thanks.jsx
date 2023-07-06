import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import styles from "./style.module.css";
import shoppingBag from '../../assets/images/Checkout/shoppingBag.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Thanks = () => {


  const { id } = useParams()
  const { user, subtotal } = useSelector(s => s);



  // Route changing 
  let navigate = useNavigate();
  const ContinueRouteChange = () => {
    let changePath = `/order-detail/${id}`;
    navigate(changePath);
  }

  // Get new Date 
  let todayDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date =  todayDate.toLocaleDateString('en-US', options);

  return (


    <Box component="section" className={styles.thankyou_main_wrap}>
      <Grid container sx={{ width: '70%', margin: '0 auto' }}>

        <Grid item lg={12} md={12} xs={12}>
          <Box className={styles.innerHead}>
            <Typography variant="h4">Checkout</Typography>
            <Typography variant="h5">Order Placed Successfully</Typography>
          </Box>
        </Grid>

        <Grid item lg={8} md={12} xs={12} p={3}>
          <Box className={styles.inner_image}>
            <img src={shoppingBag} alt="Thank you" />
          </Box>

          <Box className={styles.thank_you_description}>
            <Typography variant="h5">Thank you for  <strong>“Creating”</strong> on Aumana. <br />
              Please share on social to help us reach our goal of donating <strong>1M Creators!</strong></Typography>
             <Box className={styles.social_share}>
              <FacebookRoundedIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <YouTubeIcon />
              <InstagramIcon />
            </Box>
          </Box>
        </Grid>

        <Grid item lg={4} md={12} xs={12} p={3}>
          <Box className={styles.CustomerReceiptContent}>
            <Typography variant="h5">Customer Receipt  <span>Order Placed Successfully</span></Typography>
            <ul>
              <li>Customer Name <span>{user.name}</span></li>
              <li>Date Purchased <span>{date}</span></li>
              <li>Subtotal <span>${subtotal}</span></li>
              <li>TAX <span>$0</span></li>
              <li className={styles.totalPrice}>Total <span>${subtotal}</span></li>
            </ul>
          </Box>
        </Grid>


        <Grid item lg={12} md={12} xs={12}>
          <Box className={styles.continue_creating}>
            <Button variant="text" onClick={ContinueRouteChange} >Dowload Your Images</Button>
          </Box>
        </Grid>





      </Grid>
    </Box>


  )
}

export default Thanks