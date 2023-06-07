import { React, useState, useContext } from "react";
import axios from "axios";
import { View, Text, Image } from "react-native";

import { Button } from "react-native-paper";
import { MyContext } from "../contexts/CartItemContext";

export default function ProductCard({ mappingArray }) {
  const { cartData, setCartData } = useContext(MyContext);

  const handleClick = (index, value) => {
    const cartItem = {
      id: value.id,
      image: value.image,
      title: value.title,
      price: value.price,
    };

    const idExists = cartData.some((item) => item.id === value.id);
    if (!idExists) {
      setCartData([...cartData, cartItem]);
    }
  };
  console.log(cartData);
  return (
    <View className="flex flex-row  flex-wrap justify-evenly">
      {mappingArray &&
        mappingArray?.map((value, index) => (
          <View
            key={index}
            className="bg-stone-100 p-3 w-full  justify-center items-center content-center  flex flex-row gap-5 rounded-lg shadow-lg mb-10  border"
          >
            <View className="h-full w-28 shadow-lg">
              <Image
                className="rounded-lg shadow-lg w-full h-32 border"
                source={{ uri: value?.image }}
              />
            </View>

            <View className="flex flex-col justify-between w-1/2  gap-3 text-left">
              <Text style={{ color: "blue", textAlign: "left" }}>
                {" "}
                {value?.title}
              </Text>
              <Text style={{ color: "black" }}> {value?.price}$</Text>

              <Button
                className="bg-green-300 h-10   border-gray-900 w-5/5 text-white shadow-lg rounded-lg p-1 w-70"
                onPress={() => {
                  handleClick(index, value);
                }}
                mode="elevated"
              >
                <Text className="text-xs">Add to Cart</Text>
              </Button>
            </View>
          </View>
        ))}
    </View>
  );
}
