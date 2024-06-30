// SPDX-License-Identifier: MIT
pragma solidity 0.5.16;

contract MyContract {
    uint256 public value1;
    uint256 public value2;

    constructor(uint256 _value1, uint256 _value2) public {
        value1 = _value1;
        value2 = _value2;
    }

    function setValue1(uint256 _value1) public {
        value1 = _value1;
    }

    function setValue2(uint256 _value2) public {
        value2 = _value2;
    }

    function getValue1() public view returns (uint256) {
        return value1;
    }

    function getValue2() public view returns (uint256) {
        return value2;
    }
}
