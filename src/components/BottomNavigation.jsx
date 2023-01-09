import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome5, Ionicons, AntDesign, Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SkilledWorkers from "../screens/SkilledWorkers";

const RecentsScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Services</Text>
  </View>
);
const NotificationsScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>User Account</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const CustomBottomNavigation = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          // let iconName;
          switch (route.name) {
            case "Home":
              // iconName = focused ? "home" : "home-outline";
              return (
                <Ionicons
                  name={"home"}
                  size={24}
                  color={`${focused ? "#01279A" : "gray"}`}
                />
              );

            // break;
            case "SkilledWorkers":
              return (
                <FontAwesome5
                  name={"users-cog"}
                  size={24}
                  color={`${focused ? "#01279A" : "gray"}`}
                />
              );
            case "Services":
              return (
                <AntDesign
                  name={"customerservice"}
                  size={24}
                  color={`${focused ? "#01279A" : "gray"}`}
                />
              );
            case "Account":
              return (
                <Feather
                  name={"user"}
                  size={24}
                  color={`${focused ? "#01279A" : "gray"}`}
                />
              );
            default:
              break;
          }
          // return <Ionicons name={iconName} size={18} color={"tomato"} />;
        },
        tabBarActiveTintColor: "#01279A",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="SkilledWorkers" component={SkilledWorkers} />
      <Tab.Screen name="Services" component={RecentsScreen} />
      <Tab.Screen name="Account" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: "#000",
  },
});
export default CustomBottomNavigation;
