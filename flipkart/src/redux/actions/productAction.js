
import axiox from 'axios';
import * as action from '../constants/productConstant';





export const getProducts = () => async (dispatch) => {
    try{
       const {data} = await axiox .get(`/products`);
        dispatch({type: action.GET_PRODUCT_SUCCESS, payload: data});


    }catch (error){
        dispatch({type: action.GET_PRODUCT_FAIL, payload: error.response});
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        const {data} = await axiox .get(`/product/${id}`);

        dispatch({type: action.GET_PRODUCT_DETAIL_SUCCESS, payload: data});

    }catch (error) {
        dispatch({type: action.GET_PRODUCT_DETAIL_FAIL, payload: error.response});

    }
}
