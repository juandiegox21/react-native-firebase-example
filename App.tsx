import React from 'react'

import { 
  NativeBaseProvider,
  Box
} from 'native-base'

import HomeScreen from './app/screens/HomeScreen'

const App = () => {
  return (
    <NativeBaseProvider>
      <HomeScreen></HomeScreen>
    </NativeBaseProvider>
  )
}

export default App