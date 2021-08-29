import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { StatusBar } from "expo-status-bar";
// import React, { useState, useEffect } from "react";
// import yelp from "./api/yelp";
// import CardList from "./components/cardList";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    SearchScreen,
  },
  {
    initialRouteName: "SearchScreen",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);

// export default function App() {
//   const [businesses, setBusinesses] = useState([]);

//   const getBusinesses = async (location) => {
//     const response = await yelp.get(`search?location=${location}`);
//     setBusinesses(response.data.businesses);
//     return response;
//   };

//   useEffect(() => {
//     businesses.length === 0 ? getBusinesses("NYC") : null;
//   }, [businesses]);

//   if (businesses.length === 0) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <CardList title="Popular" data={businesses} />
//       <CardList title="For you" data={DATA} />
//     </View>
//   );
// }
