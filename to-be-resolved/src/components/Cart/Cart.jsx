import {Box} from "@mui/material";
import React, { useEffect } from "react";
import styles from "./style.module.css";
import axios from "axios";
import {api_base_url} from "../../helper/webservices";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import actions from '../../redux/actions';
import { store } from '../../redux/store';

const Cart = ({img}) => {

    const {token, user} = useSelector(s => s);
    const { setBuyerCart } = actions;


    const handleAddToCart = React.useCallback((data) => {
        if (token) {
            axios.get(`${api_base_url}add-to-cart`, {
                params: {
                    user_id: user.id,
                    image_id: data.id,
                    // image_type: "thumbnail",
                    // image_size: "12x16"
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                toast.success(res.data.message);
                store.dispatch(setBuyerCart(res.data.data.length));
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
    },[token,setBuyerCart ])

    useEffect( ()=> {
        handleAddToCart()
    }, [handleAddToCart,setBuyerCart]  )



    return (
        <Box className={styles.leftIcon} onClick={() => handleAddToCart(img)}>
            <ShoppingCartIcon />
        </Box>
    )
}

export default Cart