import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styles from './style.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useSelector } from "react-redux";
import axios from "axios";
import { api_base_url } from "../../../helper/webservices";
import { store } from "../../../redux/store";
import actions from "../../../redux/actions";
import { useEffect } from "react";
import NatureWounderLandTour from "./natureWounderLandTour";


const { storeNaturalTourSubCategory, setSubCateogoryApi, subValueWonderland, setNextPageUrlRedux, setCateogoryImages, setPageNumber } = actions;

export default function NatureTabs() {

    const { natural_tour_sub_category_data, sub_cateogry_api, sub_value_Wonderland, nextPageRedux, catImages } = useSelector(s => s);
  
    useEffect(() => {
        async function fetchData() {
            if (!natural_tour_sub_category_data) {
                await getData();
            } else {
                getImages(0, sub_value_Wonderland, nextPageRedux);
            }
        }
        fetchData();
    }, [natural_tour_sub_category_data, sub_value_Wonderland]);

    async function getData() {
        try {
            const res = await axios.get(`${api_base_url}get-category-by-image`, {
                params: {
                    category_id: 1
                }
            });
            store.dispatch(storeNaturalTourSubCategory(res.data.data));
            if (Object.keys(res.data.data).length > 0) {
                getImages(0, 1);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getImages = (index, id, nextPage = null) => {
        const subCatId = id ? id : natural_tour_sub_category_data[index].id;
        store.dispatch(subValueWonderland(subCatId));
        let url = `${api_base_url}get-sub-category-by-image`;
        if (nextPage) {
            url = nextPage;
        }
        axios.get(url, { params: { sub_category_id: subCatId } })
            .then((res) => {
                if (nextPageRedux !== null && nextPage !== null) {
                    store.dispatch(setCateogoryImages([...catImages, ...res.data.data.data]))
                } else {
                    store.dispatch(setCateogoryImages(res.data.data.data))
                }
                store.dispatch(setNextPageUrlRedux(res.data.data.next_page_url))
                store.dispatch(setPageNumber(`${res.data.data.path}?page=${res.data.data.current_page}`))
            })
            .catch((err) => {
                console.log(err)
            });
    };


    const SelectTabs = (index) => {
        store.dispatch(setSubCateogoryApi(index));
        store.dispatch(setCateogoryImages(null));
        getImages(index);
    }


    return (
        <Box component="div" className={styles.NatureTabsMain}>
            <Grid container className='container'>
                <Grid item lg={12} md={12} xs={12} sx={{ margin: '0 auto 40px' }}>
                    <Typography variant="h1">Natural Wonderlands Tours</Typography>
                    <Tabs selectedIndex={sub_cateogry_api} onSelect={SelectTabs}>
                        <TabList className={styles.titleMain} >
                            <Box className={styles.customDimensionSet}>
                                {natural_tour_sub_category_data?.map((item, index) => {
                                    return <Tab key={index}>{item.name}</Tab>
                                })}
                            </Box>
                        </TabList>
                        <TabList className={styles.titleMain}>
                            {natural_tour_sub_category_data?.map((item, index) => {
                                return (
                                    <TabPanel key={index}>
                                        <NatureWounderLandTour data={catImages} nextPageUrl={nextPageRedux} getImages={getImages} index={index} catId={natural_tour_sub_category_data[index].id} />
                                    </TabPanel>
                                )})}
                        </TabList>
                    </Tabs>
                </Grid>
            </Grid>
        </Box>
    );
}
