import { Box, Grid, Typography } from '@mui/material'
import styles from "./style.module.css"
import React  from "react";
import { Link, useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import WishList from "../Wishlist";
import SkeletonLoader from '../SkeletonLoader';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { toast } from 'react-toastify';
import { img_base_url } from '../../helper/webservices';

const NWCollageImagesSkeleton = () => {

  return (
      <Box component="section" className={styles.nwCollageSection}>
        <Grid container sx={{ width: '70%', margin: '0 auto' }} >
          <Grid item lg={10} md={10} xs={12} align="center" sx={{ margin: '0 auto' }}>
            <Typography variant="h1">
              NW COLLAGE IMAGES
            </Typography>
          </Grid>
          <Grid container>
            <Grid item lg={4} md={6} py={3} px={4} xs={12}>
              <Box className={styles.innerImage}>
                <SkeletonLoader width="100%" height="100%" />
                <Box sx={{ display: "none" }}></Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} py={3} px={4} xs={12}>
              <Box className={styles.innerImage}>
                <SkeletonLoader width="100%" height="100%" />
                <Box sx={{ display: "none" }}></Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} py={3} px={4} xs={12}>
              <Box className={styles.innerImage}>
                <SkeletonLoader width="100%" height="100%" />
                <Box sx={{ display: "none" }}></Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} py={3} px={4} xs={12}>
              <Box className={styles.innerImage}>
                <SkeletonLoader width="100%" height="100%" />
                <Box sx={{ display: "none" }}></Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} py={3} px={4} xs={12}>
              <Box className={styles.innerImage}>
                <SkeletonLoader width="100%" height="100%" />
                <Box sx={{ display: "none" }}></Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} py={3} px={4} xs={12}>
              <Box className={styles.innerImage}>
                <SkeletonLoader width="100%" height="100%" />
                <Box sx={{ display: "none" }}></Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} py={3} px={4} xs={12}>
              <Box className={styles.innerImage}>
                <SkeletonLoader width="100%" height="100%" />
                <Box sx={{ display: "none" }}></Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} py={3} px={4} xs={12}>
              <Box className={styles.innerImage}>
                <SkeletonLoader width="100%" height="100%" />
                <Box sx={{ display: "none" }}></Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} py={3} px={4} xs={12}>
              <Box className={styles.innerImage}>
                <SkeletonLoader width="100%" height="100%" />
                <Box sx={{ display: "none" }}></Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  )
}

const NWCollageImages = () => {
  const { image_loading, featured_nw_collage,token } = useSelector(s => s);
  const navigate = useNavigate();

  function changePage (item) {
    if (token) {
    navigate(`/detail/${item.slug}`);
    }
    else{
      toast.error("Please login first.");
    }
  }

  if(image_loading){
    return <NWCollageImagesSkeleton/>
  }else {
    return (
        <Box component="section" className={styles.nwCollageSection}>
          <Grid container  className="container">
            <Grid item lg={10} md={10} xs={12} align="center" sx={{ margin: '0 auto' }}>
              <Typography variant="h1">
                NW COLLAGE IMAGES
              </Typography>
            </Grid>
            <Grid container className="container">
              {featured_nw_collage?.map((item, index) => {
                  const thumbnailImages = item.attribute_images.filter(image => image.select_image_type === "thumbnail")[0]
                  return (
                    <Grid item lg={3} md={4} py={3} px={2} xs={6} key={index}>
                      <Box className={styles.innerImage}>
                      <img src={img_base_url+thumbnailImages?.image} alt={thumbnailImages?.id} onClick={() => changePage(item) } />
                      <Box className="watermarkImageSmall" onClick={() => changePage(item)}></Box>
                        <Box className={styles.iconsMain}>
                          <Box className={styles.leftIcon} onClick={() => changePage(item) }>
                              <ShoppingCartIcon />
                          </Box>
                          <WishList img={item}/>
                        </Box>
                      </Box>
                    </Grid>
                  )
                }
              )}
            </Grid>

            <Grid item lg={12} md={12} xs={12} my={5} align="center" alignItems="center">
              <Box className={styles.readMoreBtn}>
                <Link to="/nw-collage-tour" > View More</Link>
              </Box>
            </Grid>

          </Grid>
        </Box>
    )
  }
}

export default NWCollageImages