import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text } from "@ui-kitten/components";

export default function HomeScreen(props) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text category="h1">Hello, POTIRON!!!</Text>
        </SafeAreaView>
    );
};