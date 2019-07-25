import {createAppContainer, createStackNavigator} from 'react-navigation';
import Home from './home';
import Cliente from './cliente';
import Contato from './contato'
const Routes = createAppContainer(
    createStackNavigator({
        Home:Home,
        Cliente:Cliente,
        Contato:Contato,

    })
);

export default Routes;