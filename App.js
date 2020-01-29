import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import HomeScreen from './src/components/screens/HomeScreen';

export default function App() {
    const StackNavigator = createMaterialTopTabNavigator({
        Home: {
            screen: HomeScreen, 
            navigationOptions: { title: "Home" }
        }
    });
    
    const AppContainer = createAppContainer(StackNavigator);

    return <AppContainer />;
}

