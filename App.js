import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Slider,
} from "react-native";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { NeuButton, NeuView } from "react-native-neu-element";
import { Component } from "react";

//color
const gray = "#919492";
const pppink = "#fdbaf5";
const wWidth = Dimensions.get("window").width;

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ alignSelf: "stretch" }}>
        <View style={{ marginHorizontal: 32, marginTop: 32 }}>
          <View style={styles.topcontainer}>
            <NeuButton color="#424655" width={48} height={48} borderRadius={24}>
              <AntDesign name="arrowleft" size={20} color={gray} />
            </NeuButton>

            <View>
              <Text style={styles.playing}>PLAYING NOW</Text>
            </View>
            <NeuButton color="#424655" width={48} height={48} borderRadius={24}>
              <Entypo name="menu" size={24} color={gray} />
            </NeuButton>
          </View>
          <View style={styles.songArtContainer}>
            <NeuView
              color="#424655"
              width={wWidth / 1.75}
              height={wWidth / 1.75}
              borderRadius={150}
            >
              <Image
                source={require("./assets/image.jpg")}
                style={styles.songArt}
              />
            </NeuView>
          </View>
          <View style={styles.songContainer}>
            <Text style={styles.title}>SONG NAME</Text>
            <Text style={styles.artist}>Artist</Text>
          </View>
          <View style={styles.trackContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.time}>00:00</Text>
              <Text style={styles.time}>04:43</Text>
            </View>
            <Slider
              minimumValue={0}
              maximumValue={100}
              value={7}
              minimumTrackTintColor={"#b3fcee"}
              maximumTrackTintColor={"#2a2c36"}
              thumbTintColor={"#b3fcee"}
            />
          </View>
          <View style={styles.controlContainer}>
            <NeuButton color="#424655" width={60} height={60} borderRadius={30}>
              <AntDesign name={"stepbackward"} size={25} color={gray} />
            </NeuButton>
            <NeuButton color="#424655" width={80} height={80} borderRadius={40}>
              <NeuView
                color="#b3fcee"
                width={79}
                height={79}
                borderRadius={79 / 2}
                noShadow
              >
                <FontAwesome5
                  name={"pause"}
                  size={40}
                  color={"#ffffff"}
                  classname="playpauseButton"
                />
              </NeuView>
            </NeuButton>
            <NeuButton color="#424655" width={60} height={60} borderRadius={30}>
              <AntDesign name={"stepforward"} size={25} color={gray} />
            </NeuButton>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424655",
    alignItems: "center",
  },
  topcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  playing: {
    color: gray,
    fontWeight: "800",
  },
  songArtContainer: {
    marginVertical: 32,
    alignItems: "center",
  },
  songArt: {
    width: wWidth / 1.75,
    height: wWidth / 1.75,
    borderRadius: 150,
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
  trackContainer: {
    marginTop: 32,
    marginBottom: 64,
  },
  time: {
    fontSize: 10,
    color: gray,
    fontWeight: "700",
  },
  controlContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
