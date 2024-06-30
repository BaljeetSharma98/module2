const contractAddress = '0xb73A4e4a2FB06A8aAED22c7733ec0B3801BCb997';
const contractABI = [{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_value1",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "_value2",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "inputs": [],
    "name": "value1",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "value2",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_value1",
            "type": "uint256"
        }
    ],
    "name": "setValue1",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_value2",
            "type": "uint256"
        }
    ],
    "name": "setValue2",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "getValue1",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "getValue2",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
}];

async function load() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    const myContract = new web3.eth.Contract(contractABI, contractAddress);

    const value1 = await myContract.methods.getValue1().call();
    const value2 = await myContract.methods.getValue2().call();

    document.getElementById('value1').innerText = value1;
    document.getElementById('value2').innerText = value2;
}

window.addEventListener('load', load);
