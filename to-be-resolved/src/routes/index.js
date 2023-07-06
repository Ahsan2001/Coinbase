import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ComponentRoutes from "../routes/routes";
import { useSelector } from "react-redux";
import { history } from '../helper/history';
import ScrollToTopUpper from "../utils/scroll";
import ScrollToTop from "react-scroll-to-top";
import actions from '../redux/actions';
import axios from 'axios';
import { api_base_url } from '../helper/webservices';
import { store } from '../redux/store';


const WebRoutes = () => {
    const {user,token} = useSelector(s => s);
    const { setBuyerCart } = actions;



    function GetCart() {
        if (token) {
        axios.get(`${api_base_url}get-cart`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            store.dispatch(setBuyerCart(res.data.data.images.length + res.data.data.collage_images.length ));
        }).catch((err) => {
            console.log(err)
        })
        }
    }
    


    useEffect(() => {
        GetCart()
    }, [user]);

    return (
        <BrowserRouter>
            <ScrollToTopUpper /> 
            <Routes history={history}>
                {ComponentRoutes.map((route, index) => {
                    if(route.private && user){
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                element={route.element}
                            />)
                    }else if((!route.private && !user) ||  (!['/login', '/register'].includes(route.path) && user)){
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                element={route.element}
                            />)
                    }else if((['/login', '/register'].includes(route.path) && user) || (route.private && !user)){
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                element={<Navigate to="/" />}
                            />)
                    }else{
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                element={<Navigate to="/404" />}
                            />)
                    }
                })}
            </Routes>
            <ScrollToTop smooth color="#7a7554" />
        </BrowserRouter>
    )
}

export default WebRoutes