import { Skeleton } from '@mui/material';
import styles from './style.module.css'
import React from 'react';

const SkeletonLoader = (props) => {
  return (
      <Skeleton className={styles.transfoRm}  
                animation="wave" 
                variant={props?.rectangular} 
                width={props?.width}
                height={props?.height} />
  )
}

export default SkeletonLoader