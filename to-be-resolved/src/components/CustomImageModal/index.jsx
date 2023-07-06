import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import styles from "./styles.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import axios from "axios";
import { api_base_url } from "../../helper/webservices";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";



export default function CustomImagesModal(props) {



    // cart functionilty copy from cart.jsx
    const { token, user } = useSelector(s => s);
    const handleAddToCart = (data) => {
        if (token) {
            axios.get(`${api_base_url}add-to-cart`, {
                params: {
                    user_id: user.id,
                    image_id: data.id
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                toast.success(res.data.message);
            }).catch((error) => {
                if (error.response.data.errors !== undefined) {
                    Object.values(error.response.data.errors).map((v, k) => (
                        toast.error(v[0])
                    ));
                } else {
                    toast.error(error.response.data.message);
                }
            });
        } else {
            toast.error("Please login first.");
        }
    }



    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!props.open);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box className={styles.leftIcon} onClick={handleOpen}>
                <ShoppingCartIcon />
            </Box>


            <Modal
                open={open}
                onClose={handleClose}>
                <Box className={styles.imagesModal}>


                    <Box className={styles.imagesMainCenterWrap}>
                        <img src={props.img.thumbnail_link} alt="img" />
                        <span class={styles.dpi}>300 dpi</span>
                    </Box>




                    <FormControl className={styles.widthFull}>
                        <label id="radio-buttons-group" className={styles.label}>Choose a type of image</label>
                        <RadioGroup name="radio-buttons-group" className={styles.imagesModalContent}>
                            <Box className={styles.imagesBoxDesign}>
                                <FormControlLabel value="Thumbnail" control={<Radio />} label="Thumbnail" />
                            </Box>
                            <Box className={styles.imagesBoxDesign}>
                                <FormControlLabel value="Standard" control={<Radio />} label="Standard" />
                            </Box>
                            <Box className={styles.imagesBoxDesign}>
                                <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                            </Box>
                            <Box className={styles.imagesBoxDesign}>
                                <FormControlLabel value="Large" control={<Radio />} label="Large" />
                            </Box>
                        </RadioGroup>
                    </FormControl>







                    <FormControl className={styles.widthFull}>
                        <label id="radio-buttons-group" className={styles.label}>Choose a size of image</label>
                        <RadioGroup name="radio-buttons-group" className={styles.imagesModalContent}>
                            <Box className={styles.imagesBoxDesign}>
                                <FormControlLabel value="12X18" control={<Radio />} label="12X18" />
                            </Box>
                            <Box className={styles.imagesBoxDesign}>
                                <FormControlLabel value=" 24X16" control={<Radio />} label=" 24X16" />
                            </Box>
                            <Box className={styles.imagesBoxDesign}>
                                <FormControlLabel value="30X20" control={<Radio />} label="30X20" />
                            </Box>
                            <Box className={styles.imagesBoxDesign}>
                                <FormControlLabel value="32X18" control={<Radio />} label="32X18" />
                            </Box>
                        </RadioGroup>
                    </FormControl>













                    <Box className={styles.buttonMain}>
                    <Button
                        style={{
                            backgroundColor: "#fff",
                            border: "1px solid #2E2E2E",
                            borderRadius: "27px",
                            fontFamily: 'Josefin Sans',
                            padding: "8px 16px 6px 16px",
                            color: "#2E2E2E",
                            fontSize: "14px",
                        }}

                        variant="contained"
                        onClick={() => handleClose()}
                    >
                        Cancel
                    </Button>

                    <Button
                        style={{
                            backgroundColor: "#2E2E2E",
                            border: "1px solid #2E2E2E",
                            borderRadius: "27px",
                            fontFamily: 'Josefin Sans',
                            padding: "8px 16px 6px 16px",
                            color: "#fff",
                            fontSize: "14px",
                        }}

                        variant="contained"
                            onClick={() => handleAddToCart(props.img)}
                    >
                        Add to Cart 
                    </Button>
                     </Box>           
                </Box>
            </Modal>
        </>
    );
}