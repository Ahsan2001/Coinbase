import React from 'react';
import styles from './stylesheet/styles.module.css'
import { Grid } from '@mui/material';
import { useSelector } from "react-redux";
import ResuableEditBox from '../Reusable_Component/innerCard.jsx';

const LayoutOne = () => {



    const {  adjust_border_size, adjust_border_color,dragged_img_collection } = useSelector(s => s);

    let EditImage = []

    dragged_img_collection.map((item) => {
        EditImage.push(item)
    })



    return (
        <>
            <Grid container={true} sx={{ width: '40%', margin: '0 auto' }} className={`${styles.BorderAllSides}  ${styles.custom_images_fit}`} style={{ border: `${adjust_border_size}px solid ${adjust_border_color}` }}>
                <Grid item lg={12} md={12} xs={12}>
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Four_Border}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={0}
                        PreviousImage={EditImage[0]}
                    />
                </Grid>
            </Grid>

        </>
    )
}

export default LayoutOne