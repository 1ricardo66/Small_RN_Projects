/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Routes from "./src/components";

AppRegistry.registerComponent(appName, () => Routes);
