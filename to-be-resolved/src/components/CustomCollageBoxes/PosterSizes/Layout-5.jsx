import React from 'react'
import { Grid } from '@mui/material'
import styles from './stylesheet/styles.module.css'
import {useSelector} from "react-redux";
import ResuableEditBox from '../Reusable_Component/innerCard.jsx';

const LayoutFive = () => {


  const {  adjust_border_size, adjust_border_color,dragged_img_collection } = useSelector(s => s);

  let EditImage = []

  dragged_img_collection.map((item) => {
      EditImage.push(item)
  })



  return (
      <Grid container={true} sx={{ width: '40%', margin: '0 auto' }} className={`${styles.CenterLines}  ${styles.custom_images_fit}`} style={{border: `${adjust_border_size}px solid ${adjust_border_color}`}}>
          <Grid item lg={4} md={4} xs={4}>
              <ResuableEditBox
                editDeleteBtn={styles.editDeleteBtn}
                hoverEffectBtn={styles.hoverEffectBtn}
                Four_Border={styles.Border_Left_Right}
                index={0}
                PreviousImage={EditImage[0]}
              />
          </Grid>
          <Grid item lg={4} md={4} xs={4}>
              <ResuableEditBox
                editDeleteBtn={styles.editDeleteBtn}
                hoverEffectBtn={styles.hoverEffectBtn}
                Four_Border={styles.Border_Left_Right}
                index={1}
                PreviousImage={EditImage[1]}
              />
          </Grid>
          <Grid item lg={4} md={4} xs={4}>
              <ResuableEditBox
                editDeleteBtn={styles.editDeleteBtn}
                hoverEffectBtn={styles.hoverEffectBtn}
                Four_Border={styles.Border_Left_Right}
                index={2}
                PreviousImage={EditImage[2]}
              />
          </Grid>
      </Grid>
    )
}

export default LayoutFive