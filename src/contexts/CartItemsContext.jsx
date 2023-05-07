import { React, createContext, useState } from "react";

export const MyContext = createContext();

export default function CartItemsContext({ children }) {
  const [cartData, setCartData] = useState("null");
 const value = { cartData, setCartData };
  return (
    <>
      <MyContext.Provider value={value}>{children}</MyContext.Provider>
    </>
  );
}
