import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import yelp from "../api/yelp";

const BusinessScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (result === null) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      {result.photos.length &&
        result.photos.map((photoUrl) => {
          return (
            <View>
              <Image style={styles.image} source={{ uri: photoUrl }} />
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 25,
  },
  image: {
    height: 200,
    width: 200,
    marginTop: 5,
  },
});

export default BusinessScreen;
