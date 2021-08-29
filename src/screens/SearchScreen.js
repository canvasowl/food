import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import CardList from "../components/CardList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$' || '$$$'

    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        onTermSubmit={() => searchApi()}
        onTermChange={(newTerm) => setTerm(newTerm)}
        term={term}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text style={styles.title}>Search screen</Text>
      <Text>We have found {results.length} results</Text>
      <CardList title="Cost Effective" data={filterResultsByPrice("$$")} />
      <CardList title="Bit Priceier" data={filterResultsByPrice("$$$")} />
      <CardList title="Big Spender" data={filterResultsByPrice("$$$$")} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});

export default SearchScreen;
