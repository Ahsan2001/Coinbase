import { Box, Typography, Grid, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from "./style.module.css";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { api_base_url, img_base_url } from '../../helper/webservices';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import SkeletonLoader from '../SkeletonLoader';
import CustomLightbox from '../CustomLightBox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import actions from '../../redux/actions';
import { store } from '../../redux/store';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { useRef } from 'react';

const Imagedetail = () => {
  const { slug } = useParams();


  const { setBuyerCart } = actions;


  const { token, user } = useSelector(s => s);



  const navigate = useNavigate();
  const [imageDetail, setImageDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectedImageSize = useRef("2X3 thumbnail");

  
  const selectedPrizeImage = useRef(0);


  const [ LightboxImg, setLightboxImg ] = useState(null);
  const [ pricingIndex, setPricingIndex ] = useState(0);
  const [ imageLicense , setImageLicense ] = useState("");

  // fetch data function 
  const fetchData = React.useCallback(async () => {
    try {
      const response = await axios.get(`${api_base_url}get-image-detail/${slug}`);
      setImageDetail(response.data.data[0]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false)
    };
  }, [slug])

  // open popup modal 
  const popUp = (value) => {
    setLightboxImg(value);
    handleOpen();
  }



  // add to cart function 
  const handleAddToCart = (e, data) => {
    e.preventDefault();
    if (token) {
      axios.get(`${api_base_url}add-to-cart`, {
        params: {
          user_id: user.id,
          image_id: data.id,
          image_type: postImageValue[1],
          image_size: postImageValue[0],
          price: selectedPrizeImage.current,
          license: imageLicense
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        toast.success(res.data.message);
        store.dispatch(setBuyerCart(res.data.data.length));
        navigate("/cart");
      }).catch((error) => {
        if (error.response.data.errors !== undefined) {
          Object.values(error.response.data.errors).map((v, k) => (
            toast.error(v[0])
          ));
        } else {
          toast.error(error.response.data.message);
        }
      });
    } else {
      toast.error("Please login first.");
    }
  }

  const [newArray , setNewState] = useState([]);
  // get value of image and size to handle add to cart api 
  const postImageValue = selectedImageSize.current.split(' ').map(res => res);

  // price dynamically changes 
  const SetPricesOfImages = (e) => {
    selectedImageSize.current = e.target.value;
    const [size, selectImageType] = selectedImageSize.current.split(' ');
    const test1 = imageDetail.attribute_images.filter(it => it.select_image_type === "thumbnail")[0]
    const pricingNewWork = {};


    for(let i = 0; i < imageDetail.attribute_images.length; i++){
      if (imageDetail.attribute_images[i].select_image_type === "thumbnail"){
        Object.assign(pricingNewWork, { thumbnail: i })
      }
      else if (imageDetail.attribute_images[i].select_image_type === "small"){
        Object.assign(pricingNewWork, { small: i })
      }
      else if (imageDetail.attribute_images[i].select_image_type === "medium"){
        Object.assign(pricingNewWork, { medium: i })
      }
      else if (imageDetail.attribute_images[i].select_image_type === "standard"){
        Object.assign(pricingNewWork, { standard: i })
      }
      else if (imageDetail.attribute_images[i].select_image_type === "large"){
        Object.assign(pricingNewWork, { large: i })
      }
      else if (imageDetail.attribute_images[i].select_image_type === "extra_large"){
        Object.assign(pricingNewWork, { extra_large: i })
      }
    }
    setNewState([test1])

    setPricingIndex(pricingNewWork[selectImageType]);

  }

  const SetLicencesImages = (e) => {
    selectedPrizeImage.current = e.target.value
    const newLicence = imageDetail.attribute_images[pricingIndex].price.filter( it => it.price === selectedPrizeImage.current );
    setImageLicense(newLicence[0]?.name)
  }

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return (
      <Box component="section" className={styles.thankyouMainWrap}>
        <Grid container sx={{ width: '80%', margin: '0px auto' }} >
          <Grid item lg={7} md={6} xs={12} pr={4} >
            <Box className={styles.bannerContent}>
              <Typography variant="h3">
                <SkeletonLoader width="500px" height="35px" />
              </Typography>
              <Typography variant="subtitle2">
                <SkeletonLoader width="100%" height="450px" />
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={5} md={6} xs={12} pl={4} >
            <Box className={styles.bannerWrap}>
              <SkeletonLoader variant="rectangular" width="100%" height="500px" />
            </Box>

            <FormControl className={styles.widthFull}>
              <Box sx={{ margin: "15px 0 0" }}>
                <SkeletonLoader width="400px" height="35px" />
              </Box>

              <RadioGroup name="radio-buttons-group" className={styles.imagesModalContent} sx={{ margin: "15px 0" }}>
                <Box className={styles.imagesBoxDesign} sx={{ margin: "0px 8px 0px 0" }}>
                  <SkeletonLoader width="100px" height="30px" />
                </Box>
                <Box className={styles.imagesBoxDesign} sx={{ margin: "0px 8px 0px 0" }}>
                  <SkeletonLoader width="100px" height="30px" />
                </Box>
                <Box className={styles.imagesBoxDesign} sx={{ margin: "0px 8px 0px 0" }}>
                  <SkeletonLoader width="100px" height="30px" />
                </Box>
                <Box className={styles.imagesBoxDesign} sx={{ margin: "0px 8px 0px 0" }}>
                  <SkeletonLoader width="100px" height="30px" />
                </Box>
              </RadioGroup>
            </FormControl>

            <FormControl className={styles.widthFull}>

              <SkeletonLoader width="400px" height="35px" />
              <RadioGroup name="radio-buttons-group" className={styles.imagesModalContent} sx={{ margin: "15px 0" }}>
                <Box className={styles.imagesBoxDesign} sx={{ margin: "0px 8px 0px 0" }}>
                  <SkeletonLoader width="100px" height="30px" />
                </Box>
                <Box className={styles.imagesBoxDesign} sx={{ margin: "0px 8px 0px 0" }}>
                  <SkeletonLoader width="100px" height="30px" />
                </Box>
                <Box className={styles.imagesBoxDesign} sx={{ margin: "0px 8px 0px 0" }}>
                  <SkeletonLoader width="100px" height="30px" />
                </Box>
                <Box className={styles.imagesBoxDesign} sx={{ margin: "0px 8px 0px 0" }}>
                  <SkeletonLoader width="100px" height="30px" />
                </Box>
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    )
  }
  return (
    <Box component="section" className={styles.thankyouMainWrap}>
      <Grid container p={3} className='container'>
        <Grid item lg={7} md={6} xs={12}   sx={{ pr: { lg: 4 } }}>
          <Box className={styles.bannerContent}>
            <Typography variant="h3">
              {imageDetail?.name}
            </Typography>
            <Typography variant="subtitle2">
              {imageDetail?.description ? imageDetail?.description : 'N/A'}
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={5} md={6} xs={12} sx={{ pl: { lg: 4 } }} >
          <Box className={styles.bannerWrap}>
            <img src={img_base_url + imageDetail.attribute_images[1].image ? img_base_url + imageDetail.attribute_images[1].image : img_base_url + imageDetail.nwLink} alt="banner" />
            <Box className="watermarkImageSmall"></Box>
            <Box className={styles.showHoverZoom} >
              <ZoomInIcon onClick={() => popUp(img_base_url + imageDetail.attribute_images[1].image ?  img_base_url + imageDetail.attribute_images[1].image : img_base_url + imageDetail.nwLink)} />
            </Box>
          </Box>
          <form onSubmit={(e) => handleAddToCart(e, imageDetail)} >
            <FormControl className={styles.widthFull}>
              <Box id="img-size-format" className={styles.label}>Choose Image Size </Box>
              <RadioGroup name="img-size-format" className={styles.imagesModalContent}  value={selectedImageSize.current} onChange={SetPricesOfImages}>
                <Box className={styles.imagesBoxDesign}>
                  {imageDetail.attribute_images.map((attribute_image, ind) => {
                      return(
                        <Box key={ind} className={styles.att_images}>
                          <FormControlLabel value={attribute_image.size + ' ' + attribute_image.select_image_type} 
                          control={<Radio required={true} />} label={attribute_image.select_image_type} />
                          <span className={styles.innerSpan}>{attribute_image.size} <strong> in </strong> - {attribute_image.dpi}<strong> Dpi </strong><strong> - JPG </strong></span>
                        </Box>
                  )})}
                </Box>
              </RadioGroup>
            </FormControl>

            <FormControl className={styles.widthFull}>
              <Box id="img-price-format" className={styles.label}>Choose License of Image </Box>
              <RadioGroup name="img-price-format" className={styles.imagesModalContent} value={selectedPrizeImage.current} onChange={SetLicencesImages}> 
                {imageDetail.attribute_images[pricingIndex].price.map((price, ind) => {
                    return(
                    <Box key={ind} className={styles.imagesBoxDesign}>
                      <FormControlLabel value={price.price} control={<Radio required={true} />} label={price.name} />
                      <span className={styles.innerSpanPrice}><strong> $ </strong> {parseFloat(price.price).toFixed(2)}</span>
                    </Box> 
                )})}
              </RadioGroup>
            </FormControl>

            <Box className={styles.buttonsMenu}>
              <Button className={styles.cart} type="submit">Add to Cart</Button>
              <Button className={styles.plan} onClick={() => navigate(-1)}>  Go Back</Button>
            </Box>
          </form>
        </Grid>
        <CustomLightbox open={open} handleClose={handleClose} imgUrl={LightboxImg} />
      </Grid>
    </Box>
  )
}

export default Imagedetail;