import { React, createContext, useState } from "react";
export const MyContext = createContext();
export default function CartItemContext({ children }) {
  const [cartData, setCartData] = useState([]);
  const value = { cartData, setCartData };
  return (
    <>
      <MyContext.Provider value={value}>{children}</MyContext.Provider>
    </>
  );
}
