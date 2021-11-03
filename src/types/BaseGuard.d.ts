/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BaseGuardInterface extends ethers.utils.Interface {
  functions: {
    "checkAfterExecution(bytes32,bool)": FunctionFragment;
    "checkTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkAfterExecution",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTransaction",
    values: [
      string,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BytesLike,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkAfterExecution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export class BaseGuard extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BaseGuardInterface;

  functions: {
    checkAfterExecution(
      txHash: BytesLike,
      success: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "checkAfterExecution(bytes32,bool)"(
      txHash: BytesLike,
      success: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    checkTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: string,
      refundReceiver: string,
      signatures: BytesLike,
      msgSender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "checkTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,address)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: string,
      refundReceiver: string,
      signatures: BytesLike,
      msgSender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;
  };

  checkAfterExecution(
    txHash: BytesLike,
    success: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "checkAfterExecution(bytes32,bool)"(
    txHash: BytesLike,
    success: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  checkTransaction(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operation: BigNumberish,
    safeTxGas: BigNumberish,
    baseGas: BigNumberish,
    gasPrice: BigNumberish,
    gasToken: string,
    refundReceiver: string,
    signatures: BytesLike,
    msgSender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "checkTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,address)"(
    to: string,
    value: BigNumberish,
    data: BytesLike,
    operation: BigNumberish,
    safeTxGas: BigNumberish,
    baseGas: BigNumberish,
    gasPrice: BigNumberish,
    gasToken: string,
    refundReceiver: string,
    signatures: BytesLike,
    msgSender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    checkAfterExecution(
      txHash: BytesLike,
      success: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkAfterExecution(bytes32,bool)"(
      txHash: BytesLike,
      success: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    checkTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: string,
      refundReceiver: string,
      signatures: BytesLike,
      msgSender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,address)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: string,
      refundReceiver: string,
      signatures: BytesLike,
      msgSender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    checkAfterExecution(
      txHash: BytesLike,
      success: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "checkAfterExecution(bytes32,bool)"(
      txHash: BytesLike,
      success: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    checkTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: string,
      refundReceiver: string,
      signatures: BytesLike,
      msgSender: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "checkTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,address)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: string,
      refundReceiver: string,
      signatures: BytesLike,
      msgSender: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkAfterExecution(
      txHash: BytesLike,
      success: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "checkAfterExecution(bytes32,bool)"(
      txHash: BytesLike,
      success: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    checkTransaction(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: string,
      refundReceiver: string,
      signatures: BytesLike,
      msgSender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "checkTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes,address)"(
      to: string,
      value: BigNumberish,
      data: BytesLike,
      operation: BigNumberish,
      safeTxGas: BigNumberish,
      baseGas: BigNumberish,
      gasPrice: BigNumberish,
      gasToken: string,
      refundReceiver: string,
      signatures: BytesLike,
      msgSender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
