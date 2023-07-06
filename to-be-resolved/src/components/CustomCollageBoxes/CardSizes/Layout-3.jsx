import React from 'react'
import { Grid, Box } from '@mui/material'
import styles from './stylesheet/styles.module.css'
import { useSelector } from "react-redux";
import ResuableEditBox from '../Reusable_Component/innerCard.jsx';



const LayoutThree = () => {


    
    const {  adjust_border_size, adjust_border_color,dragged_img_collection } = useSelector(s => s);

    let EditImage = []

    dragged_img_collection.map((item) => {
        EditImage.push(item)
    })

 


    return (
        <Box component="div" className={`${styles.OneTopBottom}  ${styles.custom_images_fit}`} style={{border: `${adjust_border_size}px solid ${adjust_border_color}`}}>
            <Grid container>
                <Grid item lg={12} md={12} xs={12}>
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_Bottom}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        PreviousImage={EditImage[0]}
                        index={0}
                    />
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_Top}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={1}
                        PreviousImage={EditImage[1]}
                    />
                    
                </Grid>
            </Grid>
        </Box>
    )
}


export default LayoutThree