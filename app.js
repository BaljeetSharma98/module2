const contractAddress = '0x70b00CADD9E6000e28D4E1F5760D7CA02ab2285C'.trim();
const contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "result",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "a",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "add",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "a",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "subtract",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "a",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "multiply",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "a",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "divide",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getResult",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
];

async function load() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error('User denied account access');
        }
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    window.account = accounts[0];
    console.log('Account:', window.account);

    window.myContract = new web3.eth.Contract(contractABI, contractAddress);
    console.log('Contract:', window.myContract);

    updateResult();
}

async function performOperation(operation) {
    const a = document.getElementById('operandA').value;
    const b = document.getElementById('operandB').value;
    console.log(`Performing ${operation} on:`, a, b);

    if (!window.myContract) {
        console.error('Contract not initialized');
        return;
    }

    try {
        await window.myContract.methods[operation](a, b).send({ from: window.account });
        console.log(`${operation} performed successfully`);
        updateResult();
    } catch (error) {
        console.error(`Error performing ${operation}:`, error);
    }
}

async function updateResult() {
    try {
        const result = await window.myContract.methods.getResult().call();
        console.log('Result:', result);
        document.getElementById('result').innerText = result;
    } catch (error) {
        console.error('Error getting result:', error);
    }
}

window.addEventListener('load', load);
