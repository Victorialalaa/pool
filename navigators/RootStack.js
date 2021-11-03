import React from "react";

import { Colors } from "./../components/styles";
const { primary, tertiary } = Colors;

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import Login from "./../screens/Login";
import Signup from "./../screens/Signup";
import MainContainer from "./../mainNavigation/mainScreens/MainContainer";
import HomeScreen from "./../mainNavigation/mainScreens/HomeScreen";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: "",
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
