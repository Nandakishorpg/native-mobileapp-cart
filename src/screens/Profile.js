import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.text}>
          <Text style={styles.text}>Profile page </Text>
        </View>
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
});

export default Profile;
