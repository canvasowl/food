import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        onEndEditing={() => onTermSubmit()}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        value={term}
        style={styles.textInput}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0eeee",
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: "row",
    marginTop: 15,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
