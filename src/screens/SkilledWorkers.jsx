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
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <View
        style={{
          //   flexDirection: "row",
          //   alignItems: "center",
          marginTop: 30,
          position: "relative",
          height: height * 0.1,
          width: width * 0.7,
        }}
      >
        <TextInput
          placeholder="Who you looking for?"
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View
          style={{
            flexDirection: "row",
            height: height * 0.85,
          }}
        > */}
        <UserCard />
        <UserCard />
        {/* </View> */}
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
    left: 35,
    borderRadius: 10,
  },
  searchIcon: {
    left: 320,
    backgroundColor: "#01279A",
    width: 43,
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default SkilledWorkers;
