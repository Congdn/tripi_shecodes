import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserScreen from '../components/user/userScreen';
import { HomeTab } from './stackNavigations';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    retunr(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="HomeTab" component={HomeTab} />
                <Tab.Screen name="UserTab" component={UserScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}