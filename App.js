import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import yelp from "./api/yelp";
import CardList from "./components/cardList";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export default function App() {
  const [businesses, setBusinesses] = useState([]);

  const getBusinesses = async (location) => {
    const response = await yelp.get(`search?location=${location}`);
    setBusinesses(response.data.businesses);
    return response;
  };

  useEffect(() => {
    businesses.length === 0 ? getBusinesses("NYC") : null;
  }, [businesses]);

  if (businesses.length === 0) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <CardList title="Popular" data={businesses} />
      <CardList title="For you" data={DATA} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
