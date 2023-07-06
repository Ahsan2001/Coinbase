import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Box, Button, Grid, Typography } from '@mui/material';
import styles from  "./style.module.css";
import BillingAddressTab from './billingAddressTab';
import PaymentInformation from "./paymentInformation"
// import SelectImageTab from './selectImageTab';


const PaymentProcess = () => {

  const [tabIndex, setTabIndex] = useState(0);

  let Back = (e) => {
    e.preventDefault()
    setTabIndex(tabIndex + -1);
  }

  return (
    <Box component="section" className={styles.checkoutMainWrap}>
        <Grid container sx={{ width: '80%', margin: '0 auto' }}>
            <Grid item lg={8} md={12} xs={12} sx={{ margin: '0 auto' }}>
              <Typography variant="h3">Checkout</Typography>
                <Tabs  selectedIndex={tabIndex} onSelect={(tabIndex) => setTabIndex(tabIndex)}>

                  <TabList>
                    {/* <Tab>Test</Tab> */}
                    <Tab>Billing Address</Tab>
                    <Tab>Payment Information</Tab>
                  </TabList>
{/* 
                  <TabPanel>
                      <SelectImageTab />
                  </TabPanel> */}


                  <TabPanel>
                    <Box component="section" className={styles.billingAddress}>
                        <BillingAddressTab setTabIndex={setTabIndex} tabIndex={tabIndex} />
                    </Box>
                  </TabPanel>


                  <TabPanel>
                        <Box className={styles.paymentInformation}>
                            <PaymentInformation />
                            <Box className={styles.btnsMainWrap_3}>
                                <Button variant="text" onClick={  (e) => Back(e)}>Back</Button>
                            </Box>
                        </Box>
                  </TabPanel>
                </Tabs>
              </Grid>
        </Grid>
    </Box>
  )
}

export default PaymentProcess