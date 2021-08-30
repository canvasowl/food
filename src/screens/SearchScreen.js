import React, { useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import CardList from "../components/CardList";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        onTermChange={(newTerm) => setTerm(newTerm)}
        term={term}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <ScrollView>
        <CardList title="Cost Effective" data={filterResultsByPrice("$")} />
        <CardList title="Bit Priceier" data={filterResultsByPrice("$$")} />
        <CardList title="Big Spender" data={filterResultsByPrice("$$$")} />
      </ScrollView>
    </>
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
