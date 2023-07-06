import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Box, Grid, Typography, Button,Checkbox ,FormControl,RadioGroup} from '@mui/material'
import styles from "./style.module.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from "axios";
import { api_base_url, img_base_url } from "../../helper/webservices";
import { useSelector } from "react-redux";
import { store } from '../../redux/store';
import actions from '../../redux/actions';
import { toast } from "react-toastify";
import SkeletonLoader from '../SkeletonLoader';
import CustomRadioForm from './radioForm';


const CartOrder = () => {

    const { setBuyerCart, setSubTotal, setCartValue } = actions;
    const { token } = useSelector(s => s);
    const [ cardData, setCartData ] = useState([]);
    const [ collageData, setCollageData ] = useState([]);
    const [ cartPriceData, setCartPriceData ] = useState("");
    const [ posterPriceData, setPosterPriceData ] = useState("");
    const [ loading, setLoading ] = useState(true);
    const [ checked, setChecked ] = useState(false);
    const navigate = useNavigate();
    let total = 0;

    const getCart = React.useCallback(() => {
        axios.get(`${api_base_url}get-cart`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setCartData(res.data?.data?.images);
            setCollageData(res.data?.data?.collage_images);
            store.dispatch(setCartValue(res.data?.data))
            store.dispatch(setBuyerCart(res.data.data.images.length + res.data.data.collage_images.length));
            setLoading(false);
        }).catch((err) => { console.log(err) })
        axios.get(`${api_base_url}get-collage-price`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            let cardData = res.data.data.filter(it => it.type === "card")
            let posterData = res.data.data.filter(it => it.type === "poster")
            setCartPriceData(cardData);
            setPosterPriceData(posterData);
        }).catch((err) => { console.log(err) })
    }, [setBuyerCart, token])

    cardData.forEach((val) => {
        total += +(val.price);
    });

    collageData.forEach((it) => {
        total += +(it.price);
    });

    useEffect(() => {
        getCart();
    }, [getCart,cardData,collageData  ]);




   
    


    

    const deleteCard = (id) => {
        axios.delete(`${api_base_url}delete-to-cart/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            store.dispatch(setCartValue(res.data?.data))
            setCartData(res.data.data.images);
            setCollageData(res.data.data.collage_images);
            toast.success(res.data.message);
            store.dispatch(setBuyerCart(res?.data?.data?.images?.length));
            setLoading(false);
            store.dispatch(setSubTotal(total));
        })
        .catch((err) => {
            toast.error(err?.res?.data?.message);
        });
    }

    const renderImage = (cartObj) => {
        if (cartObj.image_type != null) {
            return img_base_url + cartObj.image
        }
        else {
            return cartObj.collage?.collage_image;
        }
    }

    const PlaceOrderRouteChange = () => {
        store.dispatch(setSubTotal(total));
        if (checked === false) {
            toast.error("Please checked terms and condition")
            return false
        }
        let path = `/payment`;
        navigate(path);
    }

    const handleChange = (event) => setChecked(event.target.checked);

    if (loading) {
        return (
            <Box component="section" className={styles.cartMainWrap}>
                <Grid container sx={{ width: '90%', margin: '0 auto' }}>
                    <Grid item lg={12} md={12} xs={12}>
                        <Typography variant="h1" className={styles.skeletonCenter} ><SkeletonLoader height="32px" width="120px" /></Typography>
                        <Typography variant="h3" className={styles.skeletonCenter}  ><SkeletonLoader height="35px" width="250px" /></Typography>
                    </Grid>
                    <Grid container item lg={8} md={12} xs={12}>
                        <Grid item lg={4} px={3} md={12} xs={12}>
                            <Box>
                                <Box className={styles.cartImage}>
                                    <SkeletonLoader height="200px" width="100%" />
                                </Box>
                                <Box className={styles.cartDetails}>
                                    <Box className={styles.cartBoxUses}>
                                        <Box className={styles.cartBoxTitle}>
                                            <Typography variant="h5">  <SkeletonLoader height="30px" width="225px" /> </Typography>
                                            <Typography variant="h5"><SkeletonLoader height="30px" width="100px" /></Typography>
                                        </Box>
                                        <FormControl>
                                            <RadioGroup row name="row-radio-buttons-group" sx={{ margin: "5px 0 0", justifyContent: "center" }}>
                                                <SkeletonLoader height="30px" width="333px" />
                                            </RadioGroup>
                                            <RadioGroup row name="row-radio-buttons-group" sx={{ margin: "5px 0 0", justifyContent: "center" }}>
                                                <SkeletonLoader height="30px" width="333px" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} px={3} md={12} xs={12}>
                            <Box>
                                <Box className={styles.cartImage}>
                                    <SkeletonLoader height="200px" width="100%" />
                                </Box>
                                <Box className={styles.cartDetails}>
                                    <Box className={styles.cartBoxUses}>
                                        <Box className={styles.cartBoxTitle}>
                                            <Typography variant="h5">  <SkeletonLoader height="30px" width="225px" /> </Typography>
                                            <Typography variant="h5"><SkeletonLoader height="30px" width="100px" /></Typography>
                                        </Box>
                                        <FormControl>
                                            <RadioGroup row name="row-radio-buttons-group" sx={{ margin: "5px 0 0", justifyContent: "center" }}>
                                                <SkeletonLoader height="30px" width="333px" />
                                            </RadioGroup>
                                            <RadioGroup row name="row-radio-buttons-group" sx={{ margin: "5px 0 0", justifyContent: "center" }}>
                                                <SkeletonLoader height="30px" width="333px" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} px={3} md={12} xs={12}>
                            <Box>
                                <Box className={styles.cartImage}>
                                    <SkeletonLoader height="200px" width="100%" />
                                </Box>
                                <Box className={styles.cartDetails}>
                                    <Box className={styles.cartBoxUses}>
                                        <Box className={styles.cartBoxTitle}>
                                            <Typography variant="h5">  <SkeletonLoader height="30px" width="225px" /> </Typography>
                                            <Typography variant="h5"><SkeletonLoader height="30px" width="100px" /></Typography>
                                        </Box>
                                        <FormControl>
                                            <RadioGroup row name="row-radio-buttons-group" sx={{ margin: "5px 0 0", justifyContent: "center" }}>
                                                <SkeletonLoader height="30px" width="333px" />
                                            </RadioGroup>
                                            <RadioGroup row name="row-radio-buttons-group" sx={{ margin: "5px 0 0", justifyContent: "center" }}>
                                                <SkeletonLoader height="30px" width="333px" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} px={3} md={12} xs={12} mt={5}>
                            <Box>
                                <Box className={styles.cartImage}>
                                    <SkeletonLoader height="200px" width="100%" />
                                </Box>
                                <Box className={styles.cartDetails}>
                                    <Box className={styles.cartBoxUses}>
                                        <Box className={styles.cartBoxTitle}>
                                            <Typography variant="h5"><SkeletonLoader height="30px" width="225px" /> </Typography>
                                            <Typography variant="h5"><SkeletonLoader height="30px" width="100px" /></Typography>
                                        </Box>
                                        <FormControl>
                                            <RadioGroup row name="row-radio-buttons-group" sx={{ margin: "5px 0 0", justifyContent: "center" }}>
                                                <SkeletonLoader height="30px" width="333px" />
                                            </RadioGroup>
                                            <RadioGroup row name="row-radio-buttons-group" sx={{ margin: "5px 0 0", justifyContent: "center" }}>
                                                <SkeletonLoader height="30px" width="333px" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>



                    </Grid>
                    <Grid item lg={4} md={12} xs={12} px={3}>
                        <Box className={styles.subtotal_mainWrap}>
                            <Box className={styles.subtotal_head}>
                                <ul>
                                    <li> <SkeletonLoader height="30px" width="350px" /> <span><SkeletonLoader height="30px" width="100px" /></span></li>
                                    <li> <SkeletonLoader height="30px" width="350px" /> <span><SkeletonLoader height="30px" width="100px" /></span></li>
                                    <li> <SkeletonLoader height="30px" width="350px" /> <span><SkeletonLoader height="30px" width="100px" /></span></li>
                                </ul>
                            </Box>
                            <Box className={styles.term_conditions}>
                                <Typography variant="subtitle"><SkeletonLoader height="30px" width="100%" /> </Typography>
                            </Box>
                            <Box  sx={{ margin: "10px 0 0"}}>
                                <SkeletonLoader height="30px" width="100%" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        )
    }

    return (
        <Box component="section" className={styles.cartMainWrap}>
            <Grid container sx={{ width: '90%', margin: '0 auto' }}>
                <Grid item lg={12} md={12} xs={12}>
                    <Typography variant="h1">Cart</Typography>
                    <Typography variant="h3">Order Summary</Typography>
                </Grid>

                <Grid container item lg={8} md={12} xs={12}>
                    {cardData?.length === 0 && collageData?.length === 0 ? <h1>Card is empty</h1> :
                        (cardData?.map((val, key) => {
                            return (
                                <Grid item key={key} lg={4} px={3} md={12} xs={12}>
                                    <Box className={styles.cartBoxMain}>
                                        <Box className={styles.cartImage}>
                                            <img src={renderImage(val)} alt={val?.id} />
                                            <Box className="watermarkImageSmall" ></Box>
                                            <DeleteOutlineIcon onClick={() => { deleteCard(val.id) }} />
                                        </Box>
                                        <Box className={styles.cartDetails}>
                                            <Box className={styles.cartBoxUses}>
                                                <Box className={styles.cartBoxTitle}>
                                                    <Typography variant="h5">{`${val?.image_type}  ${val?.image_size}`} <span>{`${val?.dpi} Dpi`} </span> </Typography> </Box>
                                                <CustomRadioForm
                                                    setCartData={setCartData} cardData={cardData}
                                                    val={val} selectValue={val?.price} personalUse={val?.personal_use_price} corporateUse={val?.corporate_use_price}
                                                    commercialUse={val?.commercial_use_price} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                        )}
                    {collageData?.map((it, ind) => {
                        return (
                            <Grid item key={ind} lg={4} px={3} md={12} xs={12}>
                                <Box className={styles.cartBoxMain}>
                                    <Box className={styles.cartImage}>
                                        <img src={it?.collage?.collage_image} alt={it?.id} />
                                        <Box className="watermarkImageSmall" ></Box>
                                        <DeleteOutlineIcon onClick={() => { deleteCard(it.id) }} />
                                    </Box>
                                    <Box className={styles.cartDetails}>
                                        <Box className={styles.cartBoxUses}>
                                            <Box className={styles.cartBoxTitle}>
                                                <Typography variant="h5">
                                                    {`${it?.collage.frame_type === "card" ? "Card 4x6" : "Poster 20x30"}`} <span>300 Dpi </span>
                                                </Typography>
                                            </Box>
                                            {it?.collage.frame_type === "card" ?
                                                <CustomRadioForm val={it}
                                                    selectValue={cartPriceData[0]?.personal_use_price}
                                                    personalUse={cartPriceData[0]?.personal_use_price}
                                                    corporateUse={cartPriceData[0]?.corporate_use_price}
                                                    commercialUse={cartPriceData[0]?.commercial_use_price}
                                                    setCollageData={setCollageData}
                                                    collageData={collageData}
                                                    bool1={true}/> 
                                                : 
                                                <CustomRadioForm val={it}
                                                    selectValue={posterPriceData[0]?.personal_use_price}
                                                    personalUse={posterPriceData[0]?.personal_use_price}
                                                    corporateUse={posterPriceData[0]?.corporate_use_price}
                                                    commercialUse={posterPriceData[0]?.commercial_use_price}
                                                    setCollageData={setCollageData}
                                                    collageData={collageData}
                                                    bool1={true} />
                                            }
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>

                <Grid item lg={4} md={12} xs={12} px={3}>
                    <Box className={styles.subtotal_mainWrap}>
                        <Box className={styles.subtotal_head}>
                            <ul>
                                <li>Quantity: <span>{cardData?.length + collageData?.length}</span></li>
                                <li>Subtotal: <span>${parseFloat(total).toFixed(2)}</span></li>
                                <li>Estimated Tax: <span>$0.00</span></li>
                                <li className={styles.bolder}>Order Total: <span>${parseFloat(total).toFixed(2)}</span></li>
                            </ul>
                        </Box>
                        <Box className={styles.term_conditions}>
                            <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
                            <Typography variant="subtitle">I agree to the <Link to="/terms-and-condition">terms and conditions</Link> regarding use of the download image</Typography>
                        </Box>
                        <Box className={styles.placeAndOrder}>
                            <Button variant="contained" onClick={PlaceOrderRouteChange}> Place Order </Button>
                            <Typography variant="h6">After placing order you will recieve an email on your email address
                                with your photo and the user agreement license</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )

}

export default CartOrder