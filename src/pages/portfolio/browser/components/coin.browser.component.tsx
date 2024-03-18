import { Alert, Col, Container, Row } from "react-bootstrap"
import { useSDK } from '@metamask/sdk-react';
import Button from "../../../chatbots/components/button.component";
import web3Config from "../../../../config/web3.config";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Bytes } from "web3";
import { MetamaskContext } from "../../../../providers/Metamask.context";
const dataChart = [
    { start: 0.2, end: 0.4 },
    { start: 0.4, end: 0.6 },
    { start: 0.6, end: 0.6 },
    { start: 0.6, end: 0.3 },
    { start: 0.3, end: 1.0 },
    { start: 1, end: 0.8 }
]
const TD = styled.td`
    --start: ${({ start }: any) => start}; 
    --end: ${({ end }: any) => end};
`;

function Coin () {

    const { contract, web3 } = web3Config.initialize();
    const metamaskData: any = useContext(MetamaskContext);
    const [isOwner, setIsOwner] = useState<boolean>(false);
    const [account, setAccount] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    let [tokenAvailable, setTokenAvailable] = useState<null | string>(null);
    let [balance, setBalance] = useState<null | number>(null);
    let [hashBlockMint, setHashBlockMint] = useState<null | string>(null);
    let [hashBlockBuyToken, setHashBlockBuyToken] = useState<null | string>(null);
    let [hashBlockBurn, setHashBlockBurn] = useState<null | string>(null);
    

    useEffect(() => {
        if(metamaskData && metamaskData.connected) {
            setAccount(metamaskData.accounts[0]);
            setIsOwner(metamaskData.isOwner)
            getAvailability();
            getBalance();
        }
    })
    
    const getAvailability = async () => {
        const balance: any = await contract.methods.balanceOf(web3Config.ownerAddress).call();
        const tokens = web3.utils.fromWei(BigInt(balance), "ether").toString();
        setTokenAvailable(tokens);
    }

    const getBalance = async () => {
        const balance: any = await contract.methods.balances(account).call();
        const tokens = BigInt(balance);

        setBalance(Number(tokens));
    }

    const mint = async () => {
        console.log("Minting...");
        let amount = 100;
        
        console.log("account:", account);
        if(account) {
            const nonce = await web3.eth.getTransactionCount("0x" + web3Config.ownerAddress);
            const gasPrice = await web3.eth.getGasPrice();
            const gasLimit = web3.utils.toHex(BigInt(300000));
            
            // Constructing the raw transaction
            const tx = {
                nonce       :   nonce,
                from        :   account,
                to          :   web3Config.contractAddress,
                gasPrice    :   gasPrice,
                gasLimit    :   gasLimit,
                data        :   contract.methods.mint(account, amount).encodeABI(),
            };
    
            console.log("Tx:", tx);
            // Signing the transaction
            const signature = await web3.eth.accounts.signTransaction(tx, process.env.REACT_APP_PRIVATE_KEY as Bytes)
    
            console.log("signature:", signature);
            console.log("sending...");
            setIsLoading(true);
            // Sending transaction
            await web3.eth.sendSignedTransaction(signature.rawTransaction)
            .on( 'receipt', function( receipt: any ) {
                console.log( receipt );
                setIsLoading(false);
                setHashBlockMint(receipt.blockHash);
            })
            .on( 'error' , function( error: any ) {
                console.error( error );
                setIsLoading(false);
            });   
        }

    }

    const burn = async () => {
        console.log("Burning...");
        let amount = 1;
        
        console.log("account:", account);
        if(account) {
            const nonce = await web3.eth.getTransactionCount("0x" + web3Config.ownerAddress);
            const gasPrice = await web3.eth.getGasPrice();
            const gasLimit = web3.utils.toHex(BigInt(300000));
            
            // Constructing the raw transaction
            const tx = {
                nonce       :   nonce,
                from        :   account,
                to          :   web3Config.contractAddress,
                gasPrice    :   gasPrice,
                gasLimit    :   gasLimit,
                data        :   contract.methods.burn(account, amount).encodeABI(),
            };
    
            console.log("Tx:", tx);
            // Signing the transaction
            const signature = await web3.eth.accounts.signTransaction(tx, process.env.REACT_APP_PRIVATE_KEY as Bytes)
    
            console.log("signature:", signature);
            console.log("sending...");
            // Sending transaction
            setIsLoading(true);
             web3.eth.sendSignedTransaction(signature.rawTransaction)
            .on( 'receipt', function( receipt: any ) {
                console.log( receipt );
                setIsLoading(false);
                setHashBlockBurn(receipt.blockHash);
            })
            .on( 'error' , function( error: any ) {
                console.error( error );
                setIsLoading(false);
            });   
        }
    }

    const buyToken = async () => {
        console.log("Buy token...");
        let amount = 1;
        
        console.log("account:", account);
        if(account) {
            const nonce = await web3.eth.getTransactionCount("0x" + web3Config.ownerAddress);
            const gasPrice = await web3.eth.getGasPrice();
            const gasLimit = web3.utils.toHex(BigInt(300000));
            
            // Constructing the raw transaction
            const tx = {
                nonce       :   nonce,
                from        :   account,
                to          :   web3Config.contractAddress,
                gasPrice    :   gasPrice,
                gasLimit    :   gasLimit,
                data        :   contract.methods.buyToken(account, amount).encodeABI(),
            };
    
            console.log("Tx:", tx);
            // Signing the transaction
            const signature = await web3.eth.accounts.signTransaction(tx, process.env.REACT_APP_PRIVATE_KEY as Bytes)
    
            console.log("signature:", signature);
            console.log("sending...");
            setIsLoading(true);
            // Sending transaction
            await web3.eth.sendSignedTransaction(signature.rawTransaction)
            .on( 'receipt', function( receipt: any ) {
                console.log( receipt );
                setIsLoading(false);
                setHashBlockBuyToken(receipt.blockHash);
            })
            .on( 'error' , function( error: any ) {
                console.error( error );
                setIsLoading(false);
            });   
        }
    }

 
    return (
    <>
        <Row style={{ marginTop: 50 }}>
            <Col xs={4}>
                <Container>
                    <svg className="flip-animation Coin">
                        <image href="../assets/images/gex_logo_plain.svg" style={{ width: 80, height: 80 }}/>
                    </svg>
                </Container>
            </Col>
            <Col>
            <table className="charts-css line">
                <tbody>
                {
                    dataChart.map((row) => {
                        return(
                            <tr>
                                <TD {...row}> <span className="data highlighted"></span> </TD>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </Col>
        </Row>
        <Row>
                <p style={{ fontSize: 19, textAlign: "center" }}>Token Minted: {tokenAvailable}</p>
                <p style={{ fontSize: 19, textAlign: "center" }}>Token : {balance}</p>


                {(!account && metamaskData) ?
                    <Button style={{ marginTop: 30, width: "100%" }} onClick={metamaskData.connectWallet} color="primary" text="Connect wallet" />
                    :
                    <>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            {isOwner && <Button style={{ marginTop: 30}} onClick={mint} isLoading={isLoading} color="primary" text="Mint a Token" /> }
                            <Button style={{ marginTop: 30}} onClick={buyToken} isLoading={isLoading} color="primary" text="Buy a Token" />
                            <Button style={{ marginTop: 30}} onClick={burn} isLoading={isLoading} color="danger" text="Spend a Token" />
                        </div>
                    </>

                }

                <Alert color="info" style={{ marginTop: 30 }}>
                    Only available in the sepolia testnet
                </Alert>
                <div style={{ marginTop: 30 }}>
                    
                    <span>Account connected:</span>
                    <p>{account}</p>
                    <p>{(metamaskData && metamaskData.chainId) && ` Connected chain: ${metamaskData.chainId}`}</p>
                    {isOwner && <span>Hash Block Generated (Mint):</span>}
                    {isOwner && <p>{hashBlockMint}</p>}
                    <span>Hash Block Generated (Buy Token):</span>
                    <p>{hashBlockBuyToken}</p>
                    <span>Hash Block Generated (Burn):</span>
                    <p>{hashBlockBurn}</p>
                </div>

        </Row>
    </>
    )
}

export default Coin