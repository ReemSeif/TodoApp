import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native';
const TodoDetails = () => {
       
        const {params}= useRoute();
        useEffect(()=>{
           
        },[params])
  return (
    <SafeAreaView>
      <Text >{params.id}</Text>
      <Text >{params.title}</Text>
    </SafeAreaView>
  )
}

export default TodoDetails