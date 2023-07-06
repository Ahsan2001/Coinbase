import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from "./styles.module.css"


const CustomLightbox = ({open, handleClose, imgUrl}) => {



  return (
      <Modal open={open} onClose={handleClose} sx={{backgroundColor: "black"}}>
        <Box className={styles.imagesModal}>
            <Box className={styles.imagesBoxDesign}>
                  <img src={imgUrl} alt="urls" />
                  <Box className="watermarkImageBig"></Box>
                <button className={styles.closeBtn} onClick={handleClose} >x</button>
            </Box>
        </Box>
      </Modal>
  )
}

export default CustomLightbox