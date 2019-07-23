import React from 'react';
import { View, Button, Text } from 'react-native';

const Page3 = ({navigation}) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About</Text>

    <Button
        title="Page1"
        onPress={()=>navigation.navigate('Home')}

    />
  </View>
);

Page3.navigationOptions = {
  title: 'Its me',
}


export default Page3;