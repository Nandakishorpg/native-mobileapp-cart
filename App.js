import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import Profile from './src/screens/Profile';
import CartItemsContext from './src/contexts/cartItemsContext';



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: Profile,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Product page',
      headerStyle: {
        height: 80,
      },
    },
  }
);

const AppContainer = createAppContainer(navigator);

export default function App() {
  return (
    <CartItemsContext>
      <AppContainer />
    </CartItemsContext>
  );
}

