import {createAppContainer, createStackNavigator} from 'react-navigation';
import Home from './home';
import Cliente from './cliente';
const Routes = createAppContainer(
    createStackNavigator({
        Home:Home,
        Cliente:Cliente,

    })
);

export default Routes;