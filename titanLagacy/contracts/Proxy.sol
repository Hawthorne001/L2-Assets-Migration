// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import { L1ChugSplashProxy } from "sub/packages/tokamak/contracts/contracts/chugsplash/L1ChugSplashProxy.sol";

contract Proxy is L1ChugSplashProxy {
    constructor(address _owner) L1ChugSplashProxy(_owner){}
}