// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp);
  
    struct Transaction {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
    }

    Transaction[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message) public {
        transactionCount += 1;
        transactions.push(Transaction(msg.sender, receiver, amount, message, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    function getAllTransactions() public view returns (Transaction[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}