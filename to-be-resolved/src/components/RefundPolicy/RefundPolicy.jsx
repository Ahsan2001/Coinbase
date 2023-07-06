import React from 'react'
import styles from './refundpolicy.module.css'
import { Box, Grid, } from '@mui/material'


const RefundPolicy = () => {
  return (
      <Box component="section" className={styles.aboutParentBox}>
        <Grid container p={5} sx={{ width: '80%', margin: '0 auto' }} >
          <Grid item lg={12} md={12} xs={12}>
            <div className={styles.aboutRefundPolicy}>
              <h1>Return and Refund Policy</h1>
              <h6>All sales are final. Notwithstanding any reason, an item purchased from our web site cannot be returned
                and neither will proceeds from such purchase be refunded to you</h6>
            </div>
          </Grid>
        </Grid>
      </Box>
  )
}

export default RefundPolicy