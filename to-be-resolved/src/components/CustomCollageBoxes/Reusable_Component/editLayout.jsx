import React, { useState } from 'react';
import styles from './styles.module.css';
import { Box, Fade, Modal, Backdrop, Tooltip } from '@mui/material';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import SaveIcon from '@mui/icons-material/Save';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {store} from "../../../redux/store";
import actions from "../../../redux/actions";
import {useSelector} from "react-redux";


const EditLayout = ({ handleClose, open, showPrevImg, setImg1, index}) => {

  const { dragged_img_collection } = useSelector(s => s);
  const { setDraggedImgCollection } = actions;
  const [cropper, setCropper] = useState(null);

  const getCropData = () => {
  
    if (typeof cropper !== "undefined") {
      const findImageIndex = dragged_img_collection.findIndex((data) => data.index === index);
      const newDataSet = dragged_img_collection;
      newDataSet[findImageIndex] = {
        id: showPrevImg.id,
        image: showPrevImg.image,
        index: index,
        is_converted: true,
        converted_image: cropper.getCroppedCanvas().toDataURL()
      };
      store.dispatch(setDraggedImgCollection(newDataSet));

      setImg1({id:showPrevImg.id, image: cropper.getCroppedCanvas().toDataURL()});

    }
  };



  
  const zoomInImages = () => cropper.zoom(0.1)
  const zoomOutImages = () => cropper.zoom(-0.1)
  const RotateLeftImages = () => cropper.rotate(90)
  const RotateRightImages = () => cropper.rotate(-90)
  const saveImages = () => {
    getCropData();
    handleClose();
  }
  const flipHorizontal = () => cropper.scale(-1, 1);
  const flipVertical = () => cropper.scale(1, -1);




  return (
    <>
      <Modal open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }} >
        <Fade in={open}>
          <Box className={styles.PopUpMainWrap}>
            <Box className={styles.cropperMainWrap}>
              <Cropper
                className="cropper"
                style={{ height: 700, width: "100%" }}
                // Cropper.js options
                initialAspectRatio={16 / 9}
                // zoomTo={0}
                // initialAspectRatio={1}
                src={showPrevImg?.image}
                viewMode={1}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={true}
                onInitialized={(instance) => {
                  setCropper(instance);
                }}
                guides={true}
              />
            </Box>

            <Box className={styles.cropperMainButton}>
              <Tooltip title="Zoom In" placement="right" arrow>
                <button onClick={zoomInImages}>
                  <ZoomInIcon />
                </button>
              </Tooltip>
              <Tooltip title="Zoom Out" placement="right" arrow>
                <button onClick={zoomOutImages}>
                  <ZoomOutIcon />
                </button>
              </Tooltip>
              <Tooltip title="Rotate Right" placement="right" arrow>
                <button onClick={RotateLeftImages}>
                  <RotateRightIcon />
                </button>
              </Tooltip>
              <Tooltip title="Rotate Left" placement="right" arrow>
                <button onClick={RotateRightImages}>
                  <RotateLeftIcon />
                </button>
              </Tooltip>
              <Tooltip title="Flip Horizontal" placement="right" arrow>
                <button onClick={flipHorizontal}>
                  <UndoIcon />
                </button>
              </Tooltip>
              <Tooltip title="Flip Vertical" placement="right" arrow>
                <button onClick={flipVertical}>
                  <RedoIcon />
                </button>
              </Tooltip>
              <Tooltip title="Save" placement="right" arrow>
                <button onClick={saveImages}>
                  <SaveIcon />
                </button>
              </Tooltip>
              
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default EditLayout