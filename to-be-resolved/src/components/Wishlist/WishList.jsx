import {Box} from "@mui/material";
import React from "react";
import styles from "./style.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";
import {api_base_url} from "../../helper/webservices";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";


const WishList = ({img}) => {

    const {token} = useSelector(s => s);

    const handleWishList = (data) => {
        if (token) {
            axios.get(`${api_base_url}add-wish-list`, {
                params: {
                    category_id: data.category_id,
                    sub_category_id: data.sub_category_id,
                    image_id: data.id
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                toast.success(res.data.message);
            }).catch((error) => {
                if(error.response.data.errors !== undefined){
                    Object.values(error.response.data.errors).map((v, k) => (
                        toast.error(v[0])
                    ));
                }else{
                    toast.error(error.response.data.message);
                }
            });
        } else {
            toast.error("Please login first.");
        }
    }

    return (
        <Box className={styles.RightIcon} onClick={() => handleWishList(img)}>
            <FavoriteIcon/>
        </Box>
    )
}

export default WishList