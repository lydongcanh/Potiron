import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from "@ui-kitten/components";
import RestRequestTypeSelect from '../atoms/RestRequestTypeSelect';
import { RestRequestTypes } from '../../core/types/restTypes';
import Axios from 'axios';

export default function HomeScreen(props) {
    const [requestType, setRequestType] = useState(RestRequestTypes.GET);
    const [url, setUrl] = useState("");
    const [data, setData] = useState("");
    const [result, setResult] = useState("");

    const styles = StyleSheet.create({
        areaView: { flex: 1, margin: 8 },
        title: { alignSelf: "center" },
        topFormView: {  },
        typeSelect: {  },
        urlInput: { },
        sendButton: { }
    });

    async function handleSendButtonOnPress() {
        try {
            const result = await Axios.get(url);
            setResult(JSON.stringify(result, null, 2));
        } catch (error) {
            setResult(error);
        }
    }

    return (
        <SafeAreaView style={styles.areaView}>
            <Text style={styles.title} category="h1">Hello, POTIRON!!!</Text>
            <View style={styles.topFormView}>
                <RestRequestTypeSelect
                    onSelect={setRequestType}
                    selectedType={requestType}
                    style={styles.typeSelect}
                />
                <Input
                    onChangeText={setUrl}
                    placeholder="Example: https://www.google.com/"
                    style={styles.urlInput}
                    value={url}
                />
                <Button onPress={handleSendButtonOnPress} style={styles.sendButton}>Send</Button>
            </View>
            <Input
                label="data"
                multiline
                numberOfLines={12}
                onChangeText={setData}
                placeholder="Request data"
                value={data}
            />
            <Input
                disabled
                label="Result"
                multiline
                numberOfLines={12}
                value={result}
            />
        </SafeAreaView>
    );
};