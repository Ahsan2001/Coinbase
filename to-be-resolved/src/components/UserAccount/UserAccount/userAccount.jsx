import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from "./style.module.css";

// Import Components
import Drafts from '../DraftsOrder';
import Orders from '../Orders';
import Profile from '../Profile';
import {store} from "../../../redux/store";
import {toast} from "react-toastify";
import Cookies from "universal-cookie";
import actions from "../../../redux/actions";
import axios from "axios";
import { api_base_url } from "../../../helper/webservices";
import { useSelector } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import LogoutIcon from '@mui/icons-material/Logout';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import FullPageLoader from '../../../utils/FullPageLoader';
const { storeUserInfo,setDashboardPagesNumber } = actions;
const cookies = new Cookies();



const UserAccount = () => {

  const {user,set_dashboard_pages,pageLoader} = useSelector(s=>s);


  const handleClickEvent = (e) => {
  
      e.preventDefault();
      axios.get(`${api_base_url}logout`, {
          headers: {Authorization: "Bearer " + cookies.get("access_token")},
      }).then((res) => {
          store.dispatch(setDashboardPagesNumber(0))
          cookies.remove('access_token');
          cookies.remove('user');
          toast.success("Successfully logout.");
          store.dispatch(storeUserInfo(null,null));
      }).catch((err) => {
          console.clear()
      });
  }


  const SetTabIndex = (index) => {
    store.dispatch(setDashboardPagesNumber(index))
  }


if(pageLoader === true) {
    return <FullPageLoader  />
}


  return (
    <Box className={styles.my_profilee}>

        <Tabs selectedIndex={set_dashboard_pages} onSelect={SetTabIndex}>

            <Grid container sx={{ width: '80%', margin: '0 auto' }} >
                <Grid item lg={2} xs={12}>
                    <Box className={styles.bannerProfile}>
                        <Box className={styles.nameTitle}>
                            {user.name.toString().charAt(0).toUpperCase()}
                        </Box>
                        <Box className={styles.des}>
                            Hello, <br />  <span>{user.name}</span> 
                        </Box> 
                    </Box>
                    <Box className={styles.my_profile_side_bar}>
                        <TabList>
                            <Tab><PersonIcon />  Profile</Tab>
                            <Tab><DescriptionIcon />  Orders</Tab>
                            <Tab><SaveAsIcon />  Drafts</Tab>
                            <Tab onClick={(e) => handleClickEvent(e)}> <LogoutIcon /> Logout</Tab>
                        </TabList>
                    </Box>
                </Grid>
                <Grid item lg={10} xs={12}>
                    <TabPanel>
                        <Profile />
                    </TabPanel>
                    <TabPanel>
                        <Orders />
                    </TabPanel>
                    <TabPanel>
                        <Drafts />
                    </TabPanel>
                    <TabPanel>
                       <h3 p={5}>Logout Successfully </h3>
                    </TabPanel>
                </Grid>
            </Grid>
        </Tabs>
    </Box>
    )
}

export default UserAccount