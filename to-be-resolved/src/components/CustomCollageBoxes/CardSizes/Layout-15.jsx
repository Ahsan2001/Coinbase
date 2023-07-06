import React from 'react'
import { Grid, Box } from '@mui/material'
import styles from './stylesheet/styles.module.css'
import { useSelector } from "react-redux";
import ResuableEditBox from '../Reusable_Component/innerCard.jsx';


const LayoutFifteen = () => {

    const {  adjust_border_size, adjust_border_color,dragged_img_collection } = useSelector(s => s);
    let EditImage = []
    dragged_img_collection.map((item) => {
        EditImage.push(item)
        
    })


    return (
        <Box component="div" className={`${styles.Two_Border_Images}  ${styles.custom_images_fit}`} style={{border: `${adjust_border_size}px solid ${adjust_border_color}`}}>
            <Grid container>
                <Grid item lg={3} md={3} xs={3}>
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_Right}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={0}
                        PreviousImage={EditImage[1]}
                    />
                </Grid>
                <Grid item lg={9} md={9} xs={9}>
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_left}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={1}
                        PreviousImage={EditImage[0]}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default LayoutFifteen