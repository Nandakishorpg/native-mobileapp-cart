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
    <View>
      <ScrollView>
        <View className="bg-stone-200 rounded-lg justify-center items-center p-2 mb-7">
          <Text className="text-2xl text-green-600">My Cart</Text>
        </View>
        {cartData && cartData.length > 0 ? (
          <CartCard Array={cartData} />
        ) : (
          <View className="bg-stone-200 rounded-lg justify-center items-center p-4">
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
          <View className="justify-center items-center sticky">
            <Button mode="elevated" onPress={() => {}}>
              Checkout
            </Button>
            <Text>Toal Amount - {total} $</Text>
            <View>
              <TextInput
                onChangeText={handleChange}
                className="w-40 rounded-lg"
              ></TextInput>
              <Button onPress={handlePromo} mode="elevated">
                Apply Promo Code
              </Button>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Profile;
