import {Box, Grid, Typography} from '@mui/material'
import React from 'react'
import styles from "./style.module.css"
import {useSelector} from "react-redux";
import actions from "../../../redux/actions";
import {store} from "../../../redux/store";
import {Link} from "react-router-dom";

const SelectLayout = () => {
    const {data, selected_design, selected_layout} = useSelector(s => s);
    const { setLayout, setDraggedImgCollection } = actions;

    const handleLayoutSelection = (layout) => {
        store.dispatch(setLayout(layout));
        if(layout !== selected_layout){
            store.dispatch(setDraggedImgCollection([]));
            console.log("I AM RUNNING IN Select layout")
        }
    }

    return (
        <Box component="div" className={styles.Dashboard_Middle}>
            <Typography variant="h4">Choose Layout</Typography>
            <Grid container p={2}>
                {data[selected_design].data.map((item, index) => {
                        return (
                            <Grid key={index} item lg={4} xs={12} md={6}>
                                <Box className={styles.layout_Img}>
                                    <Link to="/create-collage">
                                        <img src={item.url} alt={item.id} onClick={() => handleLayoutSelection(item.id)}/>
                                    </Link>
                                </Box>
                            </Grid>
                        )
                    }
                )}
            </Grid>
        </Box>
    )
}

export default SelectLayout