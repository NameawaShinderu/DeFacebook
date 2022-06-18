const defacebook = artifacts.require("dfab");

module.exports = function(deployer) {
  deployer.deploy(defacebook);
};

const backend = artifacts.require("simplestorage");

module.exports = function(deployer) {
  deployer.deploy(backend);
};
