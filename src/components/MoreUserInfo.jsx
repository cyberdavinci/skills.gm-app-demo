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
} from "react-native";

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
  // console.log(selectedUser);
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      {/* <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Example of Bottom Sheet in React Native
        </Text>
        <Button
          onPress={toggleBottomNavigationView}
          //on Press of the button bottom sheet will be visible
          title="Show Bottom Sheet"
        /> */}
      <BottomSheet
        visible={visible}
        //setting the visibility state of the bottom shee
        onBackButtonPress={toggleBottomNavigationView}
        //Toggling the visibility state on the click of the back botton
        onBackdropPress={toggleBottomNavigationView}

        //Toggling the visibility state on the clicking out side of the sheet
      >
        {/*Bottom Sheet inner View*/}
        <View style={[styles.bottomNavigationView, { height: height * 0.9 }]}>
          {selectedUser && (
            <View
              key={selectedUser.index}
              style={{
                flex: 1,
                flexDirection: "column",
                // justifyContent: "space-between",
              }}
            >
              <Image
                source={selectedUser.item.profilePic}
                style={{
                  height: "35%",
                  width: width,
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                  resizeMode: "cover",
                  // marginTop: 40,
                }}
              />
              <Text>{selectedUser.item.name}</Text>
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
});
