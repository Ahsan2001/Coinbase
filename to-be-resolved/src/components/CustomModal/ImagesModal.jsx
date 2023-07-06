import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Modal from '@mui/material/Modal';
import styles from "./styles.module.css"
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { api_base_url } from '../../helper/webservices';
import { saveAs } from 'file-saver';
import card1 from "../../assets/images/adjutorimages/card-I.jpg";
import card2 from "../../assets/images/adjutorimages/card-II.jpg";
import card3 from "../../assets/images/adjutorimages/card-III.jpg";
import axios from 'axios';





export default function ImagesModal() {
    const { token,user } = useSelector(s => s);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);


    const DownloadImage = (imgUrl) => {
            if(user?.free_image === "1" ){
                toast.error("You already download one free image")
                return false
            }  
            else {
            axios.post(`${api_base_url}update-user-info`, {
                free_image: 1,
            }, {
                headers: {
                'Authorization': `Bearer ${token}`
                },
            })
            .then((res) => {
                saveAs(imgUrl, 'Adjutor-Image.jpg')
            })
            .catch(error => {
                toast.error(error.response.data.errors)
            })
        }
    }


    const handleOpen = () => {
        if (!token) {
            toast.error("Please login first.")
        } else {
            setOpen(true)
        }
    }




   


    return (
        <>
            <Button className={styles.MainBtn} onClick={handleOpen}>Take the stewardship pledge</Button>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box className={styles.imagesModal}>
                    <Box className={styles.imagesModalHeader}>
                        <h3> Download one of them for free but only once.</h3>
                    </Box>

                    <Box className={styles.imagesModalContent}>
                        <Box className={styles.imagesBoxDesign}>
                            <img src={card1} alt="urls" />
                            <Box className={styles.hoverableEffectMain}>
                                <DownloadIcon onClick={ (e) =>  DownloadImage(card1)} />
                            </Box>
                        </Box>
                        <Box className={styles.imagesBoxDesign}>
                            <img src={card2} alt="urls" />
                            <Box className={styles.hoverableEffectMain}>
                                <DownloadIcon  onClick={(e) => DownloadImage(card2)}/>
                            </Box>
                        </Box>
                        <Box className={styles.imagesBoxDesign}>
                            <img src={card3} alt="urls" />
                            <Box className={styles.hoverableEffectMain}>
                                <DownloadIcon  onClick={(e) => DownloadImage(card3)}/>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Modal>
        </>
    );
}