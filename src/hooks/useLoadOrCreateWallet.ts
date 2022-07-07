import { Wallet } from 'ethers';
import { useMemo } from 'react';

export const useLoadOrCreateWallet = () => {
  // TODO: Need to read from local storage to see if mnemonic stored
  // TODO: How can this suspend before returning

  const wallet = useMemo(() => {
    return Wallet.createRandom();
  }, []);

  return wallet;
};
