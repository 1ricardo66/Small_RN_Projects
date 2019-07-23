// src/index.js

import Home from './Home';
import Skin from './Skin';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    Skin: Skin,
  })
);

export default Routes;