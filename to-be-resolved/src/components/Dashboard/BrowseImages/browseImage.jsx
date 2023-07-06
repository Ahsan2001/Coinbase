import {Button, Grid} from '@mui/material';
import {Box} from '@mui/system';
import React, {useEffect, useState} from 'react';
import styles from "./style.module.css";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import {store} from "../../../redux/store";
import actions from "../../../redux/actions";
import axios from "axios";
import {api_base_url, img_base_url} from "../../../helper/webservices";
import {useSelector} from "react-redux";
import SkeletonLoader from "../../SkeletonLoader";

const BrowseImageSkeleton = () => {

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Box component="section" className={styles.Dashboard_Middle}>
            <Grid container>
                <Grid item lg={12} md={6} className={styles.Dashboard_Middle_Left}>

                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>


                        <TabList className={styles.titleMain}>
                            <Tab> Natural Wonder Lands </Tab>
                            <Tab> Images of Interests </Tab>
                        </TabList>

                        <TabPanel>

                            <Box className={styles.container}>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                            </Box>



                        </TabPanel>

                        <TabPanel >
                            <Box className={styles.container}>
                                <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                                 <Grid item lg={4} px={2} className={styles.BROWSE_Image} sx={{margin : "10px 0"}}>
                                    <SkeletonLoader width="100%" height="80px" />
                                </Grid>
                            </Box>
                        </TabPanel>

                    </Tabs>

                </Grid>
            </Grid>
        </Box>
    )
}

const BrowseImage = () => {

    const { setLoader, setDraggedImg } = actions;
    const { token, image_loading, dragged_img } = useSelector(s => s);
    const [ dataOfNaturalWonderland, setDataOfNaturalWonderland ] = useState([]);
    const [ dataImagesOfInterest, setDataImagesOfInterest ] = useState ([]);
    const [ nextUrl, setNextUrl ] = useState(null);
    const [ prevUrl, setPrevUrl ] = useState(null);
    const [ activeTab, setActiveTab ] = useState("Natural Wonderland");
    const [ tabIndex, setTabIndex ] = useState(0);

    const getNaturalWonderlandImages = React.useCallback((url = null) => {
        if(url === null){
            url = `${api_base_url}get-sub-category-by-image`;
        }
        axios.get(url,{
        }).then((res) => {
            setDataOfNaturalWonderland(res.data.data.data);
            setNextUrl(res.data.data.next_page_url);
            setPrevUrl(res.data.data.prev_page_url);
            store.dispatch(setLoader(false));
        })
        .catch((err) => {
           console.clear();
        });
    }, [setLoader])


    useEffect(() => {
        store.dispatch(setLoader(true));
        getNaturalWonderlandImages();
    }, [getNaturalWonderlandImages,setLoader]);

    const next = () => {
        if(activeTab === "Natural Wonderland"){
            getNaturalWonderlandImages(nextUrl);
        } else{
            getWishListData(nextUrl);
        }
    }

    const previous = () => {
        if(activeTab === "Natural Wonderland"){
            getNaturalWonderlandImages(prevUrl);
        } else{
            getWishListData(prevUrl);
        }
    }

    const handleDraggedImg = (e, imageId) => {
        if(dragged_img === null){
            store.dispatch(setDraggedImg({id:imageId, image: e.target.src}));
        }
    }

    const handleDraggedLeaveImg = () => {
        store.dispatch(setDraggedImg(null));
    }

    const TabHandler = (active) => {
        setActiveTab(active);
        setNextUrl(null);
        setPrevUrl(null);
        if(active === "Natural Wonderland"){
            getNaturalWonderlandImages();
        } else{
            getWishListData();
        }
    }


    function getWishListData(url = null) {
        if(url === null){
            url = `${api_base_url}get-wish-list`;
        }
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then((res) => {
            setDataImagesOfInterest(res.data.data.data);
            setNextUrl(res.data.data.next_page_url);
            setPrevUrl(res.data.data.prev_page_url);
            store.dispatch(setLoader(false));
        }).catch((err) => {
            console.clear();
        });
    }

    if (image_loading) {
        return <BrowseImageSkeleton/>
    } else {
        return (
            <Box component="section" className={styles.Dashboard_Middle}>
                <Grid container>
                    <Grid item lg={12} md={6} className={styles.Dashboard_Middle_Left}>

                        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                            <TabList className={styles.titleMain}>
                                <Tab onClick={() => TabHandler("Natural Wonderland")}> Natural Wonder Lands </Tab>
                                <Tab onClick={() => TabHandler("Images of Interests")}> Images of Interests </Tab>
                            </TabList>
                            <TabPanel>
                                <Box className={styles.container}>
                                    {dataOfNaturalWonderland?.map((item, ind) => {


                                        return (
                                            <Grid item key={ind} lg={4} px={2} className={styles.BROWSE_Image}>
                                                <img src={img_base_url+item?.attribute_images[1]?.image} alt={item.name} draggable
                                                    onDrag={(e) => {
                                                        e.preventDefault();
                                                        handleDraggedImg(e, item.id);
                                                    }}
                                                    onDragEnd={(e) => {
                                                        e.preventDefault();
                                                        handleDraggedLeaveImg();
                                                    }} />
                                            </Grid>)
                                        })}


                                </Box>

                                <Box component="div" className={styles.nextPrevBtn}>
                                    {
                                        prevUrl && <Button variant="text" onClick={previous}> <KeyboardArrowLeftRoundedIcon/> Prev</Button>
                                    }
                                    {
                                        nextUrl && <Button variant="text" onClick={next}> Next <KeyboardArrowRightRoundedIcon/></Button>
                                    }
                                </Box>

                            </TabPanel>

                            <TabPanel>

                                <Box className={styles.container}>
                                    {
                                        dataImagesOfInterest?.map(function (item, ind) {
                                            return (
                                                <Grid item key={ind} lg={4} px={2} className={styles.BROWSE_Image}>
                                                    <img src={img_base_url + item.images?.attribute_images[1]?.image}
                                                         alt={"test"}
                                                         draggable
                                                         onDrag={(e) => {
                                                             e.preventDefault();
                                                             handleDraggedImg(e, item.image_id);
                                                            }}
                                                         onDragEnd={(e) => {
                                                             e.preventDefault();
                                                             handleDraggedLeaveImg();
                                                            }}
                                                    />
                                                </Grid>
                                            )
                                        })
                                    }

                                </Box>

                                <Box component="div" className={styles.nextPrevBtn}>
                                    {
                                        prevUrl &&
                                        <Button variant="text" onClick={previous}> <KeyboardArrowLeftRoundedIcon/> Prev
                                        </Button>
                                    }
                                    {
                                        nextUrl &&
                                        <Button variant="text" onClick={next}> Next <KeyboardArrowRightRoundedIcon/>
                                        </Button>
                                    }
                                </Box>


                            </TabPanel>

                        </Tabs>

                    </Grid>
                </Grid>
            </Box>
        )
    }
}


export default BrowseImage