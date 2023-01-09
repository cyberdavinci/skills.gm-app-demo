import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import UserCard from "../components/UserCard";

const { width, height } = Dimensions.get("window");

const SkilledWorkers = () => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View
        style={{
          //   flexDirection: "row",
          //   alignItems: "center",
          marginTop: 30,
          position: "relative",
          height: height * 0.1,
          width: width * 0.9,
        }}
      >
        <TextInput
          placeholder="What do you need?"
          placeholderTextColor={""}
          onChange={setSearchValue}
          value={searchValue}
          style={styles.search}
        />
        <AntDesign
          name="search1"
          size={28}
          color="#fff"
          style={styles.searchIcon}
        />
      </View>
      <ScrollView
        style={{
          width: width,
          flexDirection: "row",
          height: height * 0.85,
        }}
      >
        <UserCard />
        <UserCard />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    backgroundColor: "#FCFBFC",
    // borderWidth: 0.5,
    borderColor: "#01279A",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    position: "absolute",
    borderRadius: 10,
  },
  searchIcon: {
    left: 347,
    backgroundColor: "#01279A",
    width: 43,
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default SkilledWorkers;
