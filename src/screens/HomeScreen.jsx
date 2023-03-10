import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import WantTo from "../components/WantTo";
import ServicesShort from "../components/ServicesShort";
import { FontAwesome5 } from "@expo/vector-icons";
// import { wants } from "../Datas/wanto";
// const { width, height } = Dimensions.get("window");
const HomeScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: 30,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={styles.greeting}>HELLO CYBER 👋</Text>
          <Text style={styles.question}>Need a handyman??</Text>
        </View>
        <FontAwesome5 name="user-circle" size={40} color="#002C60" />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          position: "relative",
        }}
      >
        <TextInput
          placeholder="What do you need?"
          placeholderTextColor={"#00142B"}
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
      {/* suggesting for what the user might want */}
      <WantTo />

      {/* services shorcut */}
      <ServicesShort navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  greeting: {
    color: "gray",
    fontSize: 20,
  },
  question: {
    fontSize: 34,
    fontWeight: "800",
  },
  search: {
    backgroundColor: "#EEEEEE",
    // borderWidth: 0.5,
    borderColor: "#01279A",
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    position: "absolute",
    borderRadius: 10,
    borderWidth: 2,
    // color: "#00142B",
  },
  searchIcon: {
    left: 343,
    backgroundColor: "#01279A",
    // width: 43,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
export default HomeScreen;
