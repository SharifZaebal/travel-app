import React, {useLayoutEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import { View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [])

    return (
        <SafeAreaView className="bg-white flex-1 relative">
            {/*Первая часть*/}
            <View className="flex-row px-6 mt-6 items-center space-x-2">
                <View className="w-16 h-16 bg-[#f5d9bf] rounded-full items-center justify-center">
                    <Text className="text-[#fff] text-3xl font-semibold">Go</Text>
                </View>
                <Text className="text-3xl font-semibold">Путешествовать</Text>
            </View>
            {/*Вторая часть*/}
            <View className="px-6 mt-12 space-y-3">
                <Text className="text-black text-[24px]">Наслаждайтесь поездкой вместе с</Text>
                <Text className="text-[30px] font-bold text-[#f5d9bf]">Хорошими моментами</Text>

                <Text className="text-base">Наше travel-приложение — это удобный и функциональный инструмент
                    для планирования и организации поездок.</Text>
            </View>
            {/*Раздел с кругами*/}
            <View className="w-[300px] h-[300px] bg-[#9ed496] rounded-full absolute bottom-20 -right-44"></View>
            <View className="w-[300px] h-[300px] bg-amber-500 rounded-full absolute -bottom-28 -left-40"></View>
            {/*Раздел со мной*/}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="fadeIn"
                    easing="ease-in-out"
                    source={require('../assets/me.png')}
                    className="w-full h-full object-cover mt-32"
                />
                {/*Последний раздел*/}
                <TouchableOpacity
                    onPress={() => navigation.navigate("Discover")}
                    className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[white] rounded-full justify-center items-center">
                    <Animatable.View
                        animation="pulse"
                        easing="ease-in-out"
                        iterationCount="infinite"
                        className="w-20 h-20 items-center justify-center rounded-full bg-white">
                        <Text className="font-semibold text-[30px]">GO</Text>
                    </Animatable.View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen;