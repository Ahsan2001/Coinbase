import { Box, Button, Grid, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import styles from "./style.module.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useSelector} from "react-redux";
import {api_base_url, img_base_url} from "../../../helper/webservices";
import axios from "axios";
import {store} from "../../../redux/store";
import actions from "../../../redux/actions";
import SkeletonLoader from "../../SkeletonLoader";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomLightbox from '../../CustomLightBox';    
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";


const { setLoader, storeInterestSubCategory } = actions;

const InterestImagesTourSkeleton = () => {
    return(
        <Box component="section" className={styles.innerCollages}>
            <Grid container p={3} className='container'>
                <Grid item lg={12} xs={12}>
                    <Typography variant="h1">Images of Interest </Typography>
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

const InterestImagesTour = () => {
    const { image_loading, interest_sub_category_data, token } = useSelector(s => s);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    
        const getData = React.useCallback(()=> {
            let url = `${api_base_url}get-wish-list`;
            if (nextPageUrl !== null) {
                url = nextPageUrl
            }
            axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                if (interest_sub_category_data !== null) {
                    store.dispatch(storeInterestSubCategory([...interest_sub_category_data, ...res.data.data.data]));
                } else {
                    store.dispatch(storeInterestSubCategory(res.data.data.data));
                }
                store.dispatch(setLoader(false));
                setNextPageUrl(res.data.data.next_page_url);
            }).catch((err) => {
                console.clear();
            });
        },[token,nextPageUrl])

    useEffect(() => {
        if (!interest_sub_category_data) {
            store.dispatch(setLoader(true));
            getData();
        }
    }, [interest_sub_category_data,getData]);


    function renderBtn() {
        if (nextPageUrl !== null) {
            return (
                <Grid item lg={12} md={12} xs={12} py={3} align="center">
                    <Button variant="text" onClick={(e) => getData()}>Load More <KeyboardArrowRightIcon/></Button>
                </Grid>
            )
        }
    }


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [LightboxImg, setLightboxImg] = useState(null);


    const popUp = (e) => {
        setLightboxImg(e.target.src);
        handleOpen();
    }

    const navigate = useNavigate();

   
    function changePage (item) {
    if (token) {
        navigate(`/detail/${item.images.slug}`);
    }
      else{
        toast.error("Please login first.");
      }
    }


    if (image_loading) {
        return <InterestImagesTourSkeleton/>
    } else {
        return (
            <Box component="section" className={styles.innerCollages}>
                 <Grid container p={3} className='container'>
                    <Grid item lg={12} xs={12}>
                        <Typography variant="h1">Images of Interest</Typography>
                    </Grid>
                    {
                    interest_sub_category_data?.length === 0 ? <h1 className={styles.errorLine}>You dont have Any Images of Interest yet</h1> :
                    interest_sub_category_data?.map((item, index) => {
                            return (
                                <Grid key={index} item lg={3} md={4} xs={12} p={3}>
                                    <Box component="div" className={styles.imgBox}>
                                        <img src={img_base_url+ item.images?.attribute_images[0]?.image} alt={"as"} onClick={popUp} />
                                        <Box className="watermarkImageSmall"></Box>
                                        <Box className={styles.leftIcon}  onClick={() => changePage(item) }>
                                            <ShoppingCartIcon />
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        }
                    )}
                    {renderBtn()}
                </Grid>
                <CustomLightbox open={open} handleClose={handleClose} imgUrl={LightboxImg} />
            </Box>
        )
    }
}

export default InterestImagesTour