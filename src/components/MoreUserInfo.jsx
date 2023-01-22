// import React in our code
import React from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// Do not uncomment this section until you find a solution to it

// import Carousel from "react-native-snap-carousel";
//import basic react native components
import { BottomSheet } from "react-native-btr";

//import to show social icons
// import { SocialIcon } from "react-native-elements";

const { width, height } = Dimensions.get("window");
const MoreUserInfo = ({
  visible,
  toggleBottomNavigationView,
  selectedUser,
}) => {
  const ref = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const updateCurrentSlideIndex = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = (index) => {
    const newOffset = index * width;
    ref?.current?.scrollTo({ x: newOffset });
    updateCurrentSlideIndex(index);
  };

  // console.log(selectedUser);
  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet
        visible={visible}
        //setting the visibility state of the bottom shee
        onBackButtonPress={toggleBottomNavigationView}
        //Toggling the visibility state on the click of the back botton
        onBackdropPress={toggleBottomNavigationView}

        //Toggling the visibility state on the clicking out side of the sheet
      >
        {/*Bottom Sheet inner View starts here ------*/}
        <View style={[styles.bottomNavigationView, { height: height * 0.9 }]}>
          {selectedUser && (
            <View key={selectedUser.index}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ref={ref}
                horizontal
                onMomentumScrollEnd={updateCurrentSlideIndex}
                style={{ height: height * 0.4 }}
              >
                {selectedUser.item.imageGallery.map((item, index) => (
                  <Image
                    key={index}
                    source={{ uri: item }}
                    style={[
                      styles.galleryImage,
                      {
                        width: width,
                        height: "100%",
                      },
                    ]}
                  />
                ))}
              </ScrollView>

              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                {selectedUser.item.imageGallery.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      goToNextSlide(index);
                    }}
                    style={{ marginTop: 10 }}
                  >
                    <Image
                      source={{ uri: item }}
                      style={[
                        currentIndex === index ? styles.activeImage : null,
                        {
                          width: 72,
                          height: 72,
                          borderRadius: 10,

                          // borderColor: "#01279A",
                          // borderWidth: 5,
                          // borderRadius: 30,
                        },
                      ]}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <View style={[styles.userInfo, { height: height * 0.3 }]}>
                <Text style={styles.userName}>{selectedUser.item.name}</Text>
                <Text style={styles.userDescription}>
                  {selectedUser.item.aboutSkilledWorker}
                </Text>
              </View>

              <TouchableOpacity style={styles.hireBtn}>
                <Text style={styles.hireText}>Hire me!🙂</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </BottomSheet>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default MoreUserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#E0F7FA",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    // height: 250,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  galleryImage: {
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    // marginBottom: 10,
  },
  activeImage: {
    borderWidth: 3,
    borderColor: "#01279A",
    width: 75,
    height: 75,
    // borderRadius: 10,
  },
  // activeImage: {},
  userInfo: { padding: 20 },
  userName: { fontSize: 24, fontWeight: "bold" },
  userDescription: { fontSize: 16, textAlign: "justify" },
  hireBtn: {
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  hireText: {
    alignItems: "center",
    width: 300,
    textAlign: "center",

    backgroundColor: "#01279A",
    color: "#fff",
    paddingVertical: 15,
    borderRadius: 10,
    fontSize: 18,
  },
});
