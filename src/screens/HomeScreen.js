import { React, useState } from "react";
import {
  Button,
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

const HomeScreen = ({ navigation }) => {
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
          <Text style={styles.text}>Market </Text>
        </View>
        <View style={styles.container4}>
          {s.map((value, index) => (
            <TouchableWithoutFeedback style={styles.box1} key={index}>
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
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          title="Profile"
          onPress={() => navigation.navigate("Profile")}
        />
        <Button title="1" onPress={() => navigation.navigate("Profile")} />
        <Button title="2" onPress={() => navigation.navigate("Profile")} />
        <Button title="3" onPress={() => navigation.navigate("Profile")} />
      </View>
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
    width: "30%",

    borderRadius: 15,
  },
  container4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});

export default HomeScreen;
