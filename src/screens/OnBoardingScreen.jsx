import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  Image,
} from "react-native";
const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    image: require("../../assets/images/images1.jpg"),
    title: "Best Digital Solutions",
    subTitile: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "2",
    image: require("../../assets/images/images2.jpg"),
    title: "Achive your goals",
    subTitile: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "3",
    image: require("../../assets/images/images3.png"),
    title: "Increase your value",
    subTitile: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
];

const Slide = ({ item }) => {
  return (
    <View>
      <Image
        source={item.image}
        style={{ height: "75%", resizeMode: "contain", width }}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitile}>{item.subTitile}</Text>
      </View>
    </View>
  );
};

const OnBoardingScreen = ({ navigation }) => {
  const SlideControls = () => {
    return (
      <View style={styles.slidesControl}>
        <View></View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        pagingEnabled
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitile: {
    maxWidth: "75%",
    textAlign: "center",
    lineHeight: 20,
    fontSize: 15,
    marginTop: 10,
    fontWeight: "600",
  },
});
export default OnBoardingScreen;
