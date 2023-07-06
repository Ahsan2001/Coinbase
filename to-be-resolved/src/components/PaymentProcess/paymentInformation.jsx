import {  Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { toast } from 'react-toastify';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api_base_url } from '../../helper/webservices';


const PaymentInformation = () => {
    const { subtotal,set_cart_value,token  } = useSelector(s => s);


    
    
    const [success, setSuccess] = useState(null);
    const [orderID, setOrderID] = useState(null);
    const [paypalData, setPaypalData] = useState("");

    // creates a paypal order
    const createOrder = (data , actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Aumana Images",
                    amount: {
                        currency_code: "USD",
                        value: subtotal,
                    },
                },
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
            setPaypalData(details);
        });
    };
    
    //capture likely error
    const onError = (data, actions) => {
        toast.error("An Error occured with your payment ");
    };
    
    let navigate = useNavigate();
    
    const mergedArray = [...set_cart_value.images, ...set_cart_value.collage_images];

    useEffect(() => {
        if (success) {
            axios.post(`${api_base_url}checkout`, {
                paypal_res: paypalData,
                order_id: orderID,
                cart: mergedArray,
                sub_total: subtotal, 
            },
            {
                headers: {'Authorization': `Bearer ${token}`}
            }
            ).then(res => {
                toast.success("Payment successfull !");
                navigate(`/thankyou/${res?.data?.data[0]?.id}`);
            }).catch(error => {
                Object.values(error.response.data.errors).map((v, k) => (
                    toast.error(v[0])
                ))
            });
        }
    },[success]);


    return (
        <Grid container>
            <Grid item lg={12} md={12} xs={12} >
                    <Box className={styles.centerDiv}>
                        <PayPalButtons
                            style={{ layout: "vertical" }}
                            createOrder={createOrder}
                            onApprove={onApprove}
                            disableFunding='paylater' 
                        />
                    </Box>
            </Grid>
        </Grid>
    )
}

export default PaymentInformation