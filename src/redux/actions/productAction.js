function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    //let url = `http://localhost:5000/products?q=${searchQuery}`;
    let url = `https://my-json-server.typicode.com/pattorney/0430_shopping/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({type: "GET_PRODUCT_SUCCESS", payload: {data}})    
  };
}

function  getProductDetail(id) {
  return async (dispatch, getState) => {
    //let url = `http://localhost:5000/products/${id}`;
    let url = `https://my-json-server.typicode.com/pattorney/0430_shopping/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({type: "GET_PRODUCT_DETAIL_SUCCESS", payload: {data}})
  }
}  

export const productAction = { getProducts, getProductDetail };
