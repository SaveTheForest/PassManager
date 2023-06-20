import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";
import Home from "../pages/Home";
import CreatePassword from "../pages/CreatePassword";
import Profile from "../pages/Profile";

export function AuthRoutes() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "CreatePassword") {
              return (
                <View style={styles.createPasswordButtonContainer}>
                  <View style={styles.createPasswordButton}>
                    <Ionicons
                      style={{
                        left: -2,
                        top: -8,
                        position: "absolute",
                      }}
                      name={"add-circle"}
                      size={90}
                      color={"#f77d62"}
                    />
                  </View>
                </View>
              );
            } else if (route.name === "Home") {
              return (
                <Ionicons
                  name={"home"}
                  size={size}
                  color={focused ? "#323232" : "#929292"}
                />
              );
            } else if (route.name === "Profile") {
              return (
                <Ionicons
                  name={"person"}
                  size={size}
                  color={focused ? "#323232" : "#929292"}
                />
              );
            }
          },
          tabBarStyle: {
            backgroundColor: "rgba(50, 50, 50, 0.1)",
            height: 60,
            borderRadius: 30,
            elevation: 0,
            width: "94%",
            marginBottom: "2%",
            alignSelf: "center",
            borderWidth: 0,
          },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="CreatePassword" component={CreatePassword} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  createPasswordButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  createPasswordButton: {
    width: 80,
    height: 80,
    alignItems: "center",
    borderRadius: 40,
    marginBottom: 30,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
});
