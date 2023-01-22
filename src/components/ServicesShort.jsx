import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
const { height } = Dimensions.get("window");
const ServicesShort = ({ navigation }) => {
  return (
    <ScrollView
      style={{ marginTop: 30, flexDirection: "row", height: height * 0.25 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.imgContainer}>
        <Image
          source={require("../../assets/images/electrician.png")}
          style={styles.img}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Electrician</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../assets/images/graphicDesigner.png")}
          style={styles.img}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Graphics Designer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../assets/images/carpenter.png")}
          style={styles.img}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Carpenter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.seeAll}>
        <TouchableOpacity onPress={() => navigation.navigate("Services")}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
        <AntDesign name="arrowright" size={30} color="black" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: "#EEEEEE",
    width: 150,
    height: 150,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 10,
    // paddingHorizontal: 10,
  },
  img: { width: 100, height: 100 },
  btn: {
    backgroundColor: "#01279A",
    padding: 5,
    borderRadius: 10,
    minWidth: 130,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    // fontSize: 16,
  },
  seeAll: {
    width: 130,
    height: 130,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 75,
    flexDirection: "row",
  },
  seeAllText: {
    fontWeight: "900",
    fontSize: 18,
  },
});

export default ServicesShort;
