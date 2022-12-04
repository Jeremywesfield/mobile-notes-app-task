import React, { useState } from "react";
import {  Modal, StyleSheet, View } from 'react-native';
import { Login } from "../../login/Login";
import { Signup } from "../../login/Signup";
import { ButtonRow } from "./ButtonRow";

export function LandingModal() {

    const [contentToDisplay, setContentToDisplay] = useState(''); 

    const displayOptions = {
      login: <Login setContentToDisplay={setContentToDisplay} />,
      signup: <Signup setContentToDisplay={setContentToDisplay} />
    }

    return (
    <View style={styles().centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
    >
      <View style={styles().centeredView}>
        <View style={styles(contentToDisplay).modalView}>
            {contentToDisplay ? 
                displayOptions[contentToDisplay] : 
                <ButtonRow setContentToDisplay={setContentToDisplay} />
            }
        </View>
      </View>
    </Modal>
  </View>
);
}


const styles = (isLoginSignup) => StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
     alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgb(240,242,230, .8)'
  },
   modalView: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: '80%',
    height: isLoginSignup ? 600 : 'auto',
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});