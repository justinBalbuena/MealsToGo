import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  StatusBar,
} from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";  
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

//kinda like instantiating a specifiv version of a View element
//as this new name "RestaurantListContainer"
const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;


export const RestaurantsScreen = () => (
  <SafeAreaProvider>
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  </SafeAreaProvider>
)

const styles = StyleSheet.create({
  search: {
    
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
