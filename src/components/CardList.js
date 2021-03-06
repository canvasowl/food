import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Card from "./Card";

const CardList = ({ title, data }) => {
  const renderItem = ({ item }) => <Card business={item} />;

  return (
    <View style={styles.cardListContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  cardListContainer: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
});

export default CardList;
