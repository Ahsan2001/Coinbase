import { Box, Grid, Button } from '@mui/material'
import React from 'react'
import styles from "./style.module.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WishList from "../../Wishlist";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { img_base_url } from '../../../helper/webservices';


const NatureWounderLandTour = ({ data, nextPageUrl, getImages, index, catId }) => {
    const { token } = useSelector(s => s);

    function renderBtn() {
        if (nextPageUrl) {
            return (
                <Grid item lg={12} md={12} xs={12} py={3} align="center">
                    <Button variant="text" onClick={(e) => getImages(index, catId, nextPageUrl)}>
                        Load More <KeyboardArrowRightIcon />
                    </Button>
                </Grid>
            )
        }
    }

    const navigate = useNavigate();
    function changePage(item) {
        if (token) {
            navigate(`/detail/${item.slug}`);
        }
        else {
            toast.error("Please login first.");
        }
    }

    return (
        <Grid container className={styles.natureTabMainWrap} sx={{ width: "100%", margin: "0 auto" }}>
            {
                data?.map((pro, index) => {
                    return (
                        <Grid key={index} item lg={3} md={4} xs={6} spacing={3} sx={{ p: { lg: 3 } }}>
                            <Box component="div" className={styles.innerCateogory} key={index}>
                                <img src={img_base_url + pro.attribute_images[0]?.image} alt={pro?.name}  />
                                <Box className="watermarkImageSmall" onClick={() => changePage(pro)}></Box>
                                <Box className={styles.iconsMain}>
                                    <Box className={styles.leftIcon} onClick={() => changePage(pro)}>
                                        <ShoppingCartIcon />
                                    </Box>
                                    <WishList img={pro} />
                                </Box>
                            </Box>
                        </Grid>
                    )
                })}
            {renderBtn()}
        </Grid>
    )
}

export default NatureWounderLandTour
