import {Box} from '@mui/material';
import styles from "./style.module.css";
import browse from "../../../assets/images/dashboard/browse-images.png";
import layout from "../../../assets/images/dashboard/layout.png";
import adjust from "../../../assets/images/dashboard/adjust-border.png";
import React from 'react';

const Sidebar = ({activeTab, setActiveTabVal}) => {

    const active = {
        color: "#fff",
        fontWeight: "bold",
        background: "#2E2E2E",

    };

    return (
        <Box className={styles.dashboard_Links}>
            <Box className={styles.dashboard_Links_Container}  style={ activeTab === 1 ? active : {} }   onClick={() => {setActiveTabVal(1)}}>
                <Box component="div" className={styles.tabsChanging} >
                    <img src={browse} alt="BROWSE"/>
                    BROWSE
                </Box>
            </Box>
            <Box className={styles.dashboard_Links_Container} style={ activeTab === 2 ? active : {} } onClick={() => {setActiveTabVal(2)}}>
                <Box component="div" className={styles.tabsChanging} >
                    <img src={layout} alt="CHOOSE LAYOUT"/>
                    CHOOSE <br/> LAYOUT
                </Box>
            </Box>
            <Box className={styles.dashboard_Links_Container} style={ activeTab === 3 ? active : {} } onClick={() => {setActiveTabVal(3)}}>
                <Box component="div" className={styles.tabsChanging} >
                    <img src={adjust} alt="BORDER SIZE"/>
                    BORDER <br/> SIZE
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar