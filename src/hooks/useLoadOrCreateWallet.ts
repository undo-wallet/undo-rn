import { Wallet } from 'ethers';
import { randomBytes } from 'crypto';
import { useMemo } from 'react';

export const useLoadOrCreateWallet = () => {
  // TODO: Need to read from local storage to see if mnemonic stored
  // TODO: How can this suspend before returning

  const wallet = useMemo(() => {
    const id = randomBytes(32).toString('hex');
    const privateKey = '0x' + id;

    return new Wallet(privateKey);
  }, []);

  return wallet;
};
