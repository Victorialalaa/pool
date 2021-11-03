import * as React from "react";
import { View, Text, DatePickerIOSBase } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import ChemicalLevel from "./../mainScreens/ChemicalLevel";
import HomeScreen from "./../mainScreens/HomeScreen";

//Screen names
const chemName = "Chemical";
const homeName = "Home";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn == chemName) {
              iconName = focused ? "beaker" : "beaker-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={chemName} component={ChemicalLevel} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
