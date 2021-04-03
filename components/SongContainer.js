import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { NeuButton, NeuView } from "react-native-neu-element";
import { render } from "react-dom";

const gray = "#919492";
const pppink = "#fdbaf5";
const wWidth = Dimensions.get("window").width;

const SongContainer = (props) => {
  const { image = "../assets/NoSongPlaying.png", title, artist } = props;
  return (
    <>
      <View style={styles.songArtContainer}>
        <NeuView
          color="#424655"
          width={wWidth / 1.25}
          height={wWidth / 1.25}
          borderRadius={wWidth / 1.25 / 2}
        >
          <Image source={require(image)} style={styles.songArt} />
        </NeuView>
      </View>
      <View style={styles.songContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  songArtContainer: {
    marginVertical: 32,
    alignItems: "center",
  },
  songArt: {
    width: wWidth / 1.25,
    height: wWidth / 1.25,
    borderRadius: wWidth / 1.25 / 2,
    borderColor: "#424655",
    borderWidth: 5,
  },
  songContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#6c7a93",
    fontWeight: "300",
  },
  artist: {
    fontSize: 13,
    marginTop: 8,
    color: gray,
    fontWeight: "500",
  },
});
export default SongContainer;
