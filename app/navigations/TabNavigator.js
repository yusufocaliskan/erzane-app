import { View, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigators";

//Components
import Home from "../screens/Home";
import Login from "../screens/Login";
import Shop from "../screens/Shop";

//Icons
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

//Create tabs
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: () => {
            return <Ionicons name="ios-home-outline" size={24} color="black" />;
          },
        }}
        component={Home}
      />
      <Tab.Screen
        name="ShopTap"
        options={{
          title: "Shop",
          tabBarIcon: () => {
            return <Feather name="shopping-cart" size={24} color="black" />;
          },
        }}
        component={StackNavigator}
      />

      <Tab.Screen
        name="Favorite"
        options={{
          title: "Favorite",
          tabBarIcon: () => {
            return <AntDesign name="hearto" size={24} color="black" />;
          },
        }}
        component={Login}
      />

      <Tab.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: () => {
            return <FontAwesome name="user-o" size={24} color="black" />;
          },
        }}
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
