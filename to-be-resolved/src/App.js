import React from 'react';
import './assets/css/index.css';
import './assets/css/fonts.css';
import AOS from "aos";
import WebRoutes from './routes';
import axios from "axios";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Toast from "./components/Toast";
import actions from "./redux/actions";
import Cookies from "universal-cookie";
import { api_base_url, CLIENT_ID } from "./helper/webservices";
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
const { setLoader, storeUserInfo, storeFeaturedNaturalWonderland, storeFeaturedNwCollage } = actions;

const cookies = new Cookies();

export default function App() {
    function getUser() {
        if (cookies.get("access_token")) {
            axios.get(`${api_base_url}get-user-info`, {
                headers: {
                    Authorization: "Bearer " + cookies.get("access_token"),
                },
            }).then((res) => {
                store.dispatch(storeUserInfo(res.data.data.user, cookies.get("access_token")));
            }).catch(
                (err) => console.log(err, "err in token")
            );
        }
    }

    function getFeaturedImages() {
        axios.get(`${api_base_url}get-featured-image`).then((res) => {
            const { natural_wonderland, nw_collage } = res.data.data;
            store.dispatch(storeFeaturedNaturalWonderland(natural_wonderland));
            store.dispatch(storeFeaturedNwCollage(nw_collage));
            store.dispatch(setLoader(false));
        }).catch(
            (err) => console.log(err, "fearture api error")
        );
    }

    function resolvePromises() {
        getUser();
        getFeaturedImages();
    }

    React.useEffect(() => {
        store.dispatch(setLoader(true));
        AOS.init({
            startEvent: 'DOMContentLoaded',
            easing: 'ease',
        });
        AOS.refresh();
        let isLogIn = false;
        if (!isLogIn) {
            resolvePromises();
        }
        return () => {
            isLogIn = true;
        };
    }, []);

    return (
        <Provider store={store}>
            <Toast />
            <PayPalScriptProvider options={{ "client-id": CLIENT_ID, components: 'buttons' }}>
                <WebRoutes store={store} />
            </PayPalScriptProvider>
        </Provider>
    );
}