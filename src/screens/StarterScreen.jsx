import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const StarterScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text style={styles.text}>Welcome to Gambia Skills Directory</Text>
      <Text style={styles.text}>All Skills ONE Place</Text>
      <Image
        source={require("../../assets/images/starterbg.png")}
        style={{ width: "70%", height: "40%" }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#01279A",
          width: "95%",
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          borderRadius: 20,
          marginTop: 50,
        }}
        onPress={() => navigation.replace("HomeScreen")}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "700",
    // color: "",
  },
});
export default StarterScreen;
