import React, {useLayoutEffect} from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, {

    })

    return (
        <SafeAreaView>
            <Text>Hello world</Text>
        </SafeAreaView>
    )
}

export default HomeScreen;