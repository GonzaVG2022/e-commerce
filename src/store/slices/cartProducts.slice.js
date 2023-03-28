import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "/src/utils/getConfig";
import {setIsLoading} from "./isLoading.slice";

export const cartProductsSlice = createSlice({
    name: "cartProducts",
    initialState: [],
    reducers: {
	setCartProducts: (state, action) => action.payload
    }
});

export const getCartProductsThunk = () => dispatch => {
    dispatch(setIsLoading(true));
    axios
	.get("https://ecommerce-g1mf.onrender.com/api/v1/carts", getConfig())
	.then(res => dispatch(setCartProducts(res)))		
	.catch(err => err.response.status !== 404 && console.log(err.response))
	.finally(() => dispatch(setIsLoading(false)));
	
}

export const addCartProductThunk = (product, quantity) => dispatch => {
    dispatch(setIsLoading(true));
    axios
	.post(
	    "https://ecommerce-g1mf.onrender.com/api/v1/carts", 
	    {id: product.id, quantity},
	    getConfig()
	)
	.then(res => dispatch(getCartProductsThunk()))
	.catch(err => console.log(err.response))
	.finally(() => dispatch(setIsLoading(false)));
}

export const updateCartProductThunk = (id, newQuantity) => dispatch => {
    dispatch(setIsLoading(true));
    axios
	.patch("https://ecommerce-g1mf.onrender.com/api/v1/carts", {id, newQuantity}, getConfig())
	.then(res => dispatch(getCartProductsThunk()))
	.catch(err => console.log(err.response))
	.finally(() => dispatch(setIsLoading(false)));
}

export const removeCartProductThunk = id => dispatch => {
    dispatch(setIsLoading(true));
    axios
	.delete("https://ecommerce-g1mf.onrender.com/api/v1/carts/" + id, getConfig())
	.then(res => dispatch(getCartProductsThunk()))
	.catch(err => console.log(err.response))
	.finally(() => dispatch(setIsLoading(false)));
}

export const {
    setCartProducts
} = cartProductsSlice.actions;

export default cartProductsSlice.reducer;
