/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../../../common";

export interface L1StandardBridgeInterface extends utils.Interface {
  functions: {
    "depositERC20(address,address,uint256,uint32,bytes)": FunctionFragment;
    "depositERC20To(address,address,address,uint256,uint32,bytes)": FunctionFragment;
    "depositETH(uint32,bytes)": FunctionFragment;
    "depositETHTo(address,uint32,bytes)": FunctionFragment;
    "deposits(address,address)": FunctionFragment;
    "donateETH()": FunctionFragment;
    "finalizeERC20Withdrawal(address,address,address,address,uint256,bytes)": FunctionFragment;
    "finalizeETHWithdrawal(address,address,uint256,bytes)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "l2TokenBridge()": FunctionFragment;
    "messenger()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "depositERC20"
      | "depositERC20To"
      | "depositETH"
      | "depositETHTo"
      | "deposits"
      | "donateETH"
      | "finalizeERC20Withdrawal"
      | "finalizeETHWithdrawal"
      | "initialize"
      | "l2TokenBridge"
      | "messenger"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "depositERC20",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC20To",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositETH",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositETHTo",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposits",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "donateETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "finalizeERC20Withdrawal",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeETHWithdrawal",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "l2TokenBridge",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "messenger", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "depositERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositERC20To",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositETHTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "donateETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finalizeERC20Withdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeETHWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "l2TokenBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messenger", data: BytesLike): Result;

  events: {
    "ERC20DepositInitiated(address,address,address,address,uint256,bytes)": EventFragment;
    "ERC20WithdrawalFinalized(address,address,address,address,uint256,bytes)": EventFragment;
    "ETHDepositInitiated(address,address,uint256,bytes)": EventFragment;
    "ETHWithdrawalFinalized(address,address,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC20DepositInitiated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20WithdrawalFinalized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ETHDepositInitiated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ETHWithdrawalFinalized"): EventFragment;
}

export interface ERC20DepositInitiatedEventObject {
  _l1Token: string;
  _l2Token: string;
  _from: string;
  _to: string;
  _amount: BigNumber;
  _data: string;
}
export type ERC20DepositInitiatedEvent = TypedEvent<
  [string, string, string, string, BigNumber, string],
  ERC20DepositInitiatedEventObject
>;

export type ERC20DepositInitiatedEventFilter =
  TypedEventFilter<ERC20DepositInitiatedEvent>;

export interface ERC20WithdrawalFinalizedEventObject {
  _l1Token: string;
  _l2Token: string;
  _from: string;
  _to: string;
  _amount: BigNumber;
  _data: string;
}
export type ERC20WithdrawalFinalizedEvent = TypedEvent<
  [string, string, string, string, BigNumber, string],
  ERC20WithdrawalFinalizedEventObject
>;

export type ERC20WithdrawalFinalizedEventFilter =
  TypedEventFilter<ERC20WithdrawalFinalizedEvent>;

export interface ETHDepositInitiatedEventObject {
  _from: string;
  _to: string;
  _amount: BigNumber;
  _data: string;
}
export type ETHDepositInitiatedEvent = TypedEvent<
  [string, string, BigNumber, string],
  ETHDepositInitiatedEventObject
>;

export type ETHDepositInitiatedEventFilter =
  TypedEventFilter<ETHDepositInitiatedEvent>;

export interface ETHWithdrawalFinalizedEventObject {
  _from: string;
  _to: string;
  _amount: BigNumber;
  _data: string;
}
export type ETHWithdrawalFinalizedEvent = TypedEvent<
  [string, string, BigNumber, string],
  ETHWithdrawalFinalizedEventObject
>;

export type ETHWithdrawalFinalizedEventFilter =
  TypedEventFilter<ETHWithdrawalFinalizedEvent>;

export interface L1StandardBridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: L1StandardBridgeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    depositERC20(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositERC20To(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositETH(
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositETHTo(
      _to: PromiseOrValue<string>,
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposits(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    donateETH(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalizeERC20Withdrawal(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalizeETHWithdrawal(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _l1messenger: PromiseOrValue<string>,
      _l2TokenBridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    l2TokenBridge(overrides?: CallOverrides): Promise<[string]>;

    messenger(overrides?: CallOverrides): Promise<[string]>;
  };

  depositERC20(
    _l1Token: PromiseOrValue<string>,
    _l2Token: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _l2Gas: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositERC20To(
    _l1Token: PromiseOrValue<string>,
    _l2Token: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _l2Gas: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositETH(
    _l2Gas: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositETHTo(
    _to: PromiseOrValue<string>,
    _l2Gas: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposits(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  donateETH(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalizeERC20Withdrawal(
    _l1Token: PromiseOrValue<string>,
    _l2Token: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalizeETHWithdrawal(
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _l1messenger: PromiseOrValue<string>,
    _l2TokenBridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  l2TokenBridge(overrides?: CallOverrides): Promise<string>;

  messenger(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    depositERC20(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositERC20To(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositETH(
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositETHTo(
      _to: PromiseOrValue<string>,
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    deposits(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    donateETH(overrides?: CallOverrides): Promise<void>;

    finalizeERC20Withdrawal(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    finalizeETHWithdrawal(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _l1messenger: PromiseOrValue<string>,
      _l2TokenBridge: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    l2TokenBridge(overrides?: CallOverrides): Promise<string>;

    messenger(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ERC20DepositInitiated(address,address,address,address,uint256,bytes)"(
      _l1Token?: PromiseOrValue<string> | null,
      _l2Token?: PromiseOrValue<string> | null,
      _from?: PromiseOrValue<string> | null,
      _to?: null,
      _amount?: null,
      _data?: null
    ): ERC20DepositInitiatedEventFilter;
    ERC20DepositInitiated(
      _l1Token?: PromiseOrValue<string> | null,
      _l2Token?: PromiseOrValue<string> | null,
      _from?: PromiseOrValue<string> | null,
      _to?: null,
      _amount?: null,
      _data?: null
    ): ERC20DepositInitiatedEventFilter;

    "ERC20WithdrawalFinalized(address,address,address,address,uint256,bytes)"(
      _l1Token?: PromiseOrValue<string> | null,
      _l2Token?: PromiseOrValue<string> | null,
      _from?: PromiseOrValue<string> | null,
      _to?: null,
      _amount?: null,
      _data?: null
    ): ERC20WithdrawalFinalizedEventFilter;
    ERC20WithdrawalFinalized(
      _l1Token?: PromiseOrValue<string> | null,
      _l2Token?: PromiseOrValue<string> | null,
      _from?: PromiseOrValue<string> | null,
      _to?: null,
      _amount?: null,
      _data?: null
    ): ERC20WithdrawalFinalizedEventFilter;

    "ETHDepositInitiated(address,address,uint256,bytes)"(
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _amount?: null,
      _data?: null
    ): ETHDepositInitiatedEventFilter;
    ETHDepositInitiated(
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _amount?: null,
      _data?: null
    ): ETHDepositInitiatedEventFilter;

    "ETHWithdrawalFinalized(address,address,uint256,bytes)"(
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _amount?: null,
      _data?: null
    ): ETHWithdrawalFinalizedEventFilter;
    ETHWithdrawalFinalized(
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _amount?: null,
      _data?: null
    ): ETHWithdrawalFinalizedEventFilter;
  };

  estimateGas: {
    depositERC20(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositERC20To(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositETH(
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositETHTo(
      _to: PromiseOrValue<string>,
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposits(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    donateETH(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalizeERC20Withdrawal(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalizeETHWithdrawal(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      _l1messenger: PromiseOrValue<string>,
      _l2TokenBridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    l2TokenBridge(overrides?: CallOverrides): Promise<BigNumber>;

    messenger(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    depositERC20(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositERC20To(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositETH(
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositETHTo(
      _to: PromiseOrValue<string>,
      _l2Gas: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposits(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    donateETH(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalizeERC20Withdrawal(
      _l1Token: PromiseOrValue<string>,
      _l2Token: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalizeETHWithdrawal(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _l1messenger: PromiseOrValue<string>,
      _l2TokenBridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    l2TokenBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messenger(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
