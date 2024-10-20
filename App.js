import { StatusBar } from 'expo-status-bar';
import { Text} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import Discover from "./screens/Discover";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Discover" component={Discover}/>
            </Stack.Navigator>
        </NavigationContainer>
    </TailwindProvider>
  );
}
