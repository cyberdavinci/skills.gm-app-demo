import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
// import { wants } from "../Datas/wanto";
const { height, width } = Dimensions.get("window");
export const wants = [
  {
    image: require("../../assets/images/hire.jpg"),
    description:
      "Are you a skilled worker? Sign up now and sumbmit a listing or contact us for help",
    buttonText: "I want to Work",
  },
  {
    image: require("../../assets/images/work.jpg"),
    description:
      "Need a recommendation? Tell us about your project and we will get you the right tradesmen",
    buttonText: "I want to Hire",
  },
  {
    image: require("../../assets/images/browse.jpg"),
    description:
      "Browse our skills directory and find different skilled workers",
    buttonText: "Browse Directory",
  },
];

const WantTo = () => {
  return (
    <ScrollView
      // style={{ width: width }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* <Text>Hello there</Text> */}
      {wants.map((wants, index) => (
        <View
          key={index}
          style={[
            styles.container,
            { width: width * 0.85, height: height * 0.4 },
          ]}
        >
          <Image
            source={wants.image}
            style={{ width: "100%", resizeMode: "contain", height: 170 }}
          />
          <View>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              {wants.description}
            </Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>{wants.buttonText}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#fff",
    borderWidth: 2,
    marginRight: 10,
    borderRadius: 15,
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    padding: 10,
    borderColor: "#01279A",
  },
  btn: {
    width: "50%",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#01279A",
    paddingVertical: 10,
    borderRadius: 15,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#fff",
  },
});
export default WantTo;
