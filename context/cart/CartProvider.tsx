import React, { FC, PropsWithChildren, useReducer } from "react";
import { ICartProduct } from "../../interfaces";
import { CartContext, cartReducer } from "./";

export interface CartState {
    cart: ICartProduct[];
    
}
const CART_INITIAL_STATE: CartState = {
    cart: [],
};

export const CartProvider: FC<PropsWithChildren<CartState>> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

    const addProductToCart = (product: ICartProduct) => {
        const productInCart = state.cart.some((cartProduct) => cartProduct._id === product._id);
        if(!productInCart) return dispatch({ type: "[Cart] - Update products in cart", payload: [...state.cart, product] });

        const productInCartButDifferentSize = state.cart.some((cartProduct) => cartProduct._id === product._id && cartProduct.size === product.size);

        if(!productInCartButDifferentSize) return dispatch({ type: "[Cart] - Update products in cart", payload: [...state.cart, product] });

        //acumular
        const updateProducts = state.cart.map((cartProduct) => {
            if(cartProduct._id !== product._id) return cartProduct;
            if(cartProduct.size !== product.size) return cartProduct;

            //actualizar cantidad
            cartProduct.quantity += product.quantity;
            return cartProduct;
        }
        );
        dispatch({ type: "[Cart] - Update products in cart", payload: updateProducts });
    }

           
    return (
        <CartContext.Provider value={{ 
            ...state,
            addProductToCart, 
        
        }}>
            {children}
        </CartContext.Provider>
    );
};
