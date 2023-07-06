import React, { useState } from 'react'
import { Box,  Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import styles from "./style.module.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const SelectImageTab = () => {

    let [checked, setChecked] = useState(false);
    let handleChange = (event) => setChecked(event.target.checked);

  return (

      <>
        <Typography variant="h5">Please Choose an image quality:</Typography>
        <FormControl>
            <RadioGroup row >
                <FormControlLabel value="72 dpi" control={<Radio />} label="72 dpi" />
                <FormControlLabel value="150 dpi" control={<Radio />} label="150 dpi" />
                <FormControlLabel value="300 dpi" control={<Radio />} label="300 dpi" />
            </RadioGroup>
        </FormControl>


        <Typography variant="h5">Certification:</Typography>
        <Box className={styles.certification}>
            <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
            <Typography variant="h6">I agree to terms and conditions regarding use of the downloaded image.</Typography>
        </Box>
      </>

  )
}

export default SelectImageTab