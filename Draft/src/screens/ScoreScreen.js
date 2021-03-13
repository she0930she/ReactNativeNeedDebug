import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Navigator, Button } from "react-native";
import BoxScreen from "./BoxScreen"
import ModalReason from "./ModalReason";


const ScoreScreen = ({ navigation }) => {
  const score = '50';

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Your Score is</Text>
      <Text style={styles.scoreStyle}>{score}</Text>
      <Text style={styles.textStyle}>out of 100</Text>
      <ModalReason />
      {/* <TouchableOpacity>
        <Text style={styles.buttonStyle}>Why?</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
  textStyle: {
    fontSize: 20
  },
  scoreStyle: {
    fontSize: 100,
    color: '#F53845'
  },
  buttonStyle: {
    fontSize: 30,
    color: '#352AFA'
  }


});

export default ScoreScreen;