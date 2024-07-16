const Calculator = artifacts.require("./Calculator");

module.exports = async function (deployer) {
  try {
    console.log("Starting deployment...");
    await deployer.deploy(Calculator);
    console.log("Contract deployed successfully!");
  } catch (error) {
    console.error("Deployment failed:", error);
  }
};
