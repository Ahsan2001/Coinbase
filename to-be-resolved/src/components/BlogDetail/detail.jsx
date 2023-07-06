import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './styles.module.css'
import { Box, Grid, Typography, Button } from '@mui/material'
import axios from 'axios';
import { api_base_url } from '../../helper/webservices';
import moment from "moment";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from '../SkeletonLoader';


const BlogDetail = () => {
  const navigate = useNavigate();
  let { slug } = useParams();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api_base_url}get-blog-detail/${slug}`);
      setBlog(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false)
    };
  };

  useEffect(() => {
    fetchData();
  }, []);


  if (isLoading) {
    return (
      <Box component="section" className={styles.thankyouMainWrap}>
        <Grid container sx={{ width: '80%', margin: '0px auto' }} >
          <Grid item lg={12} md={12} className={styles.blogDetail_header} xs={12} pb={5} align="center" alignItems="center">
            <Typography variant="h3">
              <SkeletonLoader height="25px" width="1000px" />
            </Typography>
            <Typography variant="h4">
              <SkeletonLoader height="25px" width="450px" />
            </Typography>
          </Grid>
          <Grid item lg={7} md={6} xs={12} px={4} >
            <Box className={styles.bannerContent}>
              <Typography variant="subtitle2">
                <SkeletonLoader height="40px" width="100%" />
                <br />
                <SkeletonLoader height="700px" width="100%" />
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={5} md={6} xs={12} px={4} >
            <Box className={styles.bannerWrap}>.
              <Box sx={{ marginBottom: "20px", width: "100%" }} >
                <SkeletonLoader height="400px" width="100%" />
              </Box>
              <Box sx={{ marginBottom: "20px", width: "100%" }} >
                <SkeletonLoader height="400px" width="100%" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>)
  }

  return (
    <Box component="section" className={styles.thankyouMainWrap}>
      <Grid container sx={{ width: '80%', margin: '0px auto' }} >
        <Grid item lg={12} md={12} className={styles.blogDetail_header} xs={12} pb={5} align="center" alignItems="center" >
          <Typography variant="h3">
            {blog.title}
          </Typography>
          <Typography variant="h4">
            {moment(blog.created_at).format('MMM, DD, YYYY')}  <span> {blog.author_name}</span>
          </Typography>
        </Grid>

        <Grid item lg={7} md={6} xs={12} px={4} >
          <Box className={styles.bannerContent}>
            <Typography variant="subtitle2">
              {blog.short_description} <br /> <br /> {blog.description}
            </Typography>
            <Button
              style={{
                backgroundColor: "#2E2E2E",
                border: "1px solid #2E2E2E",
                borderRadius: "27px",
                fontFamily: 'Josefin Sans',
                padding: "10px 30px",
                color: "#fff",
                fontSize: "18px",
              }}

              variant="contained"
              onClick={() => navigate(-1)}
            > Go Back </Button>
          </Box>
        </Grid>
        <Grid item lg={5} md={6} xs={12} px={4} >
          <Box className={styles.bannerWrap}>
            <img src={blog.featuredImgLink} alt={blog.title} className="IMG_Fluid" />
            <img src={blog?.imageLink} alt={blog.title} className="IMG_Fluid" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BlogDetail