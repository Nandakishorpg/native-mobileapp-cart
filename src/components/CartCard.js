import { React, useState, useContext } from "react";
import axios from "axios";
import { View, Text, Image } from "react-native";

import { Button } from "react-native-paper";

import { MyContext } from "../contexts/CartItemContext";
export default function CartCard({ Array }) {
  const { cartData, setCartData } = useContext(MyContext);

  const handleRemove = (index, value) => {
    console.log(value.id);
    const updatedItems = cartData.filter((item) => item.id !== value.id);
    // console.log("updatedItems",updatedItems)
    // console.log(cartData,"<<<<<<<<")
    setCartData(updatedItems);
  };

  return (
    <View className="flex flex-row  flex-wrap justify-evenly">
      {Array &&
        Array?.map((value, index) => (
          <View
            key={index}
            className="bg-stone-100 p-2 w-40   justify-center items-center content-center  flex flex-col rounded-lg shadow-lg mb-10 border"
          >
            <Image
              className="h-24 w-28 mb-2 rounded-lg shadow-lg"
              source={{ uri: value?.image }}
            />

            <View className="flex flex-col justify-between  gap-0.5 text-left">
              <View className="h-10 mb-2">
                <Text
                  style={{ color: "blue", textAlign: "left", fontSize: 12 }}
                >
                  {value?.title}
                </Text>
                <Text style={{ color: "green", fontSize: 12 }}>
                  {" "}
                  {value?.price}$
                </Text>
              </View>

              <View className="flex-col gap-2">
               
                <Button
                  className="bg-red-300 h-10  text-white shadow-lg rounded-lg p-0.5"
                  onPress={() => {
                    handleRemove(index, value);
                  }}
                  mode="elevated"
                >
                  <Text className="text-xs">Remove</Text>
                </Button>
              </View>
            </View>
          </View>
        ))}
    </View>
  );
}
