import { React, useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Avatar, TouchableRipple, Button } from "react-native-paper";
import ProductCard from "../components/ProductCard";

const HomeScreen = ({ navigation }) => {
  const [api, setApi] = useState();

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setApi(response.data);
      } catch (error) {
        console.log("catch Error>>>",error);
      }
    };
    apiCall();
  }, []);
  console.log(api)

  return (
    <>
      <ScrollView>
        <View className="p-6  bg-white">
          {/* <Button className="bg-stone-300 mb-4" onPress={() => navigation.navigate("Cart")}>
           To Cart
           <Text className="text-2xl"></Text>
          </Button> */}

          <ProductCard mappingArray={api} />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
