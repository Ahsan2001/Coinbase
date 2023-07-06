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
import LayoutEleven from './Layout-11';
import LayoutTwele from './Layout-12';
import LayoutThirteen from './Layout-13';
import LayoutFourteen from './Layout-14';
import LayoutFifteen from './Layout-15';
import { useSelector } from "react-redux";



const CardLayoutHandler = () => {

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
            case 11:
                return <LayoutEleven />;
            case 12:
                return <LayoutTwele />;
            case 13:
                return <LayoutThirteen />;
            case 14:
                return <LayoutFourteen />;
            case 15:
                return <LayoutFifteen />;
            default:
                return <LayoutOne />;
        }
    }

    return handleLayout();
}

export default CardLayoutHandler