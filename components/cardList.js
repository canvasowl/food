import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Card from "./card";

const renderItem = ({ item }) => <Card />;

const CardList = (props) => {
  return (
    <View style={styles.cardListContainer}>
      <Text>{props.title}</Text>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardListContainer: {
    backgroundColor: "green",
    paddingTop: 70,
    paddingLeft: 10,
    paddingBottom: 10,
  },
});

export default CardList;
