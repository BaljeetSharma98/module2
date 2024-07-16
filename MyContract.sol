// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract Calculator {
    uint256 public result;

    function add(uint256 a, uint256 b) public {
        result = a + b;
    }

    function subtract(uint256 a, uint256 b) public {
        result = a - b;
    }

    function multiply(uint256 a, uint256 b) public {
        result = a * b;
    }

    function divide(uint256 a, uint256 b) public {
        require(b != 0, "Cannot divide by zero");
        result = a / b;
    }

    function getResult() public view returns (uint256) {
        return result;
    }
}
