import React from 'react'

import { 
  NativeBaseProvider,
  Box
} from 'native-base'

import HomeScreen from './app/screens/HomeScreen'

const App = () => {
  return (
    <NativeBaseProvider>
      <Box safeArea>
        <HomeScreen></HomeScreen>
      </Box>
    </NativeBaseProvider>
  )
}

export default App