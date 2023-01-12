// import React in our code
import React from "react";

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";

//import basic react native components
import { BottomSheet } from "react-native-btr";

//import to show social icons
// import { SocialIcon } from "react-native-elements";

const MoreUserInfo = ({
  visible,
  toggleBottomNavigationView,
  selectedUser,
}) => {
  //   console.log(selectedUser);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
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
          <View style={styles.bottomNavigationView}>
            {selectedUser.length > 0 &&
              selectedUser.map((user, index) => (
                <View
                  key={index}
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{user.name}</Text>
                </View>
              ))}
          </View>
        </BottomSheet>
      </View>
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
    backgroundColor: "#E0F7FA",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});
