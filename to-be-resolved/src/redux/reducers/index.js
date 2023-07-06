import { domain } from '../../helper/webservices';
import actions from '../actions';

const initState = {
    data: {
        "card": {
            "h1": "Create Your Own Collage Designs",
            "h2": "Choose Card Layout Style",
            "lg": 3,
            "md": 4,
            "xs": 12,
            "data": [
                {
                    "id": 1,
                    "url": `${domain}assets/images/dashboard/card-size/1.png`,
                },
                {
                    "id": 2,
                    "url": `${domain}assets/images/dashboard/card-size/2.png`,
                },
                {
                    "id": 3,
                    "url": `${domain}assets/images/dashboard/card-size/3.png`,
                },
                {
                    "id": 4,
                    "url": `${domain}assets/images/dashboard/card-size/4.png`,
                },
                {
                    "id": 5,
                    "url": `${domain}assets/images/dashboard/card-size/5.png`,
                },
                {
                    "id": 6,
                    "url": `${domain}assets/images/dashboard/card-size/6.png`,
                },
                {
                    "id": 7,
                    "url": `${domain}assets/images/dashboard/card-size/7.png`,
                },
                {
                    "id": 8,
                    "url": `${domain}assets/images/dashboard/card-size/8.png`,
                },
                {
                    "id": 9,
                    "url": `${domain}assets/images/dashboard/card-size/9.png`,
                },
                {
                    "id": 10,
                    "url": `${domain}assets/images/dashboard/card-size/10.png`,
                },
                {
                    "id": 11,
                    "url": `${domain}assets/images/dashboard/card-size/11.png`,
                },
                {
                    "id": 12,
                    "url": `${domain}assets/images/dashboard/card-size/12.png`,
                },
                {
                    "id": 13,
                    "url": `${domain}assets/images/dashboard/card-size/13.png`,
                },
                {
                    "id": 14,
                    "url": `${domain}assets/images/dashboard/card-size/14.png`,
                },
                {
                    "id": 15,
                    "url": `${domain}assets/images/dashboard/card-size/15.png`,
                }
            ]
        },
        "poster": {
            "h1": "Create Your Own Collage Designs",
            "h2": "Choose Poster Layout Style",
            "lg": 2,
            "md": 3,
            "xs": 6,
            "data": [
                {
                    "id": 1,
                    "url": `${domain}assets/images/dashboard/poster-size/1.png`,
                },
                {
                    "id": 2,
                    "url": `${domain}assets/images/dashboard/poster-size/2.png`,
                },
                {
                    "id": 3,
                    "url": `${domain}assets/images/dashboard/poster-size/3.png`,
                },
                {
                    "id": 4,
                    "url": `${domain}assets/images/dashboard/poster-size/4.png`,
                },
                {
                    "id": 5,
                    "url": `${domain}assets/images/dashboard/poster-size/5.png`,
                },
                {
                    "id": 6,
                    "url": `${domain}assets/images/dashboard/poster-size/6.png`,
                },
                {
                    "id": 7,
                    "url": `${domain}assets/images/dashboard/poster-size/7.png`,
                },
                {
                    "id": 8,
                    "url": `${domain}assets/images/dashboard/poster-size/8.png`,
                },
                {
                    "id": 9,
                    "url": `${domain}assets/images/dashboard/poster-size/9.png`,
                },
                {
                    "id": 10,
                    "url": `${domain}assets/images/dashboard/poster-size/10.png`,
                }
            ]
        }
    },
    selected_design: "card",
    selected_layout: 1,
    user: null,
    token: null,
    dragged_img: null,
    dragged_img_collection: [],
    adjust_border_size: 0,
    adjust_border_color: "#FFF",
    featured_natural_wonderland: null,
    featured_nw_collage: null,
    natural_tour_sub_category_data: null,
    nw_tour_sub_category_data: null,
    interest_sub_category_data: null,
    image_loading: true,
    buyerCart: 0,
    set_cart_value: [],
    subtotal: 0,
    sub_cateogry_api: 0,
    sub_value_Wonderland: null,
    nextPageRedux: null,
    pageNumberOne: null,
    catImages: [],
    pageLoader: false,
    set_dashboard_pages: 0,
    set_draft_status: false
}








export function reducer(state = initState, { type, payload }) {
    switch (type) {


        case actions.SET_DRAFT_STATUS:
            return {
                ...state,
                set_draft_status: payload.set_draft_status,
            }

        case actions.SET_DASHBOARD_PAGES_NUMBER:
            return {
                ...state,
                set_dashboard_pages: payload.set_dashboard_pages,
            }


        case actions.SET_FULL_PAGE_LOADER:
            return {
                ...state,
                pageLoader: payload.pageLoader,
            }

        case actions.SET_SUB_PAGE_NUMBER:
            return {
                ...state,
                pageNumberOne: payload.pageNumberOne,
            }
        case actions.SET_SUB_CATEGORY_IMAGES:
            return {
                ...state,
                catImages: payload.catImages,
            }
        case actions.SET_NEXT_PAGE_URL:
            return {
                ...state,
                nextPageRedux: payload.nextPageRedux,
            }
        case actions.SUB_VALUE_WONDERLAND:
            return {
                ...state,
                sub_value_Wonderland: payload.sub_value_Wonderland,
            }
        case actions.SET_API_CATERGORY:
            return {
                ...state,
                sub_cateogry_api: payload.sub_cateogry_api,
            }
        case actions.SET_CART_VALUE:
            return {
                ...state,
                set_cart_value: payload.set_cart_value,
            }
        case actions.SET_SUBTOTAL:
            return {
                ...state,
                subtotal: payload.subtotal,
            }
        case actions.SET_BUYER_CART:
            return {
                ...state,
                buyerCart: payload.buyerCart,
            }
        case actions.SET_IMAGE_LOADING:
            return {
                ...state,
                image_loading: payload.image_loading,
            }
        case actions.SET_DESIGN:
            return {
                ...state,
                selected_design: payload.design
            }
        case actions.SET_LAYOUT:
            return {
                ...state,
                selected_layout: payload.layout
            }
        case actions.SET_DRAGGED_IMAGE:
            return {
                ...state,
                dragged_img: payload.dragged_img
            }
        case actions.SET_DRAGGED_IMAGE_COLLECTION:
            return {
                ...state,
                dragged_img_collection: payload.dragged_img_collection
            }
        case actions.SET_BORDER_SIZE:
            return {
                ...state,
                adjust_border_size: payload.adjust_border_size
            }
        case actions.SET_BORDER_COLOR:
            return {
                ...state,
                adjust_border_color: payload.adjust_border_color
            }
        case actions.USER_INFO:
            return {
                ...state,
                user: payload.user,
                token: payload.token
            }
        case actions.FEATURED_NATURAL_WONDERLAND:
            return {
                ...state,
                featured_natural_wonderland: payload.featured_natural_wonderland
            }
        case actions.FEATURED_NW_COLLAGE:
            return {
                ...state,
                featured_nw_collage: payload.featured_nw_collage
            }
        case actions.NATURAL_TOUR_SUB_CATEGORY:
            return {
                ...state,
                natural_tour_sub_category_data: payload.natural_tour_sub_category_data
            }
        case actions.NW_TOUR_SUB_CATEGORY:
            return {
                ...state,
                nw_tour_sub_category_data: payload.nw_tour_sub_category_data
            }
        case actions.INTEREST_SUB_CATEGORY:
            return {
                ...state,
                interest_sub_category_data: payload.interest_sub_category_data
            }
        default:
            return state;
    }
}
