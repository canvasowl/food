import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import yelp from "../api/yelp";

const BusinessScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);

    console.log(response.data.name);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (result === null) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BusinessScreen;
