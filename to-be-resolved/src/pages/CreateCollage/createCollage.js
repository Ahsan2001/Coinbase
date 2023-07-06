import React, {useEffect, useState} from 'react';
import Layout from "../../layout";
import styles from "../../components/CreateDesigns/step3/style.module.css";
import {Grid} from "@mui/material";
import {AdjustBorder, BrowseImage, SelectLayout, Sidebar, WorkScreen} from "../../components/Dashboard";
import Box from "@mui/material/Box";
import {store} from "../../redux/store";
import actions from "../../redux/actions";
import { useSelector } from 'react-redux';


const CreateCollage = () => {


    const {set_draft_status } = useSelector(s=>s);
    const { setDraggedImgCollection } = actions;
    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        if(!set_draft_status){
            store.dispatch(setDraggedImgCollection([]));
            console.log("I AM RUNNING IN CREATE COLLAGE")
        }
    }, []);
    

    const setActiveTabVal = (val) => {
        setActiveTab(val);
    }

    const renderEditorOption = () => {
        if(activeTab === 1){
            return <BrowseImage />;
        }else if(activeTab === 2){
            return <SelectLayout />;
        }else{
            return <AdjustBorder />;
        }
    }

    return (
        <Layout>
            <Box component="section" className={styles.Dashboard_MAIN}>
                <Grid container>
                    <Grid item lg={1} xs={1} md={1}>
                        <Sidebar activeTab={activeTab} setActiveTabVal={setActiveTabVal}/>
                    </Grid>

                    <Grid item lg={3} xs={3} md={3}>
                        {renderEditorOption()}
                    </Grid>

                    <Grid item lg={8} xs={8} md={8}>
                        <WorkScreen />
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

export default CreateCollage