import React, { StatusBar, SafeAreaView } from "react-native";
import Screen from "./app/screens/Screen";
import TabNavigator from "./app/navigations/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <Screen>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Screen>
  );
}
