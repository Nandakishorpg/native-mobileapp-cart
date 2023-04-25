import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Avatar, TouchableRipple } from "react-native-paper";
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const HomeScreen = () => {
  const [color, setColor] = useState(false);
  const [s, sets] = useState([""]);
  // const [s, setS] = useState([]);
  const handleColor = (state, index) => {
    // setColor(!color);
    if (state === "increase") {
      sets([...s, ""]);
    } else if (s.length > 1) {
      const newS = [...s];
      newS.splice(index, 1);
      sets(newS);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.text}>
          <Text style={styles.text}>Hello World </Text>
        </View>

        {s.map((value, index) => (
          <TouchableWithoutFeedback key={index}>
            <View
              style={[
                styles.container2,
                { backgroundColor: color ? "#EBD8B2" : "white" },
              ]}
            >
              <Avatar.Image
                size={54}
                source={require("../../assets/avatar.png")}
              />

              <Icon
                name="arrow-down"
                size={30}
                onPress={() => {
                  handleColor("increase");
                }}
                color="steelblue"
              />
              <TouchableRipple
                onPress={() => console.log("Pressed")}
                rippleColor="rgba(0, 0, 0, .32)"
              >
                <Icon
                  name="arrow-up"
                  size={30}
                  color="red"
                  onPress={() => {
                    handleColor("decrease", { index });
                  }}
                />
              </TouchableRipple>

              <Text style={{ color: "blue" }}>{value}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: "white",
    alignItems: "center",
    marginBottom: 8,
  },
  container: {
    // alignItems: "center",
    padding: 12,
    flex: 1,
    backgroundColor: "#393E46",
  },
  container2: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: 20,
    padding: 5,
    height: 100,

    borderRadius: 15,
  },
  // container3: {
  //   marginBottom:20,
  //   gap:10,
  //   padding: 5,
  //   width: "100%",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: 100,
  //   backgroundColor: "white",
  //   borderRadius: 15,
  // },
});

export default HomeScreen;
