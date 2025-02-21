
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNav from './StackNav';
import CompletedTodos from './Pages/CompletedTodos';

 const Tab =createBottomTabNavigator();
const Router = () => {
  return (
   <NavigationContainer>

    <Tab.Navigator>
      <Tab.Screen name="Main" component={StackNav} options={{
        headerShown: false,
      }}/>
      <Tab.Screen name="CompletedTodos" component={CompletedTodos}/>
    </Tab.Navigator>
   </NavigationContainer>
  )
}

export default Router