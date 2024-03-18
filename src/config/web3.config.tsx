import Web3 from "web3";
import abiJson from "./abi.json";

const ownerAddress = "Ff47E61db0dE28A486C56E89e460a081af088959";

const initialize = () => {
	let web3;
	if(process.env.REACT_APP_RPC_URL) {
		web3 = new Web3(
			new Web3.providers.HttpProvider("https://sepolia.infura.io/v3/" + process.env.REACT_APP_INFURA_ID)
		);
	}else {
		web3 = new Web3("http://localhost:8545");
	}
    return {
		web3,
		contract: new web3.eth.Contract(abiJson.abi, process.env.REACT_APP_CONTRACT_ADDRESS)
	}
}

export default { initialize, abi: abiJson.abi, ownerAddress, contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS };