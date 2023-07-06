import React from 'react'
import {Slider, Typography} from '@mui/material'
import {Box} from '@mui/system'
import {SliderPicker} from 'react-color';
import {useState} from 'react';
import styles from "./style.module.css"
import actions from "../../../redux/actions";
import {store} from "../../../redux/store";
import {useSelector} from "react-redux";


const AdjustBorder = () => {

    const { adjust_border_size, adjust_border_color } = useSelector(s => s);
    const { setBorderSize, setBorderColor } = actions;

    let [borderPixel, setBorderPixel] = useState( adjust_border_size );
    let [colour, setColour] = useState( adjust_border_color );

    const handleBorderSize = (val) => {
        setBorderPixel(val);
        store.dispatch(
            setBorderSize(val)
        );
    }

    const handleChangeComplete = (color) => {
        setColour(color.hex);
        store.dispatch(
            setBorderColor(color.hex)
        );
    };

    return (
        <Box component="div" className={styles.Dashboard_Middle}>
            <Typography variant="h4">Adjust Border size</Typography>
            <Typography variant="h4">Borders</Typography>
            <Box component="div" className={styles.adjustSliderBar}>
                <Slider defaultValue={borderPixel} aria-label="Default" valueLabelDisplay="auto" onChange={(event) => handleBorderSize(event.target.value)}/>
                <Typography variant="h6">{borderPixel}px</Typography>
            </Box>
            <Typography variant="h4">Border Color</Typography>
            <Box component="div" className={styles.SlideRANGE}>
                <SliderPicker color={colour} onChange={handleChangeComplete}/>
            </Box>
        </Box>
    )
}

export default AdjustBorder