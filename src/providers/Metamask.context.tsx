import detectEthereumProvider from "@metamask/detect-provider";
import { useSDK } from "@metamask/sdk-react";
import React from "react";
import { createContext, useEffect, useState } from "react";
import web3Config from "../config/web3.config";

export const MetamaskContext = createContext(null);

function Metamask ({children}: any, ref: any){

    const { sdk, connected, connecting, provider, chainId, error } = useSDK();
    const [dataMetamask, setDataMetamask] = useState<any>();

    useEffect(() => {
        //connectWallet()
    }, [])

    
    const connectWallet = async () => {
        try {
            console.log("connecting wallet...")
            const provider = await detectEthereumProvider();
            if (!window.ethereum && sdk && provider) {
                // From now on, this should always be true:
                // provider === window.ethereum
                console.log("connecting sdk...")
                const accounts: any = await sdk.connect();
                setDataMetamask({sdk, connected, connecting, provider, chainId, error, accounts})
            } 
            
            if(window.ethereum) {
                console.log("request accounts...")
                const accounts: any = await window.ethereum?.request({ method: 'eth_requestAccounts' });
                console.log("accounts:", accounts);
                const isOwner = accounts[0].toLowerCase() === "0x" + web3Config.ownerAddress.toLowerCase();
                setDataMetamask({ connected: true, accounts, isOwner })
            } else {
                console.log('Please install MetaMask!');
                setDataMetamask({connectWallet})
            }
  
        } catch(err) {
          console.warn(`failed to connect..`, err);
        }
    };

    return (
        <MetamaskContext.Provider value={dataMetamask}>
            {children}
        </MetamaskContext.Provider>
    )

} 

export default React.forwardRef(Metamask)