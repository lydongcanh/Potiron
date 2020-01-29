import React from 'react';
import { ApplicationProvider } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import HomeScreen from './src/components/screens/HomeScreen';

export default function App() {
    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}
        >
            <HomeScreen />
        </ApplicationProvider>
    );
}

