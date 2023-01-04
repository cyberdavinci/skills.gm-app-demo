import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
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
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    // console.log(currentIndex);
    setCurrentSlideIndex(currentIndex);
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };
  const SlideControls = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
            // marginRight: 5,
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex === index && {
                  backgroundColor: "blue",
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View style={{ marginBottom: 40 }}>
          {slides.length - 1 == currentSlideIndex ? (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace("HomeScreen")}
              >
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                >
                  Get Enlisted
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={skip}
                style={[
                  styles.btn,
                  {
                    borderWidth: 2,
                    backgroundColor: "transparent",
                    borderColor: "teal",
                  },
                ]}
              >
                <Text
                  style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}
                >
                  Skip
                </Text>
              </TouchableOpacity>
              <View style={{ padding: 10 }} />
              <TouchableOpacity onPress={goToNextSlide} style={[styles.btn]}>
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ref={ref}
        pagingEnabled
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <SlideControls />
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
  indicator: {
    width: 16,
    borderRadius: 2,
    height: 5,
    backgroundColor: "gray",
    marginRight: 7,
  },
  btn: {
    flex: 1,
    backgroundColor: "teal",
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: "center",
  },
});
export default OnBoardingScreen;
