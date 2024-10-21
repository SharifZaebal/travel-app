import {Text, View, Image} from "react-native";
import React, {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";

const Discover = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [])

    return(
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-row items-center justify-between px-8">
                <View>
                    <Text className="text-[36px] text-[#eebf93] font-bold">Открывай</Text>
                    <Text className="text-[29px]">красивые места</Text>
                </View>
                <View className="w-14 h-14 rounded-md items-center justify-center">
                    <Image
                        source={require('../assets/icons-avatar.png')}
                        className="w-full h-full object-cover rounded-md shadow-lg"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Discover