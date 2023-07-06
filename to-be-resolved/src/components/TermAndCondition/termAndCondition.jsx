import React, { useState } from 'react';
import { Box, Typography, Grid, TextField } from '@mui/material';
import styles from "./style.module.css"
import { useSelector } from 'react-redux';


const TermAndCondition = () => {

  
  const { user }  = useSelector(s=>s);
  
  const [name, setName] = useState(user?.name);
  const [imgNumber, setImgNumber] = useState("");
  const [email, setEmail] = useState(user?.email);
  const [bname, setBname] = useState("")

  let todayDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date =  todayDate.toLocaleDateString('en-US', options);







  return (
    <React.Fragment>
      <Box component="section" className={styles.thankyouMainWrap}>
          <Grid container sx={{ width: '80%', margin: '0px auto' }} >
              <Grid item lg={12} md={12} xs={12} px={4} data-aos="fade-up" data-aos-duration='1300'>
                  <Box className={styles.bannerContent}>

                      <Typography variant="h3">
                      AUMANA Personal Use image licensing terms and conditions
                      </Typography>
                      <Typography variant="subtitle2">
                      I  
                      <TextField  placeholder='Enter name' required={true}  value={name}  onChange={e => setName(e.target.value)} sx={{margin: "5px"}} />  ,  
                      <TextField  placeholder='Enter email' required={true}  value={email}  onChange={e => setEmail(e.target.value)} sx={{ margin: "5px" }} /> agree that digital image 
                      <TextField  placeholder='Enter number' required={true}  value={imgNumber}  onChange={e => setImgNumber(e.target.value)} sx={{ margin: "5px" }} />  downloaded from
                      AUMANA website on <br /> <strong> {date}  </strong>is for Personal Use only. 
                      <br />
                      I also agree that AUMANA has licensed this image on a Non-Exclusive basis and retains all rights including
                      copyrights for this image. 
                      <br /> 
                      I will neither directly or indirectly (through someone else) sell this image or a digitally derived version either in
                      print, paint or electronic formats.
                      <br /> 
                      If I post or circulate this image on social media platforms, I agree to cite AUMANA as the source of the original image.
                      </Typography>

                    <Typography variant="h3">
                      AUMANA Corporate Use licensing terms and conditions
                      </Typography>
                      <Typography variant="subtitle2">
                      I  <TextField  placeholder='Enter name' required={true}  value={name}  onChange={e => setName(e.target.value)} sx={{margin: "5px"}} />   ,  
                      <TextField  placeholder='Enter email' required={true}  value={email}  onChange={e => setEmail(e.target.value)} sx={{ margin: "5px" }} /> , 
                       <TextField placeholder='Enter bussiness name' value={bname}  onChange={e => setBname(e.target.value)}   required={true} sx={{ margin: "5px" }} /> agree that digital image
                      <TextField  placeholder='Enter number' required={true}  value={imgNumber}  onChange={e => setImgNumber(e.target.value)} sx={{ margin: "5px" }} />  downloaded from AUMANA website on <strong> {date}  </strong> is for corporate Use and will only be
                      used for corporate/business marketing and/or promotional materials.
                      <br />
                      I also agree that AUMANA has licensed this image on a Non-Exclusive basis and retains all rights including
                      copyrights for this image. 
                      <br /> 
                      I and/or  <TextField  placeholder='Enter name' required={true}  value={name}  onChange={e => setName(e.target.value)} sx={{margin: "5px"}} />   
                      ,  <TextField placeholder='Enter bussiness name' value={bname}  onChange={e => setBname(e.target.value)}   required={true} sx={{ margin: "5px" }} />   will not sell this image or a digitally derived version either in print, paint
                      or electronic formats.
                      <br /> 
                      If this image is posted or circulated on social media platforms, I and <TextField  placeholder='Enter name' required={true}  value={name}  onChange={e => setName(e.target.value)} sx={{margin: "5px"}} />  business name  <TextField placeholder='Enter bussiness name' value={bname}  onChange={e => setBname(e.target.value)}   required={true} sx={{ margin: "5px" }} />  agree to cite
                      AUMANA as the source of the original image.
                      </Typography>

                      <Typography variant="h3">
                      AUMANA Commercial Use licensing terms and conditions
                      </Typography>
                      <Typography variant="subtitle2">
                      I  <TextField  placeholder='Enter name' required={true}  value={name}  onChange={e => setName(e.target.value)} sx={{margin: "5px"}} />   , 
                      <TextField  placeholder='Enter email' required={true}  value={email}  onChange={e => setEmail(e.target.value)} sx={{ margin: "5px" }} /> , 
                        <TextField placeholder='Enter bussiness name' value={bname}  onChange={e => setBname(e.target.value)}   required={true} sx={{ margin: "5px" }} /> agree that digital image
                      <TextField  placeholder='Enter number' required={true}  value={imgNumber}  onChange={e => setImgNumber(e.target.value)} sx={{ margin: "5px" }} />  downloaded from AUMANA website on <strong> {date}  </strong>  is for commercial use.
                      <br />
                      I also agree that AUMANA has licensed this image on a Non-Exclusive basis and retains all rights including
                      copyrights for this image. 
                      <br /> 
                      I and/or  <TextField  placeholder='Enter name' required={true}  value={name}  onChange={e => setName(e.target.value)} sx={{margin: "5px"}} />   
                      ,  <TextField placeholder='Enter bussiness name' value={bname}  onChange={e => setBname(e.target.value)}   required={true} sx={{ margin: "5px" }} />    are authorized to sell this image or a digitally derived version either in
                      print, paint or electronic formats only if AUMANA is cited as source of the original image.
                      </Typography>

                  </Box>
              </Grid>
          </Grid>
      </Box>
  </React.Fragment>
  )
}

export default TermAndCondition