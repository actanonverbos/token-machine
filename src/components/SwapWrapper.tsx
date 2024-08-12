'use client';
import { useCallback } from 'react';
import { Name } from '@coinbase/onchainkit/identity';
import { 
  Swap, 
  SwapAmountInput, 
  SwapToggleButton, 
  SwapButton, 
  SwapMessage
} from '@coinbase/onchainkit/swap'; 
import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { useAccount, useSendTransaction } from 'wagmi';
import type { Token } from '@coinbase/onchainkit/token';
 
export default function SwapComponents() {
  const { address } = useAccount();
  const { sendTransaction } = useSendTransaction();
 
  const ETHToken: Token = {
      address: "",
      chainId: 8453,
      decimals: 10,
      name: "Ethereum",
      symbol: "ETH",
      image: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png"
  };
 
  const MigglesToken: Token = {
      address: "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
      chainId: 8453,
      decimals: 6,
      name: "Mister Miggles",
      symbol: "MIGGLES",
      image: "https://i.ibb.co.com/CmxSVFc/IMG-0263.png"
  };
 
  const swappableTokens: Token[] = [ETHToken, MigglesToken];
 
  return (
    address ? (
      <Swap address={address}>
        <SwapAmountInput className='bg-[#F0F0F0] text-white'
          label="Sell"
          swappableTokens={swappableTokens} 
          token={ETHToken} 
          type="from"
        /> 
        <SwapToggleButton /> 
        <SwapAmountInput className='bg-[#F0F0F0] text-white'
          label="Buy"
          swappableTokens={swappableTokens} 
          token={MigglesToken} 
          type="to"
        /> 
        <SwapButton className='bg-[#0052FF] text-white'/> 
        <SwapMessage /> 
      </Swap> 
    ) : (
      <Wallet>
        <ConnectWallet />
      </Wallet>
    )
  );
}
