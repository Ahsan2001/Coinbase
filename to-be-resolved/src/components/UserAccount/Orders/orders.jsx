import React, { useEffect, useState } from 'react'
import {Box, Button, Grid } from '@mui/material';
import styles from "./style.module.css";
import axios from 'axios';
import { api_base_url } from '../../../helper/webservices';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SkeletonLoader from '../../SkeletonLoader';
const Orders = () => {


    const {token} = useSelector(s =>s);

    const [ getOrders, setGetOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getAllOrders = React.useCallback(() => {
        axios.get(`${api_base_url}get-all-orders`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setGetOrders(res.data.data.data)
            setIsLoading(false)
        })
        .catch( (err) =>{
            console.log(err, "err")
            setIsLoading(false)
        })
    }, [token])




    const ViewDetailPage = (id) => {
        let changePath =  `/order-detail/${id}`;
        navigate(changePath);
    }

    useEffect( ()=> {
        getAllOrders()
    }, [getAllOrders]  )


    const navigate = useNavigate();

    const ChangePage = () => {
        let path = `/natural-tour`;
        navigate(path);
    }


    if(isLoading) {
        return(
            <Box component="section" className={styles.cartMainWrap}>

            <Grid container>
  
                <Grid item lg={12} md={12} xs={12} sx={{ px: { lg: 4 } }}>
                      <Box className={styles.my_profile_head}>
                        <h2> <SkeletonLoader height="40px" width="200px" /></h2>
                    </Box>
                </Grid>
  
  
                <Grid item lg={12} md={12} xs={12} sx={{ px: { lg: 4 } }}>
                    <Box className={styles.orderTableMainWrap}>
                       <table>
                          <thead>
                              <tr>
                                <th>Sr #</th>
                                <th>Order Number</th>
                                <th>price</th>
                                <th>status</th>
                                <th>detail</th>
                              </tr>
                          </thead>
                        <tbody>
                              <tr>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                                 
                              </tr>
                              <tr>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                              </tr>
                              <tr>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                                  <td> <SkeletonLoader height="30px" width="100%" /> </td>
                              </tr>
                        </tbody>
                       </table>
                    </Box>
                </Grid>
  
            </Grid>
  
  
        </Box>
        )
    }








    return (


    getOrders.length === 0  ? 


     <Box className="my-profile-bodyy" px={4}>
          <Box className={styles.my_profile_head}>
              <h2>My Orders</h2>
          </Box>

          <Box className={styles.my_profile_payment}>
              <h3>There are no orders placed yet.</h3>
              <Button onClick={ChangePage}>Create Something</Button>
          </Box>
      </Box>
   
   :


      <Box component="section" className={styles.cartMainWrap}>

          <Grid container>

              <Grid item lg={12} md={12} xs={12} sx={{ px: { lg: 4 } }}>
                    <Box className={styles.my_profile_head}>
                      <h2>My Orders</h2>
                  </Box>
              </Grid>


              <Grid item lg={12} md={12} xs={12} sx={{ px: { lg: 4 } }}>
                  <Box className={styles.orderTableMainWrap}>
                     <table>
                        <thead>
                            <tr>
                                <th>Sr #</th>
                                <th>Order Number</th>
                                <th>price</th>
                                <th>status</th>
                                <th>detail</th>
                            </tr>
                        </thead>
                        <tbody>
                         {getOrders.map((item, ind) => {
                             return (
                            <tr key={ind}>
                                <td>{ind+1}</td>
                                <td>{item.order_number}</td>
                                <td>${parseFloat(item.total_price).toFixed(2)}     </td>
                                <td>{item.status}</td>
                                <td  className={styles.clickBtn} onClick={ e => {ViewDetailPage(item.id)}} >View Detail </td>
                            </tr>
                             )
                         })}
                         </tbody>
                     </table>
                  </Box>
              </Grid>



              {/* <Grid item lg={12} md={12} xs={12}>
                  <Box className={styles.Load_btn}>
                      <button >Load More <KeyboardArrowRightIcon/> </button>
                  </Box>
              </Grid> */}




          </Grid>


      </Box>


  )
}

export default Orders