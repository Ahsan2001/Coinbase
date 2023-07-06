import {Grid, Typography} from '@mui/material'
import {Box} from '@mui/system'
import React, { useEffect, useState } from 'react'
import styles from "./style.module.css";
import {Link} from "react-router-dom";
import { store } from "../../../redux/store";
import actions from "../../../redux/actions/index";

const Step1 = () => {


    const { setDesign } = actions;
    const [checkDevice , setCheckDevice] = useState(false);

    const handleDesignSelection = (designType) => {
        store.dispatch(
            setDesign(designType)
        );
    }


    useEffect(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 1024){
            setCheckDevice(true)
        }
      }, []); 


   
      // Usage example
      
    //   if (isLessThan1024) {
    //     // Code to run when the window width is less than 1024
    //     console.log("Window width is less than 1024");
    //   } else {
    //     // Code to run when the window width is greater than or equal to 1024
    //     console.log("Window width is greater than or equal to 1024");
    //   }
      








    return (
        <Box component="section" className={styles.MainStepsWrap}>
            <Grid container className="container">


                {checkDevice ? <h1 className={styles.resizeHeading}>Please use Design Tool in Desktop or Laptop device. </h1> : 
                <>
                    <Grid item lg={12} xs={12} align="center">
                        <Typography variant="h1">Create Your Own Collage Designs</Typography>
                        <Typography variant="h2"><span>1</span>Choose Frame Size</Typography>
                    </Grid>
                    <Grid item lg={8} xs={12} align="center" sx={{margin: '0 auto'}}>
                        <Grid container className="container">
                            <Grid item lg={6} md={6} xs={12} p={2} >
                                <Box component="div" className={styles.card_div}>
                                    <Box component="div" className={styles.card_size}>
                                        <Link to="/choose-layout" onClick={() => handleDesignSelection("card")}>
                                            <Typography variant="h3">4x6"</Typography>
                                            <Typography variant="h5">Card Size</Typography>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12} p={2}>
                                <Box component="div" className={styles.poster_div}>
                                    <Box component="div" className={styles.poster_size}>
                                        <Link to="/choose-layout" onClick={() => handleDesignSelection("poster")}>
                                            <Typography variant="h3">20x30"</Typography>
                                            <Typography variant="h5">Poster Size</Typography>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
               </>
                }
            </Grid>
        </Box>
    )
}

export default Step1