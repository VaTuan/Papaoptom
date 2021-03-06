import React, { useReducer, useContext, createContext } from 'react';
import { reducer, cartItemsTotalPrice } from './cart.reducer';
import { useStorage } from 'utils/use-storage';
const CartContext = createContext({} as any);
const INITIAL_STATE = {
    isOpen: false,
    items: [],
    isRestaurant: false,
    coupon: null,
    recentOrder: {}
};

const useCartActions = (initialCart = INITIAL_STATE) => {
    const [state, dispatch] = useReducer(reducer, initialCart);

    const addItemHandler = (item, quantity = 1) => {
        console.log("Add Cart Items::", JSON.stringify(item));
        dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity } });
    };

    const removeItemHandler = (item, quantity = 1) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { ...item, quantity } });
    };

    const clearItemFromCartHandler = (item) => {
        dispatch({ type: 'CLEAR_ITEM_FROM_CART', payload: item });
    };

    const clearCartHandler = () => {
        dispatch({ type: 'CLEAR_CART' });
    };
    const editCart = (payload) => {
        dispatch({ type: 'EDIT_CART', payload: payload });
    };
    const toggleCartHandler = () => {
        dispatch({ type: 'TOGGLE_CART' });
    };
    const getRecentOrder = (payload) => {
        dispatch({ type: 'GET_RECENT_ORDER', payload });
    };
    const couponHandler = (coupon) => {
        dispatch({ type: 'APPLY_COUPON', payload: coupon });
    };
    const removeCouponHandler = () => {
        dispatch({ type: 'REMOVE_COUPON' });
    };
    const rehydrateLocalState = (payload) => {
        dispatch({ type: 'REHYDRATE', payload });
    };
    const toggleRestaurant = () => {
        dispatch({ type: 'TOGGLE_RESTAURANT' });
    };
    const isInCartHandler = (id) => {
        return state.items?.some((item) => item.id === id);
    };
    const getItemHandler = (id) => {
        return state.items?.find((item) => item.id === id);
    };
    const getCartItemsPrice = () => cartItemsTotalPrice(state.items).toFixed(2);
    const getCartItemsTotalPrice = () =>
        cartItemsTotalPrice(state.items, state.coupon).toFixed(2);

    const getDiscount = () => {
        const total = cartItemsTotalPrice(state.items);
        const discount = state.coupon
            ? (total * Number(state.coupon?.discountInPercent)) / 100
            : 0;
        return discount.toFixed(2);
    };
    const getItemsCount = state.items?.reduce(
        (acc, item) => acc + item.quantity,
        0
    );
    return {
        state,
        getItemsCount,
        rehydrateLocalState,
        addItemHandler,
        editCart,
        removeItemHandler,
        clearItemFromCartHandler,
        clearCartHandler,
        getRecentOrder,
        isInCartHandler,
        getItemHandler,
        toggleCartHandler,
        getCartItemsTotalPrice,
        getCartItemsPrice,
        couponHandler,
        removeCouponHandler,
        getDiscount,
        toggleRestaurant,
    };
};

export const CartProvider = ({ children }) => {
    const {
        state,
        rehydrateLocalState,
        getItemsCount,
        editCart,
        addItemHandler,
        removeItemHandler,
        clearItemFromCartHandler,
        clearCartHandler,
        isInCartHandler,
        getItemHandler,
        toggleCartHandler,
        getCartItemsTotalPrice,
        couponHandler,
        removeCouponHandler,
        getCartItemsPrice,
        getDiscount,
        toggleRestaurant,
        getRecentOrder
    } = useCartActions();
    const { rehydrated, error } = useStorage(state, rehydrateLocalState);

    return (
        <CartContext.Provider
            value={{
                isOpen: state.isOpen,
                items: state.items,
                recentOrder: state.recentOrder,
                coupon: state.coupon,
                isRestaurant: state.isRestaurant,
                cartItemsCount: state.items?.length,
                itemsCount: getItemsCount,
                addItem: addItemHandler,
                editCart: editCart,
                removeItem: removeItemHandler,
                removeItemFromCart: clearItemFromCartHandler,
                clearCart: clearCartHandler,
                isInCart: isInCartHandler,
                getItem: getItemHandler,
                toggleCart: toggleCartHandler,
                calculatePrice: getCartItemsTotalPrice,
                calculateSubTotalPrice: getCartItemsPrice,
                applyCoupon: couponHandler,
                removeCoupon: removeCouponHandler,
                calculateDiscount: getDiscount,
                toggleRestaurant,
                getRecentOrder
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
