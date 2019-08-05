import {createAppContainer,createStackNavigator} from 'react-navigation'
import Home from '../App'
import Message from '../message'
const Routes = createAppContainer(
    createStackNavigator({
        Home:Home,
        Message:Message
        
    })
)

export default Routes