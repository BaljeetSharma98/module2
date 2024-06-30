const MyContract = artifacts.require("MyContract");

module.exports = function (deployer) {
    deployer.deploy(MyContract, 100, 200); // Initial values for value1 and value2
};
