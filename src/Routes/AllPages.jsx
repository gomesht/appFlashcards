import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../Pages/Start";
import PlayCards from "../Pages/PlayCards";
import AddCards from "../Pages/AddCards";
import EditCards from "../Pages/EditCards";
import SeeCards from "../Pages/SeeCards";

const Stack = createNativeStackNavigator();
export default function AllPages() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="SeeCards" component={SeeCards} />
                <Stack.Screen name="AddCards" component={AddCards} />
                <Stack.Screen name="EditCards" component={EditCards} />
                <Stack.Screen name="PlayCards" component={PlayCards} />
            </Stack.Navigator>


        </NavigationContainer>
    );
}