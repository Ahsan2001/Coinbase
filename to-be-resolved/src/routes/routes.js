import React from 'react';
import { PATH } from './routes.components';


const routes = [
    {
        path: '/order-detail/:id',
        exact: true,
        private: false,
        element:  <PATH.OrderDetailSummary />
    },
    {
        path: '/',
        exact: true,
        private: false,
        element:  <PATH.Home />
    },
    {
        path: '/verify-otp/:email',
        exact: true,
        private: false,
        element:  <PATH.VerifyOTP />
    },
    {
        path: '/change-password/:otp',
        exact: true,
        private: false,
        element:  <PATH.PasswordChange />
    },
    {
        path: '/forget-password',
        exact: true,
        private: false,
        element:  <PATH.ForgetPassword />
    },
    {
        path: '/support',
        exact: true,
        private: false,
        element:  <PATH.Support />
    },
    {
        path: '/about',
        exact: true,
        private: false,
        element:  <PATH.About />
    },
    {
        path: '/stewardship',
        exact: true,
        private: false,
        element:  <PATH.Stewardship />
    },
    {
        path: '/browse',
        exact: true,
        private: false,
        element:  <PATH.Browse />
    },
    {
        path: '/design',
        exact: true,
        private: false,
        element:  <PATH.Design />
    },
    {
        path: '/cart',
        exact: true,
        private: true,
        element:  <PATH.Cart/>
    },
    {
        path: '/contact',
        exact: true,
        private: false,
        element: <PATH.Contact />
    },
    {
        path: '/payment',
        exact: true,
        private: true,
        element:  <PATH.Payment/>
    },
    {
        path: '/register',
        exact: true,
        private: false,
        element:  <PATH.Register/>
    },
    {
        path: '/login',
        exact: true,
        private: false,
        element:  <PATH.Login/>
    },
    {
        path: '/thankyou/:id',
        exact: true,
        private: false,
        element:  <PATH.ThankYou/>
    },
    {
        path: '/natural-wounderland',
        exact: true,
        private: false,
        element:  <PATH.BrowseNaturalToursMain/>
    },
    {
        path: '/nw-collage',
        exact: true,
        private: false,
        element:  <PATH.BrowseNwToursMain/>
    },
    {
        path: '/images-of-interest',
        exact: true,
        private: true,
        element:  <PATH.BrowseImageOfInterest/>
    },
    {
        path: '/natural-tour',
        exact: true,
        private: false,
        element:  <PATH.NatureTour/>
    },
    {
        path: '/nw-collage-tour',
        exact: true,
        private: false,
        element:  <PATH.NwCollageTour/>
    },
    {
        path: '/interest-images-tour',
        exact: true,
        private: true,
        element:  <PATH.InterestImagesTour/>
    },
    {
        path: '/choose-layout',
        exact: true,
        private: false,
        element:  <PATH.ChooseLayout/>
    },
    {
        path: '/create-collage',
        exact: true,
        private: false,
        element:  <PATH.CreateCollage/>
    },
    {
        path: '/user-account',
        exact: true,
        private: true,
        element:  <PATH.UserPanel/>
    },
    {
        path: '/thank-you',
        exact: true,
        private: false,
        element: <PATH.HomeThankYou />
    },
    {
        path: '/blogs',
        exact: true,
        private: false,
        element: <PATH.Blogs />
    },
    {
        path: '/get-detail-blogs/:slug',
        exact: true,
        private: false,
        element: <PATH.BlogDetails />
    },
    {
        path: '/detail/:slug',
        exact: true,
        private: false,
        element: <PATH.ProductDetail />
    },
    {
        path: '/refund-policy',
        exact: true,
        private: false,
        element: <PATH.Refund />
    },
    {
        path: '/privacy-policy',
        exact: true,
        private: false,
        element: <PATH.Privacy />
    },
    {
        path: '/terms-and-condition',
        exact: true,
        private: false,
        element: <PATH.TermsCondition />
    },
    {
        path: '/404',
        exact: true,
        private: false,
        element:  <PATH.ErrorPage/>
    },
    {
        path: '*',
        exact: true,
        private: false,
        element:  <PATH.ErrorPage/>
    },
];

export default routes;
