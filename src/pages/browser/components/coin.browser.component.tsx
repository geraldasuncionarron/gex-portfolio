import { Col, Container, Row } from "react-bootstrap"
import Button from "../../components/button.component";
import web3Config from "../../../config/web3.config";
import { useEffect, useState } from "react";
import { BLACK } from "../../../config/colors.config";
import styled from "styled-components";

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

function Coin ({style}: any) {

    const contract = web3Config.initialize();
    let [balance, setBalance] = useState<null | string>(null);
    let [hashBlockMint, setHashBlockMint] = useState<null | string>(null);
    let [hashBlockBurn, setHashBlockBurn] = useState<null | string>(null);

    useEffect(() => {
        console.log("useEffect")
        getBalance();
    }, [hashBlockMint, hashBlockBurn])
    
    const getBalance = async () => {
        console.log("Glos", contract.methods)
        console.log("Get Balance...");
        const balance: any = await contract.methods.balanceOf(web3Config.ownerAddress).call();
        console.log("Balance: ", BigInt(balance));
        setBalance(BigInt(balance).toString());
    }
    
    const mint = async () => {
        console.log("Minting...");
        const tx = await contract.methods.mint(web3Config.ownerAddress, 1).send({ from: web3Config.ownerAddress });
        console.log("Hash Block generated", tx)
        setHashBlockMint(tx.blockHash);
    }

    const burn = async () => {
        console.log("Burning...");
        const tx = await contract.methods.burn(web3Config.ownerAddress, 1).send({ from: web3Config.ownerAddress });
        console.log("Hash Block generated", tx)
        setHashBlockBurn(tx.blockHash);
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
                <p style={{ fontSize: 19, textAlign: "center" }}>Balance: {balance}</p>

                <div style={{ display: "flex" }}>
                    <Button style={{ marginTop: 30}} onClick={mint} color="primary" text="Mint a Token" />
                    <Button style={{ marginTop: 30}} onClick={burn} color="primary" text="Burn a Token" />
                </div>
                
                <div style={{ marginTop: 30 }}>
                    <span>Hash Block Generated (Mint):</span>
                    <p>{hashBlockMint}</p>
                    <span>Hash Block Generated (Burn):</span>
                    <p>{hashBlockBurn}</p>
                </div>

        </Row>
    </>
    )
}

export default Coin