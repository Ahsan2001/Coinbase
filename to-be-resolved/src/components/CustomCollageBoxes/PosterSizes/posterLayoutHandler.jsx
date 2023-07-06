import React from 'react'

import LayoutOne from './Layout-1';
import LayoutTwo from './Layout-2';
import LayoutThree from './Layout-3';
import LayoutFour from './Layout-4';
import LayoutFive from './Layout-5';
import LayoutSix from './Layout-6';
import LayoutSeven from './Layout-7';
import LayoutEight from './Layout-8';
import LayoutNine from './Layout-9';
import LayoutTen from './Layout-10';

import { useSelector } from "react-redux";



const PosterLayoutHandler = () => {

    const { selected_layout } = useSelector(s => s);

    const handleLayout = () => {
        switch(selected_layout) {
            case 1:
                return <LayoutOne />;
            case 2:
                return <LayoutTwo />;
            case 3:
                return <LayoutThree />;
            case 4:
                return <LayoutFour />;
            case 5:
                return <LayoutFive />;
            case 6:
                return <LayoutSix />;
            case 7:
                return <LayoutSeven />;
            case 8:
                return <LayoutEight />;
            case 9:
                return <LayoutNine />;
            case 10:
                return <LayoutTen />;
            default:
                return <LayoutOne />;
        }
    }

    return handleLayout();
}

export default PosterLayoutHandler