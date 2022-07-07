import React from 'react';
import { NativeBaseProvider, Text, Box, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
        <Icon as={FontAwesome} name="user" />
      </Box>
    </NativeBaseProvider>
  );
}
