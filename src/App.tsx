import React from 'react';
import './init';

import { NativeBaseProvider, Text, Box, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useLoadOrCreateWallet } from './hooks/useLoadOrCreateWallet';

export default function App() {
  const wallet = useLoadOrCreateWallet();

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Icon as={FontAwesome} name="wallet" />
        <Text>{wallet.address}</Text>
      </Box>
    </NativeBaseProvider>
  );
}
