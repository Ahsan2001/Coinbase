const actions = {
    SET_DESIGN: 'SET_DESIGN',
    SET_LAYOUT: 'SET_LAYOUT',
    SET_DRAGGED_IMAGE: 'SET_DRAGGED_IMAGE',
    SET_DRAGGED_IMAGE_COLLECTION: 'SET_DRAGGED_IMAGE_COLLECTION',
    SET_BORDER_SIZE: 'SET_BORDER_SIZE',
    SET_BORDER_COLOR: 'SET_BORDER_COLOR',
    USER_INFO: 'USER_INFO',
    FEATURED_NATURAL_WONDERLAND: 'FEATURED_NATURAL_WONDERLAND',
    FEATURED_NW_COLLAGE: 'FEATURED_NW_COLLAGE',
    NATURAL_TOUR_SUB_CATEGORY: 'NATURAL_TOUR_SUB_CATEGORY',
    NW_TOUR_SUB_CATEGORY: 'NW_TOUR_SUB_CATEGORY',
    INTEREST_SUB_CATEGORY: 'INTEREST_SUB_CATEGORY',
    SET_IMAGE_LOADING: 'SET_IMAGE_LOADING',
    SET_BUYER_CART: 'SET_BUYER_CART',
    SET_CART_VALUE: 'SET_CART_VALUE',
    SET_SUBTOTAL: "SET_SUBTOTAL",
    SET_API_CATERGORY: "SET_API_CATERGORY",
    SUB_VALUE_WONDERLAND: "SUB_VALUE_WONDERLAND",
    SET_SUB_CATEGORY_IMAGES: "SET_SUB_CATEGORY_IMAGES",
    SET_SUB_PAGE_NUMBER: "SET_SUB_PAGE_NUMBER",
    SET_NEXT_PAGE_URL: "SET_NEXT_PAGE_URL",
    SET_FULL_PAGE_LOADER: "SET_FULL_PAGE_LOADER",
    SET_DASHBOARD_PAGES_NUMBER: "SET_DASHBOARD_PAGES_NUMBER",
    SET_DRAFT_STATUS: "SET_DRAFT_STATUS",


    setDraftData: (value) => ({
        type: actions.SET_DRAFT_STATUS,
        payload: {set_draft_status: value}
    }),

    setDashboardPagesNumber: (value) => ({
        type: actions.SET_DASHBOARD_PAGES_NUMBER,
        payload: {set_dashboard_pages: value}
    }),

    setFullPageLoader: (value) => ({
        type: actions.SET_FULL_PAGE_LOADER,
        payload: {pageLoader: value}
    }),

    setSubTotal: (value) => ({
        type: actions.SET_SUBTOTAL,
        payload: { subtotal: value }
    }),

    setNextPageUrlRedux: (value) => ({
        type: actions.SET_NEXT_PAGE_URL,
        payload: { nextPageRedux: value }
    }),

    setPageNumber: (value) => ({
        type: actions.SET_SUB_PAGE_NUMBER,
        payload: { pageNumberOne: value }
    }),

    setCateogoryImages: (value) => ({
        type: actions.SET_SUB_CATEGORY_IMAGES,
        payload: { catImages: value }
    }),

    subValueWonderland: (value) => ({
        type: actions.SUB_VALUE_WONDERLAND,
        payload: { sub_value_Wonderland: value }
    }),

    setSubCateogoryApi: (value) => ({
        type: actions.SET_API_CATERGORY,
        payload: { sub_cateogry_api: value }
    }),

    setCartValue: (value) => ({
        type: actions.SET_CART_VALUE,
        payload: { set_cart_value: value }
    }),

    setLoader: (imageLoading) => ({
        type: actions.SET_IMAGE_LOADING,
        payload: { image_loading: imageLoading }
    }),

    setBuyerCart: (buyerCart) => ({
        type: actions.SET_BUYER_CART,
        payload: { buyerCart: buyerCart }
    }),

    setDesign: (design) => ({
        type: actions.SET_DESIGN,
        payload: { design: design },

    }),

    setLayout: (layout) => ({
        type: actions.SET_LAYOUT,
        payload: { layout: layout }
    }),

    setDraggedImg: (draggedImg) => ({
        type: actions.SET_DRAGGED_IMAGE,
        payload: { dragged_img: draggedImg }
    }),

    setDraggedImgCollection: (draggedImgCollection) => ({
        type: actions.SET_DRAGGED_IMAGE_COLLECTION,
        payload: { dragged_img_collection: draggedImgCollection }
    }),

    setBorderSize: (adjustBorderSize) => ({
        type: actions.SET_BORDER_SIZE,
        payload: { adjust_border_size: adjustBorderSize }
    }),

    setBorderColor: (adjustBorderColor) => ({
        type: actions.SET_BORDER_COLOR,
        payload: { adjust_border_color: adjustBorderColor }
    }),

    storeUserInfo: (user, token) => ({
        type: actions.USER_INFO,
        payload: { user: user, token: token }
    }),

    storeFeaturedNaturalWonderland: (featuredNaturalWonderland) => ({
        type: actions.FEATURED_NATURAL_WONDERLAND,
        payload: { featured_natural_wonderland: featuredNaturalWonderland }
    }),

    storeFeaturedNwCollage: (featuredNwCollage) => ({
        type: actions.FEATURED_NW_COLLAGE,
        payload: { featured_nw_collage: featuredNwCollage }
    }),

    storeNaturalTourSubCategory: (naturalTourSubCategoryData) => ({
        type: actions.NATURAL_TOUR_SUB_CATEGORY,
        payload: { natural_tour_sub_category_data: naturalTourSubCategoryData }
    }),

    storeNwTourSubCategory: (nwTourSubCategoryData) => ({
        type: actions.NW_TOUR_SUB_CATEGORY,
        payload: { nw_tour_sub_category_data: nwTourSubCategoryData }
    }),

    storeInterestSubCategory: (interestSubCategoryData) => ({
        type: actions.INTEREST_SUB_CATEGORY,
        payload: { interest_sub_category_data: interestSubCategoryData }
    })
}

export default actions;
