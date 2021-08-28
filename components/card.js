import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Card = ({ business }) => {
  return (
    <View style={styles.card}>
      <View style={styles.image}></View>
      <View style={styles.details}>
        <Text style={styles.title}>{business.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 275,
    marginRight: 10,
    marginTop: 10,
  },
  image: {
    backgroundColor: "blue",
    flex: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  details: {
    padding: 10,
    backgroundColor: "pink",
    flex: 3,
  },
  title: {
    fontSize: 20,
    textTransform: "capitalize",
  },
});

export default Card;
