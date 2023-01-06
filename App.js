// import { StyleSheet, Text, View, } from 'react-native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/screens/MainScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import StarterScreen from "./src/screens/StarterScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
const stack = createStackNavigator();
const App = () => {
  const [isFirstAppLaunch, setIsFirstAppLaunch] = React.useState(null);

  React.useEffect(() => {
    const checkStorage = async () => {
      const appData = await AsyncStorage.getItem("isFirstAppLaunch");
      appData === null ? setIsFirstAppLaunch(true) : setIsFirstAppLaunch(false);
      // if (appData == null) {
      //   setIsFirstAppLaunch(true);
      //   await AsyncStorage.setItem("isFirstAppLaunch", "false");
      // } else {
      //   setIsFirstAppLaunch(false);
      // }
    };
    checkStorage();
  }, []);

  return (
    isFirstAppLaunch !== null && (
      <NavigationContainer style={styles.app}>
        <stack.Navigator screenOptions={{ headerShown: false }}>
          <stack.Screen name="StarterScreen" component={StarterScreen} />
          <stack.Screen name="HomeScreen" component={MainScreen} />
        </stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    )
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#fff",

    // alignItems: "center",
    // justifyContent: "center",
  },
});
export default App;
