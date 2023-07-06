// import React, {useState,useRef, useEffect, useCallback} from 'react'
import React, {useState, useRef} from 'react'

import styles from "./style.module.css"
import {Box, Button, Grid} from '@mui/material'
import {Link } from "react-router-dom";
import {useSelector} from "react-redux";
import CardLayoutHandler from "../../CustomCollageBoxes/CardSizes/cardLayoutHandler";
import PosterLayoutHandler from "../../CustomCollageBoxes/PosterSizes/posterLayoutHandler";
import {toast} from "react-toastify";
import axios from "axios";
// import {api_base_url, img_base_url} from "../../../helper/webservices";
import {api_base_url } from "../../../helper/webservices";

import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import * as htmlToImage from "html-to-image";
import SkeletonLoader from '../../SkeletonLoader';
import { store } from '../../../redux/store';
import actions from '../../../redux/actions';



const WorkScreen = () => {

    const { token, selected_design, selected_layout, dragged_img_collection } = useSelector(s => s);
    const {state} = useLocation();
    const { setDraftData } = actions;
    const id = state?.id;


    
    const checkCard =  useRef("");
    const navigate = useNavigate();
    const printRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const handleCardOrPosterLayout = () => {
        if (selected_design === "poster") {
            return <PosterLayoutHandler/>;
        } else {
            return <CardLayoutHandler/>;
        }
    }

    const saveCollage = (isContinue = false) => {

        store.dispatch(setDraftData(false));

        if (selected_design === "card") {
            checkCard.current = 14;
         } else{
          checkCard.current = 98;
        }

        if(id) {
            if(dragged_img_collection.length > 0){
                htmlToImage.toPng(printRef.current).then((base64) => {
                    setIsLoading(true);
                    axios.post(`${api_base_url}update-draft/${id}`, {
                        layout_id: selected_layout,
                        frame_type: selected_design,
                        images: dragged_img_collection,
                        collage_image: base64,
                        is_cart: isContinue,
                    },{
                        headers: {
                          'Authorization': `Bearer ${token}`
                        }
                    }).then((res) => {
                        toast.success("Please Wait collage is Creating");
                        setIsLoading(false);
                        if(isContinue){
                            navigate('/cart');
                        }else{
                            navigate('/user-account');
                        }
                        toast.success(res.data.message);
                    }).catch((error) => {
                        setIsLoading(false);
                        if(error.response.data.errors !== undefined){
                            Object.values(error.response.data.errors).map((v, k) => (
                                toast.error(v[0])
                            ));
                        }else{
                            toast.error(error.response.data.message);
                        }
                    });
                });
            }else{
                toast.error("Please add images first.");
            }
        }

        else {
            if (token) {
                if(dragged_img_collection.length > 0){
                    toast.success("Please Wait collage is Creating");
                    htmlToImage.toPng(printRef.current).then((base64) => {
                        setIsLoading(true);
                        axios.post(`${api_base_url}add-collage`, {
                            layout_id: selected_layout,
                            frame_type: selected_design,
                            images: dragged_img_collection,
                            collage_image: base64,
                            is_cart: isContinue,
                            price: checkCard.current
                        },{
                            headers: {
                            'Authorization': `Bearer ${token}`
                            }
                        }).then((res) => {
                            setIsLoading(false);
                            if(isContinue){
                                navigate('/cart');
                            }else{
                                navigate('/user-account');
                            }
                            toast.success(res.data.message);
                        }).catch((error) => {
                            setIsLoading(false);
                            if(error.response.data.errors !== undefined){
                                Object.values(error.response.data.errors).map((v, k) => (
                                    toast.error(v[0])
                                ));
                            }else{
                                toast.error(error.response.data.message);
                            }
                        });
                    });
                }else{
                    toast.error("Please add images first.");
                }
            }else {
                toast.error("Please login first.");
            }
        }
      }

  
    
    // useEffect(() => {
      
    // }, []);
        
    if (isLoading) {
        return (
        <Box component="div" className={styles.workingScreen}>
            <Grid container={true} sx={{width: '90%', margin: '0 auto'}}>
                <Grid item lg={12} md={12} xs={12} mt={10}>
                    <Box className={styles.innerScreen}>
                        <SkeletonLoader height="500px" width="100%" />
                    </Box>
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                    <Box className={styles.btnsPreviewCart}>
                        <Box className={styles.btnPreview}>
                           <SkeletonLoader height="40px" width="100px" />
                        </Box>
                        <Box className={styles.btnCart}>
                          <SkeletonLoader height="40px" width="100px" />
                        </Box>
                        <Box className={styles.btnCart}>
                         <SkeletonLoader height="40px" width="100px" />
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
        )
    }

    return (
        <Box component="div" className={styles.workingScreen}>
            <Grid container={true} sx={{width: '90%', margin: '0 auto'}}>
                <Grid item lg={12} md={12} xs={12} mt={10}>
                    <Box className={styles.innerScreen} ref={printRef}>
                        {handleCardOrPosterLayout()}
                    </Box>
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                    <Box className={styles.btnsPreviewCart}>
                        <Box className={styles.btnPreview}>
                            <Link to="/design">Discard</Link>
                        </Box>
                        <Box className={styles.btnCart}>
                            <Button onClick={() => saveCollage(false)}>Save</Button>
                        </Box>
                        <Box className={styles.btnCart}>
                            <Button onClick={() => saveCollage(true)}>Continue</Button>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default WorkScreen