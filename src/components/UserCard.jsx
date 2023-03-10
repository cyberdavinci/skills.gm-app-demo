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
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import MoreUserInfo from "./MoreUserInfo";
const { width, height } = Dimensions.get("window");

const UserCard = ({ users, user }) => {
  const [fillHeart, setFillHeart] = React.useState("hearto");
  const [visible, setVisible] = React.useState(false);
  // const [updatedUser, setUpdatedUser] = React.useState({});

  // ######################
  const toggleBottomNavigationView = () => {
    // let currentSelectedUser = users
    //   .map((user, id) => {
    //     return index === id ? { ...user, view: !user.view } : user;
    //   })
    //   .filter((user) => user.view);
    // console.log(user);
    // setUpdatedUser(currentSelectedUser);
    //Toggling the visibility state of the bottom sheet

    setVisible(!visible);
  };
  const liked = () => {
    users.map((user, index) => {
      setFillHeart(user.id === index ? "heart" : "hearto");
      // return index === id ? { ...user, liked: !user.liked } : user;
    });
    // console.log((users[index].liked = false));
  };
  const incremenView = () => {
    // users.map((user, index) => {
    return user.index === user.item.id
      ? { ...user.item, views: user.item.views++ }
      : user;
    // });
  };

  // ################################
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {/* {users.map((user, index) => ( */}
      <TouchableOpacity
        onPress={() => {
          toggleBottomNavigationView(user.index);
          incremenView(user.index);
        }}
        activeOpacity={1}
        // key={index}
        style={[
          styles.container,
          { width: width * 0.9, height: height * 0.53 },
        ]}
      >
        <View style={{ position: "relative" }}>
          <Image
            source={{ uri: user.item.profilePic }}
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
              liked(user.index);
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
            <Text style={[styles.view, { fontSize: 30 }]}>
              {user.item.views}
            </Text>
          </View>
          {/* ++++++++++++++++ user name ++++++++++++++++++++ */}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 30,
            // justifyContent: "space-evenly",
            padding: 5,
            height: 60,
            // backgroundColor: "#01279A",
            width: "100%",
          }}
        >
          <Text style={styles.name}>{user.item.name}</Text>
          <Text style={{ color: "#fff" }}>{user.rate}???</Text>
        </View>
        {/*  location and dates*/}
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 25,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <EvilIcons
            name="location"
            size={26}
            color="#fff"
            //   style={styles.dateLocationText}
          />
          <Text style={styles.dateLocationText}>
            {user.item.location} {user.item.date}
          </Text>
          {/* <View style={{ padding: 5 }} /> */}
          {/* <Text style={styles.dateLocationText}></Text> */}
        </View>
        {/*  */}
        <View style={styles.proffessionContainer}>
          <Text style={styles.proffession}>{user.item.proffession}</Text>
          {/* <View style={{ paddingHorizontal: 25 }} /> */}
        </View>
      </TouchableOpacity>
      {/* ))} */}
      <MoreUserInfo
        toggleBottomNavigationView={toggleBottomNavigationView}
        visible={visible}
        setVisible={setVisible}
        selectedUser={user}
        users={users}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00142B",
    borderRadius: 20,
    // alignItems: "center",

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
  dateLocationText: { fontSize: 20, color: "#fff" },
  proffessionContainer: {
    // backgroundColor: "#01279A",
    width: "100%",
    marginVertical: 15,
    // alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  proffession: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 24,
    paddingLeft: 30,
    textTransform: "uppercase",
  },
});

export default UserCard;
