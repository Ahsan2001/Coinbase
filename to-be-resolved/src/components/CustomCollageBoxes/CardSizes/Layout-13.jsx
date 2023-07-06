import React from 'react'
import { Grid, Box } from '@mui/material'
import styles from './stylesheet/styles.module.css'
import { useSelector } from "react-redux";
import ResuableEditBox from '../Reusable_Component/innerCard.jsx';



const LayoutThirteen = () => {

    const {  adjust_border_size, adjust_border_color,dragged_img_collection } = useSelector(s => s);

    let EditImage = []

    dragged_img_collection.map((item) => {
        EditImage.push(item)
    })


  

    return (
        <Box component="div" className={`${styles.Six_Border_Images}  ${styles.custom_images_fit}`} style={{border: `${adjust_border_size}px solid ${adjust_border_color}`}}>
            <Grid container>

                <Grid item lg={6} md={6} xs={6}>
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_Four}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={0}
                        PreviousImage={EditImage[0]}
                    />
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_Four}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={1}
                        PreviousImage={EditImage[2]}
                    />
                </Grid>



                <Grid item lg={6} md={6} xs={6}>
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_Four}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={2}
                        PreviousImage={EditImage[1]}
                    />
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_Four}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={3}
                        PreviousImage={EditImage[4]}
                    />
                </Grid>



                <Grid item lg={6} md={6} xs={6}>
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_Four}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={4}
                        PreviousImage={EditImage[3]}
                    />
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_Four}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={5}
                        PreviousImage={EditImage[5]}
                    />
                </Grid>




                
            </Grid>
        </Box>
    )
}

export default LayoutThirteen