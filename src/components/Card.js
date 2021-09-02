import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const Card = ({ business, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("BusinessScreen", { id: business.id })}
    >
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: business.image_url }} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{business.name}</Text>
          <Text>
            {business.rating} Stars, {business.review_count} Reviews
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const borderRadius = 6;

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 275,
    marginRight: 10,
    marginTop: 10,
  },
  imageWrapper: {
    backgroundColor: "red",
    flex: 8,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
  details: {
    padding: 10,
    backgroundColor: "#eeeeee",
    flex: 3,
  },
  title: {
    fontSize: 20,
    textTransform: "capitalize",
  },
});

export default withNavigation(Card);
