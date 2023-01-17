import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import UserCard from "../components/UserCard";
// import MoreUserInfo from "../components/MoreUserInfo";
const { width, height } = Dimensions.get("window");

const users = [
  {
    id: 0,
    profilePic: require("../../assets/images/user-images/demoprofession.jpeg"),
    imageGallery: [
      "https://www.pexels.com/photo/person-sewing-2249290/",
      "https://images.pexels.com/photos/1189675/pexels-photo-1189675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://www.pexels.com/photo/patterns-on-gray-fabric-6766247/",
      "https://www.pexels.com/photo/person-in-black-and-gray-long-sleeve-shirt-holding-brown-wooden-board-4621569/",
    ],
    name: "Ousman Faal",
    aboutCustomer:
      "Hi there! I am Ous, psum dolor sit, amet consectetur adipisicing elit. Nisi at, quisquam cum voluptatum sed soluta cupiditate fugiat quia.",
    rate: "5",
    location: "Sukuta",
    date: "Jan 9, 2023",
    proffession: "Tailor",
    views: 90,
    liked: false,
    likes: 4,
    view: false,
  },
  {
    id: 1,
    profilePic: require("../../assets/images/user-images/demoprofession.jpeg"),

    imageGallery: [
      "https://www.pexels.com/photo/man-in-grey-sweater-holding-yellow-sticky-note-879109/",
      "https://www.pexels.com/@goumbik/",
      "https://www.pexels.com/photo/blur-business-close-up-code-270557/",
      "https://www.pexels.com/photo/two-men-looking-at-a-laptop-4974920/",
    ],
    name: "Cyber",
    aboutCustomer:
      "Hi there! I am Ous, psum dolor sit, amet consectetur adipisicing elit. Nisi at, quisquam cum voluptatum sed soluta cupiditate fugiat quia.",
    rate: "5",
    location: "Mars",
    date: "Jan 9, 2023",
    proffession: "EH",
    views: 100,
    liked: false,
    likes: 4,
    view: false,
  },
];

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
          width: width * 0.9,
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
      <FlatList
        data={users}
        renderItem={(user) => <UserCard user={user} users={users} />}
        keyExtractor={(user) => user.id}
        showsVerticalScrollIndicator={false}
      />
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
    left: 10,
    borderRadius: 10,
  },
  searchIcon: {
    left: 335,
    backgroundColor: "#01279A",
    width: 43,
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default SkilledWorkers;
