import { Box, Button, Grid, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import styles from "./style.module.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useSelector} from "react-redux";
import actions from "../../../redux/actions";
import axios from "axios";
import {api_base_url, img_base_url} from "../../../helper/webservices";
import {store} from "../../../redux/store";
import WishList from "../../Wishlist";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SkeletonLoader from "../../SkeletonLoader";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const { setLoader, storeNwTourSubCategory } = actions;

const NwCollageTourImageSkeleton = () => {
    return(
        <Box component="section" className={styles.innerCollages}>
            <Grid container sx={{ width: '70%', margin: '0 auto' }} >
                <Grid item lg={12} xs={12}>
                    <Typography variant="h1">Nw Collage Tour </Typography>
                </Grid>

                <Grid item lg={3} md={4} xs={6} p={3}>
                    <Box component="div" className={styles.imgBox} >
                        <SkeletonLoader variant="rectangular"  height="160px" />
                    </Box>
                </Grid>

                <Grid item lg={3} md={4} xs={6} p={3}>
                    <Box component="div" className={styles.imgBox} >
                        <SkeletonLoader variant="rectangular"  height="160px" />
                    </Box>
                </Grid>

                <Grid item lg={3} md={4} xs={6} p={3}>
                    <Box component="div" className={styles.imgBox} >
                        <SkeletonLoader variant="rectangular" height="160px" />
                    </Box>
                </Grid>

                <Grid item lg={3} md={4} xs={6} p={3}>
                    <Box component="div" className={styles.imgBox} >
                        <SkeletonLoader variant="rectangular" height="160px" />
                    </Box>
                </Grid>

                <Grid item lg={3} md={4} xs={6} p={3}>
                    <Box component="div" className={styles.imgBox} >
                        <SkeletonLoader variant="rectangular"  height="160px" />
                    </Box>
                </Grid>
                <Grid item lg={3} md={4} xs={6} p={3}>
                    <Box component="div" className={styles.imgBox} >
                        <SkeletonLoader variant="rectangular"  height="160px" />
                    </Box>
                </Grid>
                <Grid item lg={3} md={4} xs={6} p={3}>
                    <Box component="div" className={styles.imgBox} >
                        <SkeletonLoader variant="rectangular" height="160px" />
                    </Box>
                </Grid>
                <Grid item lg={3} md={4} xs={6} p={3}>
                    <Box component="div" className={styles.imgBox} >
                        <SkeletonLoader variant="rectangular" height="160px" />
                    </Box>
                </Grid>
                <Grid item lg={3} md={4} xs={6} p={3}>
                    <Box component="div" className={styles.imgBox} >
                        <SkeletonLoader variant="rectangular"  height="160px" />
                    </Box>
                </Grid>
                <Grid item lg={3} md={4} xs={6} p={3}>
                    <Box component="div" className={styles.imgBox} >
                        <SkeletonLoader variant="rectangular"  height="160px" />
                    </Box>
                </Grid>
                <Grid item lg={3} md={4} xs={6} p={3}>
                    <Box component="div" className={styles.imgBox} >
                        <SkeletonLoader variant="rectangular" height="160px" />
                    </Box>
                </Grid>
                <Grid item lg={3} md={4} xs={6} p={3}>
                    <Box component="div" className={styles.imgBox} >
                        <SkeletonLoader variant="rectangular" height="160px" />
                    </Box>
                </Grid>



            </Grid>
        </Box>
    )
}

const NwCollageTourImages = () => {

    const {token } = useSelector(s => s);

    const { image_loading, nw_tour_sub_category_data } = useSelector(s => s);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const  getData = React.useCallback(() => {
        let url = `${api_base_url}get-category-collage-by-image`;
        if (nextPageUrl !== null) {
            url = nextPageUrl
        }
        axios.get(url).then((res) => {
            if (nw_tour_sub_category_data !== null) {
                store.dispatch(storeNwTourSubCategory([...nw_tour_sub_category_data, ...res.data.data.data]));
            } else {
                store.dispatch(storeNwTourSubCategory(res.data.data.data));
            }
            store.dispatch(setLoader(false));
            setNextPageUrl(res.data.data.next_page_url);
        }).catch((err) => {
            console.clear();
        });
    }, [nextPageUrl,nw_tour_sub_category_data])

    useEffect(() => {
        if (!nw_tour_sub_category_data) {
            store.dispatch(setLoader(true));
            getData();
        }
    }, [nw_tour_sub_category_data,getData]);

    function renderBtn() {
        if (nextPageUrl !== null) {
            return (
                <Grid item lg={12} md={12} xs={12} py={3} align="center">
                    <Button variant="text" onClick={(e) => getData()}>Load More <KeyboardArrowRightIcon/></Button>
                </Grid>
            )
        }
    }

    const navigate = useNavigate();
    function changePage (item) {
        if (token) {
        navigate(`/detail/${item.slug}`);
     } else{
        toast.error("Please login first.");
      }

    }
     

    if (image_loading) {
        return <NwCollageTourImageSkeleton/>
    } else {
        return (
            <Box component="section" className={styles.innerCollages}>
                <Grid container className="container">
                    <Grid item lg={12} xs={12}>
                        <Typography variant="h1">Nw Collage Tour </Typography>
                    </Grid>
                    {nw_tour_sub_category_data?.map((item, index) => {

                    const thumbnailImages = item.attribute_images.filter(image => image.select_image_type === "thumbnail")[0] 
                

                    return (
                        <Grid key={index} item lg={3} md={4} xs={6} p={3}>
                        <Box component="div" className={styles.imgBox} >
                        <img src={img_base_url+thumbnailImages?.image}  alt={thumbnailImages?.id} onClick={() => changePage(item) } />
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
                    {renderBtn()}
                </Grid>
       
            </Box>
        )
    }
}



export default NwCollageTourImages