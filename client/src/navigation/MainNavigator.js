import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import { useContext, useEffect, useState } from 'react';

import AuthStackNavigator from './StackNavigators/AuthStackNavigator'

import FullLoadingScreen from '../screens/shared/FullLoadingScreen'
import { userContext } from '../context/UserContext';

const RootStack = createNativeStackNavigator()


const MainNavigator = () => {
    const { user, setUser } = useContext(userContext);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // TODO check async storage for user token
        // if found, get the user from that userToken


        // TODO REMOVE
        // artificially causes the page to load for 1s just to simulate the flow of the app

        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [])

    return (
        <RootStack.Navigator
            options={{ headerShown: false }}
        >
            {isLoading ? (
                <RootStack.Screen name='Loading'
                    component={FullLoadingScreen}
                    options={{ headerShown: false }}
                />
            ) : !user ? (
                <RootStack.Screen name='Auth'
                    component={AuthStackNavigator}
                    options={{ headerShown: false }}

                />
            ) : (
                // main app is here!
                <RootStack.Screen name='TabNavigator'
                    component={TabNavigator}
                    options={{ headerShown: false }} />
            )}
        </RootStack.Navigator>


        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }} />
        //     </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default MainNavigator;