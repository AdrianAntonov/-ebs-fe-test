// import React, { Component } from "react";
import { useState, useEffect } from "react";
import appContext from "./appContext";
import { fetchProducts } from "../services/products-api";

export default function AppProvider({ children }) {
  const [productsList, setProductsList] = useState([]);
  const [cartList, setCartList] = useState({});

  useEffect(() => {
    fetchProducts().then(({ data }) => setProductsList(data));
  }, []);

  const addItemToCart = (itemId) => {
    if (cartList[itemId]) {
      setCartList({ ...cartList, [itemId]: cartList[itemId] + 1 });
    } else {
      setCartList({ ...cartList, [itemId]: 1 });
    }
  };

  const removeItemFromCart = (itemId) => {
    delete cartList[itemId];
    setCartList({ ...cartList });
  };

  const subtractCartItem = (itemId) => {
    if (cartList[itemId] === 1) {
      removeItemFromCart(itemId);
    }
    if (cartList[itemId]) {
      setCartList({ ...cartList, [itemId]: cartList[itemId] - 1 });
    }
  };

  return (
    <appContext.Provider
      value={{
        products: productsList,
        setProductsList,
        cartList,
        setCartList,
        addItemToCart,
        subtractCartItem,
        removeItemFromCart,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
