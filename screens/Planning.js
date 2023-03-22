import React, { Component } from 'react';
import {
  Text, View, ImageBackground, StyleSheet,
  SafeAreaView, Platform, StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Planning extends Component {
  render() {
    return (
      <View
      
        style={{
              flex: 1,
             flexDirection: "column",
             alignContent: "flex-end",
             direction : "rtl"
            }}
      >
        <SafeAreaView
          style={styles.droidSafeArea}
        />
        <ImageBackground
          source={require("../assets/planningbg.png")}
         // style={styles.imageBackgroundStyle}
        >

          <View
           
          >
            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}

            >
              <Ionicons
                name={"add-sharp"}
                size={RFValue(40)}
                color={"#FEFAF6"}
              />

            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}

            >

              <Ionicons
                name={"remove-sharp"}
                size={RFValue(40)}
                color={"#FEFAF6"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}

            >
              <Ionicons
                name={"checkmark-done"}
                size={RFValue(40)}
                color={"#FEFAF6"}
              />

            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}

            >
              <Ionicons
                name={"timer"}
                size={RFValue(40)}
                color={"#FEFAF6"}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text>Planning</Text>

          </View>

        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackgroundStyle: {
    resizeMode: "cover",
   // flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(0)
  },
  button: {
    width: RFValue(50),
    height: RFValue(50),
  
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "#92D3B3",
    marginBottom: RFValue(20),
   
  },
  buttonText: {
    fontSize: RFValue(24),
    color: "#FEFAF6",
  },
})