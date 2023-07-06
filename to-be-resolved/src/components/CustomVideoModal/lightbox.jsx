import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from "./styles.module.css"


const CustomVideoModal = ({open, handleClose}) => {

const src = "https://aumana.org/assets/video/Aumana.mp4";


  return (
      <Modal open={open} onClose={handleClose} sx={{backgroundColor: "black"}}>
        <Box className={styles.imagesModal}>
            <Box className={styles.imagesBoxDesign}>
                  <video width="100%" controls >
                        <source src={src} type="video/mp4" />
                  </video>
                 
                <button className={styles.closeBtn} onClick={handleClose} >x</button>
            </Box>
        </Box>
      </Modal>
  )
}

export default CustomVideoModal