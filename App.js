// import { StyleSheet, Text, View, } from 'react-native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
const stack = createStackNavigator();
export default function App() {
  const [isFirstAppLaunch, setIsFirstAppLaunch] = React.useState(null);

  React.useEffect(() => {
    const checkStorage = async () => {
      const appData = await AsyncStorage.getItem("isFirstAppLaunch");
      appData === null ? setIsFirstAppLaunch(true) : setIsFirstAppLaunch(false);
    };
    checkStorage();
  }, []);

  return (
    isFirstAppLaunch !== null && (
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerShown: false }}>
          <stack.Screen name="OnboardingScreen" component={OnBoardingScreen} />
          <stack.Screen name="HomeScreen" component={HomeScreen} />
        </stack.Navigator>
      </NavigationContainer>
    )
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
