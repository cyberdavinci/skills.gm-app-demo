import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import MoreUserInfo from "./MoreUserInfo";
const { width, height } = Dimensions.get("window");
const users = [
  {
    id: 0,
    profilePic: require("../../assets/images/user-images/demoprofession.jpeg"),
    name: "Ousman Faal",
    rate: "5",
    location: "Sukuta",
    date: "Jan 9, 2023",
    proffession: "Tailor",
    views: "90",
    liked: false,
    likes: 4,
    view: false,
  },
  {
    id: 1,
    profilePic: require("../../assets/images/user-images/demoprofession.jpeg"),
    name: "Cyber",
    rate: "5",
    location: "Mars",
    date: "Jan 9, 2023",
    proffession: "EH",
    views: "100",
    liked: false,
    likes: 4,
    view: false,
  },
];

const UserCard = () => {
  const [fillHeart, setFillHeart] = React.useState("hearto");
  const [visible, setVisible] = React.useState(false);
  const [updatedUser, setUpdatedUser] = React.useState({});
  const toggleBottomNavigationView = (index) => {
    let currentSelectedUser = users
      .map((user, id) => {
        return index === id ? { ...user, view: !user.view } : user;
      })
      .filter((user) => user.view);

    setUpdatedUser(currentSelectedUser);
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
  const liked = (index) => {
    // users.map((user, id) => {
    //   setFillHeart(index === id ? "heart" : "hearto");
    //   // return index === id ? { ...user, liked: !user.liked } : user;
    // });
    console.log((users[index].liked = false));
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {users.map((user, index) => (
        <TouchableOpacity
          onPress={() => toggleBottomNavigationView(index)}
          activeOpacity={1}
          key={index}
          style={[
            styles.container,
            { width: width * 0.9, height: height * 0.5 },
          ]}
        >
          <View style={{ position: "relative" }}>
            <Image
              source={user.profilePic}
              style={{
                width: width * 0.9,
                height: height * 0.31,
                // borderRadius: 10,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                resizeMode: "cover",
              }}
            />
            <AntDesign
              onPress={() => {
                liked(index);
                // setFillHeart(`${user.liked ? "heart" : "hearto"}`);
              }}
              name={fillHeart}
              size={30}
              color="red"
              style={{
                position: "absolute",
                top: 10,
                marginLeft: 10,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                right: 30,
                alignItems: "center",
              }}
            >
              <AntDesign
                onPress={(name) => {
                  name;
                }}
                name="eyeo"
                size={28}
                color="#01279A"
                style={styles.view}
              />
              <Text style={[styles.view, { fontSize: 30 }]}>{user.views}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              padding: 5,
              height: 60,
              backgroundColor: "#01279A",
              width: "100%",
            }}
          >
            <Text style={styles.name}>{user.name}</Text>
            <Text style={{ color: "#fff" }}>{user.rate}⭐</Text>
          </View>
          {/*  location and dates*/}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              //   justifyContent: "s",
              padding: 5,
              paddingRight: 30,
              marginTop: 20,

              //   paddingHorizontal: 25,
            }}
          >
            <EvilIcons
              name="location"
              size={26}
              color="#01279A"
              //   style={styles.dateLocationText}
            />
            <Text style={styles.dateLocationText}>{user.location}</Text>
            <View style={{ padding: 5 }} />
            <Text style={styles.dateLocationText}>{user.date}</Text>
          </View>
          {/*  */}
          <View style={styles.proffessionContainer}>
            <Text style={styles.proffession}>{user.proffession}</Text>
            {/* <View style={{ paddingHorizontal: 25 }} /> */}
          </View>
        </TouchableOpacity>
      ))}
      <MoreUserInfo
        toggleBottomNavigationView={toggleBottomNavigationView}
        visible={visible}
        setVisible={setVisible}
        selectedUser={updatedUser}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 50,
  },
  name: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 24,
    // paddingLeft: 15,
  },
  view: {
    color: "#579BB1",
    fontWeight: "900",
    // fontSize: 20,
  },
  dateLocationText: { fontSize: 20, color: "gray" },
  proffessionContainer: {
    backgroundColor: "#01279A",
    width: "100%",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // marginBottom: 0,

    // borderRadius: 5,
  },
  //   dateLocationText: {},
  //   dateLocationText: { fontSize: 20 },
  proffession: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default UserCard;
