import { OnchainKitProvider } from '@coinbase/onchainkit'; 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { base } from 'wagmi/chains'; 
import { useState } from 'react';
import {  WagmiProvider } from 'wagmi';
 
import { getConfig } from '../../wagmi.js';
 
export function WagmiProviders({
  children,
}) {

  const [queryClient] = useState(() => new QueryClient());
 
  return (
    <WagmiProvider config={getConfig()}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={import.meta.env.VITE_ONCHAINKIT_API_KEY}
          chain={base}
        >
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}