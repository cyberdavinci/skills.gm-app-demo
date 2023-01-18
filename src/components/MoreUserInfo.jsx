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
  users,
}) => {
  const ref = React.useRef(null);

  const goToNextSlide = (index) => {
    const newOffset = index * width;
    ref?.current?.scrollTo({ x: newOffset });
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
                // onMomentumScrollEnd={updateCurrentSlideIndex}
                style={{ height: height * 0.4 }}
              >
                {selectedUser.item.imageGallery.map((item, index) => (
                  <Image
                    key={index}
                    source={{ uri: item }}
                    style={{
                      width: width,
                      height: height * 0.4,
                      alignItems: "center",
                      justifyContent: "center",
                      borderTopRightRadius: 30,
                      borderTopLeftRadius: 30,
                    }}
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
                  >
                    <Image
                      source={{ uri: item }}
                      style={{ width: 70, height: 70 }}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <View style={[styles.userInfo, { height: height * 0.3 }]}>
                <Text style={styles.userName}>{selectedUser.item.name}</Text>
                <Text style={styles.userDescription}>
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                  at, quisquam cum voluptatum sed soluta cupiditate fugiat quia
                  voluptates eaque consectetur omnis est aliquam.
                </Text>
              </View>
              <View>
                <TouchableOpacity style={styles.hireBtn}>
                  <Text style={styles.hireText}>Hire</Text>
                </TouchableOpacity>
              </View>
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
  userInfo: { padding: 20 },
  userName: { fontSize: 24, fontWeight: "bold" },
  userDescription: { fontSize: 16, textAlign: "justify" },
});
