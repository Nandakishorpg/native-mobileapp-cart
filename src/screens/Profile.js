import { React, useState, useContext, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import CartCard from "../components/CartCard";
import { MyContext } from "../contexts/CartItemContext";
import { Button, TextInput } from "react-native-paper";

const Profile = () => {
  const { cartData, setCartData } = useContext(MyContext);
  const [total, settotal] = useState(0);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (cartData) {
      let totalAmt = 0;
      for (let i = 0; i < cartData.length; i++) {
        totalAmt += cartData[i].price;
      }
      console.log(totalAmt);
      totalAmt = Math.floor(totalAmt);
      settotal(totalAmt);
    }
  }, [cartData]);

  const handleChange = (text) => {
    console.log(text);
    setInputValue(text);
    // console.log(inputValue) // update the state with the new value
  };
  const handlePromo = () => {
    if (inputValue === "PRIME123") {
      let finalBefore = total / 10;
      if (finalBefore < 60) {
        let final = total - finalBefore;
        final = Math.floor(final);
        settotal(final);
      } else {
        let final = total - 60;
        final = Math.floor(final);
        settotal(final);
      }
    }
  };

  return (
    <View className="h-full border border-red-500">
      <ScrollView>
        <View className="flex justify-between">
          <View className="bg-stone-200 rounded-lg items-center p-2 mb-7 ">
            <Text className="text-2xl text-green-600">My Cart</Text>
          </View>
          {cartData && cartData.length > 0 ? (
            <CartCard Array={cartData} />
          ) : (
            <View className="bg-stone-200 rounded-lg items-center p-4">
              {/* <Text className="text-2xl text-red-600">Its Empty here!!!!!!</Text> */}
              <Image
                source={{
                  uri: "https://cdn.dribbble.com/users/2370289/screenshots/6150406/media/6579b4e1f9a6658157cf653538b25a8b.jpg?compress=1&resize=400x300",
                }}
                className="w-full rounded-lg h-80 drop-shadow-lg"
              />
            </View>
          )}
          {cartData && cartData.length > 0 && (
            <View className="items-center h-1/2 border flex align-middle justify-center border-red-500">
              <Text className="border">Toal Amount - {total} $</Text>
              <View className="p-2">
                <TextInput
                  onChangeText={handleChange}
                  className="w-40 h-10 rounded-lg border"
                ></TextInput>
                <View className="border border-yellow-600">
                  <Button
                    onPress={handlePromo}
                    mode="elevated"
                    className="mt-10 bg-stone-200"
                  >
                    Apply Promo Codes
                  </Button>
                </View>
              </View>
              <View className="border border-blue-400">
                <Button mode="elevated" onPress={() => {}}>
                  Checkout
                </Button>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
