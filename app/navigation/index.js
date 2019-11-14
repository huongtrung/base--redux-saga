import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/home';
import Utilities from '../utils/Utilities';

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    }
},
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            header: null
        },
        navigationOptions: {
            header: null,
            gesturesEnabled: true
        },
        transitionConfig: () => Utilities.fromRight()
    })

let Navigation = createAppContainer(AppNavigator)

export default Navigation;