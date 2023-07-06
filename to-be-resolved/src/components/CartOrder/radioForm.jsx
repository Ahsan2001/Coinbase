import React, { useState } from 'react';
import styles from "./style.module.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/system';
import { api_base_url } from '../../helper/webservices';
import { useSelector } from "react-redux";
import axios from 'axios';
import { toast } from "react-toastify";
import { Typography } from '@mui/material';
import actions from '../../redux/actions';
import { store } from '../../redux/store';
import { useRef } from 'react';

const CustomRadioForm = (props) => {

  
  const { personalUse, corporateUse, commercialUse, val, selectValue, setCartData, setCollageData, cardData, collageData, bool1 } = props;
  const { token } = useSelector(s => s);
  const [ updatedPrice, setUpdatedPrice] = useState(null);
  const { setCartValue } = actions;
  const licenseValue = useRef("");
  const setValue = useRef(selectValue);

  const updateCart = React.useCallback((price) => {
    axios.post(`${api_base_url}update-to-cart/${val.id}`, {
      price: price,
      license: licenseValue.current
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    }).then((res) => {
      let cardCollageData
      if (bool1) {
        cardCollageData = collageData.map(item => {
          if (item.id === val.id) {
            return { 
              ...item, price: res.data.data.collage_images[0].price,  license: licenseValue.current
            }
          } else {
            return item;
          }
        });
      }
      const cardImagesData = cardData.map(item => {
        if (item.id === val.id) {
          return {
             ...item, 
             price: res.data.data.images[0].price, license: licenseValue.current
          }
        } else {
          return item;
        }
      })

      
      store.dispatch(setCartData(cardImagesData))
      store.dispatch(setCollageData(cardCollageData))


      store.dispatch(setCartValue(res.data?.data)  )
      toast.success("Cart updated");
    }).catch((err) => {
      console.log(err, "error")
    })
  }, [token, val.id, setCartData, cardData, setCollageData, collageData, bool1, setCartValue, licenseValue])


  let handleChange = (event) => {
  
    setValue.current = event.target.value;
    if(Number(setValue.current) ===  Number(personalUse) )  {
      licenseValue.current = "Personal Use License"
    } else if (Number(setValue.current) ===  Number(corporateUse)){
      licenseValue.current =  "Corporate Use License"
    } else if  (Number(setValue.current) ===  Number(commercialUse)){
      licenseValue.current =  "Commercial Use License"
    }
    else {
      console.log("something went wrong")
    }
    updateCart(event.target.value);
    setUpdatedPrice(event.target.value);
  }

  return (
    <>
      <Box className={styles.forFlexDirection}>
        <Typography variant="h5">
          $ {updatedPrice == null ?  (val.price == null ?  parseFloat(selectValue).toFixed(2) :  parseFloat(val.price).toFixed(2)) :  parseFloat(updatedPrice).toFixed(2)}
        </Typography>
      </Box>
      <Box className={styles.radioBtns}>
        <FormControl>
          <RadioGroup row name="row-radio-buttons-group" value={setValue.current} onChange={handleChange}>
            <FormControlLabel value={personalUse} control={<Radio />} label="Personal use" />
            {corporateUse === null ? <Box></Box> : <FormControlLabel value={corporateUse} control={<Radio />} label="Corporate use" />}
            {commercialUse === null ? <Box></Box> : <FormControlLabel value={commercialUse} control={<Radio />} label="Commercial use" />}
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  )
}

export default CustomRadioForm