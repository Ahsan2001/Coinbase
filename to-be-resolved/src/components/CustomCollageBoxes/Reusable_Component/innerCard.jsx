import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useSelector } from "react-redux";
import actions from "../../../redux/actions";
import { store } from "../../../redux/store";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import EditLayout from './editLayout';

// 

const ResuableEditBox = (props) => {

    const [showPrevImg, setShowPrevImg] = useState(props?.PreviousImage?? null);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { dragged_img, dragged_img_collection } = useSelector(s => s);
    const { setDraggedImgCollection } = actions;
    const [img1, setImg1] = useState(props?.PreviousImage?? null);



    const removeImage = () => {
        store.dispatch(setDraggedImgCollection(dragged_img_collection.filter(data => data.index !== props.index)));
        setImg1(false);
    }

    const edit = () => handleOpen();


    const handleDroppedImg = (e) => {
        e.preventDefault();
        if (dragged_img !== null) {
            if (dragged_img_collection.length > 0) {
                let oldKey = null;
                dragged_img_collection.map((img, key) => {
                    if (img.index === props.index) {
                        oldKey = key;
                    }
                });
                if (oldKey !== null) {
                    const newDataSet = dragged_img_collection;
                    newDataSet[oldKey] = {
                        id: Number(dragged_img.id),
                        image: dragged_img.image,
                        index: props.index,
                        is_converted: false,
                        converted_image: null
                    };
                    store.dispatch(setDraggedImgCollection(newDataSet));
                }
                else {
                    store.dispatch(setDraggedImgCollection([...dragged_img_collection, {
                        id: Number(dragged_img.id),
                        image: dragged_img.image,
                        index: props.index,
                        is_converted: false,
                        converted_image: null
                    }]));
                }
            } else {
                store.dispatch(setDraggedImgCollection([{
                    id: Number(dragged_img.id),
                    image: dragged_img.image,
                    index: props.index,
                    is_converted: false,
                    converted_image: null
                }]));
            }
            setImg1(dragged_img);
            setShowPrevImg(dragged_img);
        }
    }

return (
        <>
            <EditLayout setImg1={setImg1} handleClose={handleClose} open={open} showPrevImg={showPrevImg} index={props.index} />
            <Box className={`${props?.Four_Border} ${props?.hoverEffectBtn}`}
                onDrop={(e) => handleDroppedImg(e)} onDragOver={(e) => e.preventDefault()} >

                {img1 && <img src={img1?.converted_image || img1?.image} alt={img1.id} draggable={false} />}

                <Box className={props?.editDeleteBtn} sx={{ display: img1 ? "flex" : "none" }}>
                    <button onClick={edit}>  <EditTwoToneIcon />  </button>
                    <button onClick={removeImage}> <DeleteSharpIcon /></button>
                </Box>
            </Box>
        </>
    )
}

export default ResuableEditBox;