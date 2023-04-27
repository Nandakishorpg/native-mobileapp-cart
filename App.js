import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Profile from './src/screens/Profile'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile:Profile
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Apps",
      headerStyle: {
        height: 60, // set the height to 50
      },
    },
  }
);

export default createAppContainer(navigator);
