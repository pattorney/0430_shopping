let initialState = {
    productList: [],
    selectedItem: null,
}

const productReducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case "GET_PRODUCT_SUCCESS":
            return {...state, productList: payload.data}
        case "GET_PRODUCT_DETAIL_SUCCESS":
            return {...state, selectedItem: payload.data}
        default:
            return {...state}
    }
}

export default productReducer;