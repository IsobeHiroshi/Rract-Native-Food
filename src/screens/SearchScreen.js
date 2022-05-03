import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "./components/SearchBar";
import useResults from "../hooks/useResults"; // Custom hook
import ResultsList from "./components/ResultsList";

const SearchScreen = () => {
  /* When we update something on the screen, that always refers to State! */
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === "$" || "$$" || "$$$"
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      {/* <- This empty tag can be used to fit everything within the viewport as well!*/}
      <View style={{ flex: 1 }}>
        {/* "flex: 1" will fill up all the "available" space */}
        <SearchBar
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
          onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results.</Text>
        <ScrollView>
          <ResultsList
            results={filterResultsByPrice("$")}
            title="Cost Effective"
          />
          <ResultsList
            results={filterResultsByPrice("$$")}
            title="Bit Pricier"
          />
          <ResultsList
            results={filterResultsByPrice("$$$")}
            title="Big Spender"
          />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
