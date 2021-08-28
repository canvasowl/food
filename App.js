import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import yelp from "./api/yelp";
import Card from "./components/card";

export default function App() {
  const getBusinesses = async (location) => {
    const response = await yelp.get(`search?location=${location}`);
    console.log(response);
    return response;
  };

  getBusinesses("NYC");

  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
