import { Box, Typography, Grid, Button } from '@mui/material';
import React, { useState } from 'react';
import styles from "./styles.module.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { api_base_url } from '../../helper/webservices';
import { useSelector } from 'react-redux';
import { img_base_url } from '../../helper/webservices';
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from 'file-saver';

const OrderDetail = () => {

  const { id } = useParams();
  const { token } = useSelector(s => s);
  const [orderCardData, setOrderCardData] = useState([]);
  const [orderCollageData, setOrderCollageData] = useState([]);



  const ViewDetailPage = async () => {
    try {
      const res = await axios.get(`${api_base_url}get-order-item/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setOrderCardData(res?.data?.data?.images);
      setOrderCollageData(res?.data?.data?.collage_images)
    } catch (error) {
      console.error(error, "Error encountered while fetching order item data.");
    };
  }


  const DownloadImage = (imgUrl, imgName ) => {
      saveAs(imgUrl, imgName)
  }


  React.useEffect(() => {
    ViewDetailPage()
  }, [token]);



  return (
    <Box component="section" className={styles.thankyouMainWrap}>
      <Grid container sx={{ width: '80%', margin: '0px auto' }} >
        <Grid item lg={12} md={12} xs={12} data-aos="fade-right" data-aos-duration='1300'>
          <Box className={styles.headingTops}>
            <h3>  Order <span> {orderCardData[0]?.order_number}</span></h3>
          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{ width: '80%', margin: '0px auto' }} >
        {
          orderCardData.map((data, index) => {
          return (
            <Grid item  key={index} lg={3} px={3} md={12} xs={12}>
              <Box className={styles.cartBoxMain}>
                <Box className={styles.cartImage}>
                  <img src={img_base_url + data?.image} alt={data.id} />
                </Box>
                <Box className={styles.cartDetails}>
                    <Typography variant="h3">  { data?.image_type } {data?.image_size}  <span>{data?.dpi}  Dpi </span>   </Typography> 
                    <Typography variant="h4"> ${ parseFloat(data.price).toFixed(2) }   <span>License: <Box className={styles.spaninner}> { data.license ? data.license : "null"} </Box> </span>   </Typography> 
                    <Button onClick={ () =>   DownloadImage(img_base_url + data?.image, data.id)}>Download  <DownloadIcon />  </Button>
                </Box>
              </Box>
            </Grid>
          )
        })}

        {
          orderCollageData.map((data,index) => {
            return(
              <Grid item key={index} lg={3} px={3} md={12} xs={12}>
              <Box className={styles.cartBoxMain}>
                <Box className={styles.cartImage}>
                  <img src={data?.get_collage?.collage_image} alt={data.id} />
                </Box>
                <Box className={styles.cartDetails}>
                    <Typography variant="h3">  {` ${data.get_collage?.frame_type === "card" ? "Card 4x6" : "Poster 20x30"}` }  <span>300  Dpi </span>   </Typography> 
                    <Typography variant="h4"> ${ parseFloat(data.price).toFixed(2) }   <span>License: <Box className={styles.spaninner}>  { data.license ? data.license : "null"} </Box> </span>   </Typography> 
                    <Button onClick={ () =>   DownloadImage(data.get_collage?.collage_image, data.id)}>Download  <DownloadIcon />  </Button>
                </Box>
              </Box>
            </Grid>
            )
          })
        }








      </Grid>
    </Box>
  )
}

export default OrderDetail




