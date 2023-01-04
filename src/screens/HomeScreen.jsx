import React from "react";
import { StatusBar } from "expo-status-bar";

import { Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is your Home Screen</Text>

      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
