import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  StatusBar,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";


export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
     
    </>
  );
}

