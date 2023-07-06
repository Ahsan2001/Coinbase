import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Typography, Box } from '@mui/material';
import styles from "./style.module.css"
import { useSelector } from "react-redux";
import WishList from "../Wishlist";
import SkeletonLoader from '../SkeletonLoader';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
import { img_base_url } from '../../helper/webservices';


const NatureWonderlandSkeleton = () => {

    return (
        <Box component="section" className={styles.MainWrap}>
            <Grid container sx={{ width: { md: '80%', xs: '85%' }, margin: '0 auto' }}>

                <Grid item lg={12} md={12} xs={12} align="center">
                    <Typography variant="h1" className={styles.Title}> “Natural Wonderland” </Typography>
                </Grid>

                <Grid item lg={10} md={10} xs={12} align="center" sx={{ margin: '0 auto' }}>
                    <Slider>
                        <SkeletonLoader width="85%" height="600px" />
                    </Slider>

                    <Slider arrows={false} slidesToShow={6}>
                        <Box sx={{ marginTop: "15px" }} ><SkeletonLoader width="160px" height="100px" /></Box>
                        <Box sx={{ marginTop: "15px" }} ><SkeletonLoader width="160px" height="100px" /></Box>
                        <Box sx={{ marginTop: "15px" }} ><SkeletonLoader width="160px" height="100px" /></Box>
                        <Box sx={{ marginTop: "15px" }} ><SkeletonLoader width="160px" height="100px" /></Box>
                        <Box sx={{ marginTop: "15px" }} ><SkeletonLoader width="160px" height="100px" /></Box>
                        <Box sx={{ marginTop: "15px" }} ><SkeletonLoader width="160px" height="100px" /></Box>
                    </Slider>
                </Grid>
            </Grid>
        </Box>
    )
}

const NatureWonderland = () => {

    const { token } = useSelector(s => s);
    const [ nav1, setNav1 ] = useState();
    const [ nav2, setNav2 ] = useState();
    const { image_loading, featured_natural_wonderland } = useSelector(s => s);
    const navigate = useNavigate();
   
    function changePage (item) {
    if (token) {
        navigate(`/detail/${item.slug}`);
    }else{
        toast.error("Please login first.");
    } }

    if (image_loading) {
        return <NatureWonderlandSkeleton />
    } else {
        return (
            <Box component="section" className={styles.MainWrap}>
                <Grid container sx={{ width: { md: '80%', xs: '85%' }, margin: '0 auto' }}>

                    <Grid item lg={12} md={12} xs={12} align="center">
                        <Typography variant="h1" className={styles.Title}> “Natural Wonderland” </Typography>
                    </Grid>

                    <Grid item lg={10} md={10} xs={12} align="center" sx={{ margin: '0 auto' }}>
                        <Slider swipe={false} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                            {featured_natural_wonderland?.map((item, index) => {
                                return (
                                    <Box key={index} component="div" className={styles.bigImg}>
                                        <img src={img_base_url+item.attribute_images[1]?.image} alt={item.name}    />
                                        <Box className="watermarkImageBig" onClick={() => changePage(item) } ></Box>
                                        <Box className={styles.iconsMain}>
                                        <Box className={styles.leftIcon} onClick={() => changePage(item) }> <ShoppingCartIcon /></Box>
                                        <WishList img={item} /></Box>
                                    </Box>
                            )})}
                        </Slider>


                        <Slider asNavFor={nav1}  arrows={false} ref={(slider2) => setNav2(slider2)} slidesToShow={6} swipeToSlide={true} focusOnSelect={true}>
                            {featured_natural_wonderland?.map((item, index) => {
                              return (
                                <Box key={index} className={`${styles.smallboX}  relative`}> 
                                    <img  src={img_base_url+item.attribute_images[0]?.image} alt={item.name} className={styles.smallImg} />
                                    <Box className="watermarkImageSmall"></Box>
                                </Box>
                              )
                            })}
                        </Slider>
                            
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default NatureWonderland