import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Pages/HomeScreen';
import TodoDetails from './Pages/TodoDetails';
 const Stack= createNativeStackNavigator();
const StackNav = () => {
  return (

<Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="TodoDetails" component={TodoDetails} options={{
        title: 'Todo Details',
       
      }} />
    </Stack.Navigator> 

  )
}

export default StackNav