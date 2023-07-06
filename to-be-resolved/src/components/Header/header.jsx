import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// assets import 
import { AppBar, Box,  Drawer, Grid, Toolbar } from "@mui/material";
import logoImage from "../../assets/images/logo.png";
import cartIcon from "./../../assets/images/cartIcon.png";
import AccountIcon from "../../assets/images/accountIcon.png";
import styles from "./header.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useSelector} from "react-redux";



export default function Header() {


    const { user, buyerCart } = useSelector(s => s);


    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
        return () => {
        window.removeEventListener("resize", () => setResponsiveness());
        };
        
    }, []);

    const displayDesktop = () => {
        return (
            <Box className={styles.web_header_main}>
                <Grid container  py={2}  alignItems="center" className="container">
                    <Grid item lg={2} md={2}>
                        <Link to="/" className={styles.logo_main}>
                            <img src={logoImage} alt="Aumana-logo"  />
                        </Link>  
                    </Grid>
                    <Grid item lg={8} md={8} align="center" >
                       <Box className={styles.header_main_menu_Wrap}>
                            <Link to="/" >Home</Link>
                            <Link to="/about" >About</Link>
                            <Link to="/stewardship" >Stewardship Pledge</Link>
                            <Link to="/browse" >Browse</Link>
                            <Link to="/design" >Design</Link>
                            <Link to="/thank-you" >Thank You</Link>
                            <Link to="/support">Support</Link>
                        </Box>
                    </Grid>
                    <Grid item lg={2} md={2}>
                        <Box className={styles.login_users_text}>
                            {!user && <Link to="/register" className={styles.menuBtnRegister} >Register</Link> }
                            {!user && <Link to="/login" className={styles.login_users_text_link}>Login</Link> }
                            {user && <Link to="/user-account" className={styles.header_icons_links}><img src={AccountIcon} alt="User Account" /></Link> }
                            {user && <Link to="/cart" className={styles.header_icons_links}><img src={cartIcon} alt="Cart Items" /> <span>{buyerCart}</span> </Link> }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Toolbar>
                <Drawer 
                    PaperProps={{
                        sx: { width: "100%" },
                    }}
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}  >
                    <Box className={styles.header_main_menu_Wrap_Mobile}>
                        <Box className={styles.closeBtn} onClick={handleDrawerClose}>
                            <CloseIcon />
                        </Box>
                        <Box className={styles.mainMenuMobile}>
                            <Link to="/" >Home</Link>
                            <Link to="/about" >About</Link>
                            <Link to="/stewardship" >Stewardship Pledge</Link>
                            <Link to="/browse" >Browse</Link>
                            <Link to="/design" >Design</Link>
                            <Link to="/thank-you" >Thank You</Link>
                            <Link to="/support">Support</Link>
                            {!user && <Link to="/register">Register</Link>}
                            {!user && <Link to="/login">Login</Link>}
                            { user && <Link to="/user-account" >Account</Link>}
                            { user && <Link to="/cart" >Cart <span>{buyerCart}</span></Link>}
                        </Box>
                    </Box>
                </Drawer>
                <Box component="div" className={styles.mobile_header_main}>
                    <Link to="/" ><img src={logoImage} alt="Aumana-logo"/></Link>
                    <MenuIcon onClick={handleDrawerOpen} />
                </Box>
            </Toolbar>
        );
    };

    return (
        <AppBar className={styles.header_mainWrap}>
            {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
    )
}
