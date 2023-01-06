import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Feather } from "@expo/vector-icons/Feather";

import CustomButtomNavigation from "../components/BottomNavigation";
const MainScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <CustomButtomNavigation />
      <StatusBar style="auto" backgroundColor="#fff" />
    </View>
  );
};

export default MainScreen;
