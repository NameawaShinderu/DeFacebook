pragma solidity >=0.4.21 <0.6.0;

contract simplestorage{

    uint storeData;

    function set(uint x) public {

        storeData = x;
    }

    function get() public view returns(uint) {

        return storeData;


    }
}