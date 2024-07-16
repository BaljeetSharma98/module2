# Calculator DApp
In This Project I created a simple Calculator DApp
## Prerequisites
- Node.js and npm installed
- MetaMask extension installed in your browser ( import test ethers through ganache )

## Deployment steps

1. First install Truffle (for compiling Smart Contract) and Ganache (for importing test ether into your metamask wallet & develop a local blockchain) -: 
  *npm install -g truffle ganache-cli*
   
2. Initialize truffle project -: 
   mkdir calculator-dapp
   cd calculator-dapp
   truffle init

3. Create a file named *Calculator.sol* under contracts diretory.

4. Then compile the contract using -:
   *truffle compile*
   then you got .json file which contains your *ABI*.

5. Then open Ganache and select quickstart.

6. Then write command in you project directory -:
   *truffle migrate --network development*
   then you got your *contract address* then paste it in app.js file.

7. Making of Frontend -:
   npm init -y
   npm install lite-server --save-dev

8. Then start the development server -:
   npm start

9. Now you are able to interact with your contract.


## Authors

Baljeet

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
