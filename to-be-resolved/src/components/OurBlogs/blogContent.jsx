import { Box, Typography, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import axios from "axios";
import { api_base_url } from "../../helper/webservices";
import moment from "moment";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import SkeletonLoader from '../SkeletonLoader';
const BlogContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFeaturedBlogs();
  }, []);

  const navigate = useNavigate();

  function changePage(item) {
    navigate(`/get-detail-blogs/${item.slug}`);
  }

  const [blogData, setBlogData] = useState([]);


  const getFeaturedBlogs = async () => {
    try {
      const response = await axios.get(`${api_base_url}get-featured-blogs`);
      setBlogData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false)
    };
  };




  if (isLoading) {
    return (
      <Box component="section" className={styles.blogContent}>
        <Grid container sx={{ width: '80%', margin: '0 auto' }} >
          <Grid item lg={12} md={12} xs={12} pb={5} align="center" alignItems="center">
            <SkeletonLoader height="40px" width="300px" />
          </Grid>
          <Grid item lg={4} md={6} xs={12} align="center" alignItems="center"
            sx={{ padding: '10px 20px' }}>
            <Box className={styles.clickLink} >
              <SkeletonLoader height="380px" width="100%" />
              <Typography variant="h4">
                <SkeletonLoader height="30px" width="100%" />
              </Typography>
            </Box>
            <Typography variant="subtitle2">
              <SkeletonLoader height="30px" width="100%" />
            </Typography>
          </Grid>
          <Grid item lg={4} md={6} xs={12} align="center" alignItems="center"
            sx={{ padding: '10px 20px' }}>
            <Box className={styles.clickLink} >
              <SkeletonLoader height="380px" width="100%" />
              <Typography variant="h4">
                <SkeletonLoader height="30px" width="100%" />
              </Typography>
            </Box>
            <Typography variant="subtitle2">
              <SkeletonLoader height="30px" width="100%" />
            </Typography>
          </Grid>
          <Grid item lg={4} md={6} xs={12} align="center" alignItems="center"
            sx={{ padding: '10px 20px' }}>
            <Box className={styles.clickLink} >
              <SkeletonLoader height="380px" width="100%" />
              <Typography variant="h4">
                <SkeletonLoader height="30px" width="100%" />
              </Typography>
            </Box>
            <Typography variant="subtitle2">
              <SkeletonLoader height="30px" width="100%" />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    )
  }

  return (
    <Box component="section" className={styles.blogContent}>
      <Grid container className="container" >
        <Grid item lg={12} md={12} xs={12} pb={5} align="center" alignItems="center" >
          <Typography variant="h1">
            OUR BLOGS
          </Typography>
        </Grid>
        {
          blogData?.map((item, ind) => {
            return (
              <Grid key={ind} item lg={4} md={6} xs={12} align="center" alignItems="center"
                sx={{ padding: '10px 20px' }}>

                <Box className={styles.clickLink} onClick={() => changePage(item)}>
                  <img src={item.featuredImgLink} alt={item.title} className="IMG_Fluid" />
                  <Typography variant="h4">
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="h5">
                  <span className={styles.blogDate}>{moment(item.created_at).format('MMM, DD, YYYY')}</span>
                  <span className={styles.blogAuther}>&nbsp; | &nbsp;by {item.author_name}</span>
                </Typography>
                <Typography variant="subtitle2">
                  {item.short_description}
                </Typography>
              </Grid>
            )
          })
        }




        <Grid item lg={12} md={12} xs={12} my={5} align="center" alignItems="center">
          <Box className={styles.readMoreBtn}>
            <Link to="/blogs" > Read More</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BlogContent