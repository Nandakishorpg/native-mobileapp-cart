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
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setApi(res.data);
    });
  }, []);

  return (
    <>
      <ScrollView>
        <View className="p-1 bg-white">

        <Button class onPress={() => navigation.navigate("Profile")}>
          Cart
        </Button>

        <ProductCard mappingArray={api} />
        </View>
      
      </ScrollView>
    </>
  );
};

export default HomeScreen;
