import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../../screens/Auth/Login";
import EmailConfirmation from "../../screens/Auth/EmailConfirmation";
import EmailOnboarding from "../../screens/Auth/EmailOnboarding";

import Logo from '../../assets/Logo'
import BackArrow from "../../assets/BackArrow";
import InfoOnboarding from "../../screens/Auth/InfoOnboarding";





const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="Login"
            options={{ headerShown: false }}

        >
            <AuthStack.Screen
                name='Login'
                component={Login}
                options={{
                    headerTitle: () => (
                        <Logo />
                    )
                }}
            />
            <AuthStack.Screen
                name='EmailConfirmation'
                component={EmailConfirmation}
                options={{
                    headerTitle: () => (
                        <Logo />
                    ),
                    headerLeft: () => <BackArrow />
                }}
            />
            <AuthStack.Screen
                name='EmailOnboarding'
                component={EmailOnboarding}
                options={{
                    headerTitle: () => (
                        <Logo />
                    ),
                    headerLeft: () => <BackArrow />
                }}
            />
            <AuthStack.Screen
                name='InfoOnboarding'
                component={InfoOnboarding}
                options={{
                    headerTitle: () => (
                        <Logo />
                    ),
                    headerLeft: () => <BackArrow />
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator