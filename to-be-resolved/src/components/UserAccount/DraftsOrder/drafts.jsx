import React, { useEffect, useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import styles from "./style.module.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import { api_base_url, img_base_url } from '../../../helper/webservices';
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import SkeletonLoader from '../../SkeletonLoader';
import { toast } from 'react-toastify';
import EditIcon from '@mui/icons-material/Edit';
import { store } from '../../../redux/store';
import actions from '../../../redux/actions';


const Drafts = () => {

    const {token,dragged_img_collection } = useSelector(s=>s);
    const [getDrafts, setGetDrafts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { setDraggedImgCollection,setLayout,setFullPageLoader,setDesign,setDraftData } = actions;


    function getAllDrafts () {
        axios.get(`${api_base_url}get-draft-collage-images`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setGetDrafts(res.data.data);
            setIsLoading(false);
           
        }).catch((err) => {
            console.log(err, "err")
            setIsLoading(false);
        })
    }



    useEffect(() => {
        getAllDrafts()
    }, [])



    const navigate = useNavigate();

    const deleteCollage =  (id) => {
        store.dispatch(setFullPageLoader(true))
        axios.delete( `${api_base_url}delete-draft/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            getAllDrafts()
        store.dispatch(setFullPageLoader(false))
            toast.success("item deleted successfully")
        })
        .catch((err) => {
            console.log(err, "err")
        })
    }
    

    


    const ChangePage = React.useCallback((id) => { 
        store.dispatch(setFullPageLoader(true))
        store.dispatch(setDraggedImgCollection([]));
        axios.get(`${api_base_url}edit-draft/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            store.dispatch(setLayout(Number(res.data?.data?.layout_id)));
            store.dispatch(setDraftData(true));
            const newDraggedImgCollection = res?.data?.data?.collage_images.map((value) => {
                return {
                    id: value.image_id,
                    image: img_base_url+value?.image?.attribute_images[1]?.image,
                    index: Number(value.layout_index),
                    is_converted: Number(value.is_converted),
                    converted_image: value.converted_image
                }
            });
            navigate(`/create-collage`, { state: { id } });
            store.dispatch(setDraggedImgCollection([...dragged_img_collection, ...newDraggedImgCollection]));
            store.dispatch(setDesign(res.data.data.frame_type))
            store.dispatch(setFullPageLoader(false))

         
        }).catch((err) => {
            console.log(err, "err")
        })
    }, [token,setLayout,dragged_img_collection,setDraggedImgCollection]);





    if (isLoading) {
        return (
            <Box component="section" className={styles.cartMainWrap}>
            <Grid container>
                <Grid item lg={12} md={12} xs={12} px={4}>
                    <Box className={styles.my_profile_b_head} pb={5} >
                         <SkeletonLoader height="40px" width="200px" />
                    </Box>
                </Grid>
                <Grid container px={2} >
                    <Grid item lg={3} md={4} px={2} >
                        <Box item>
                            <Box className={styles.draftBox}>
                                <SkeletonLoader height="150px" width="100%" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} px={2} >
                        <Box item>
                            <Box className={styles.draftBox}>
                                <SkeletonLoader height="150px" width="100%" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} px={2} >
                        <Box item>
                            <Box className={styles.draftBox}>
                                <SkeletonLoader height="150px" width="100%" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} px={2} >
                        <Box item>
                            <Box className={styles.draftBox}>
                                <SkeletonLoader height="150px" width="100%" />
                            </Box>
                        </Box>
                    </Grid>


                {/* <Grid item lg={12} md={12} xs={12}>
                    <Box className={styles.Load_btn}>
                        <button >Load More <KeyboardArrowRightIcon /> </button>
                    </Box>
                </Grid> */}

                </Grid>
            </Grid>
        </Box>
        )
    }





    return (
        getDrafts.length === 0 ?
            <Box className="my-profile-bodyy"  sx={{ px: { lg: 4 } }}>
                <Box className={styles.my_profile_b_head}>
                    <h2>My Drafts</h2>
                </Box>
                <Box className={styles.my_profile_payment}>
                    <h3>There are no drafts created yet.</h3>
                    <Button onClick={ChangePage}>Create Something</Button>
                </Box>
            </Box>
            :
            <Box component="section" className={styles.cartMainWrap}>
                <Grid container>
                    <Grid item lg={12} md={12} xs={12}  sx={{ px: { lg: 4 } }}>
                        <Box className={styles.my_profile_b_head}>
                            <h2>My Drafts</h2>
                        </Box>
                    </Grid>
                    <Grid container  sx={{ px: { lg: 2 } }} >
                        {getDrafts.map((item, ind) => {
                            return (
                            <Grid item  lg={3} md={12} xs={12} px={2} mb={3}  key={ind}>
                                <Box item>
                                    <Box className={styles.draftBox}>
                                        <img src={item.collage_image} alt="text" />
                                        <Box className={styles.editBtn} onClick={ () => ChangePage(item.id)} > <EditIcon  />  </Box>   
                                        <Box className={styles.deleteBtn} onClick={ () => deleteCollage(item.id)}>  <DeleteOutlineIcon /> </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Box>
    )
}

export default Drafts