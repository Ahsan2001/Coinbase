import React from "react";
import styles from "./styles.module.css";
import { Box, Grid, Typography,Button } from '@mui/material';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from "react-router-dom";
// import poster from "./images/poster.png"
// import CustomVideoModal from "../CustomVideoModal/lightbox";
import BlockAnimation from "../../utils/BlockAnimation";


const GreetingBanner = () => {


  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const handlePlayClick = () => {
  //   handleOpen();
  // };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/design");
  };

  const src = "https://aumana.org/assets/video/Aumana.mp4";


  return (
    <Box component="section" className={styles.GreetingBanner}>
        <Grid container  p={5}  spacing={12}>
            <Grid item lg={7} md={6} xs={12}  className={styles.selfCenter} >
                <Typography variant="h1">
                   <BlockAnimation type="blocks" text="Send greeting or inspirational cards to your loved ones by using Aumana's NW College Design Tool." />
                </Typography>
                <Button className={styles.createNow}   onClick={handleButtonClick}>Create Now</Button>
            </Grid>
            <Grid item lg={5} md={6} xs={12} align="center" alignItems="center"  data-aos="fade-up" data-aos-duration='1300'>
                <Box className={styles.innerImage}>
                  <video width="100%" controls >
                        <source src={src} type="video/mp4" />
                  </video>
                    {/* <button onClick={handlePlayClick}><PlayArrowIcon /></button> */}
                </Box>
            </Grid>
            {/* <CustomVideoModal open={open} handleClose={handleClose} /> */}
        </Grid>
    </Box>
  )
}

export default GreetingBanner;