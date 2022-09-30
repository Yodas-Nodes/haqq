(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{705:function(e,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),a("h2",{attrs:{id:"evm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#evm"}},[e._v("#")]),e._v(" EVM")]),e._v(" "),a("p",[e._v("The Ethereum Virtual Machine (EVM) is a computation engine which can be thought of as one single entity maintained by thousands of connected computers (nodes) running an Ethereum client. As a virtual machine ("),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Virtual_machine",target:"_blank",rel:"noopener noreferrer"}},[e._v("VM"),a("OutboundLink")],1),e._v("), the EVM is responisble for computing changes to the state deterministically regardless of its environment (hardware and OS). This means that every node has to get the exact same result given an identical starting state and transaction (tx).")]),e._v(" "),a("p",[e._v("The EVM is considered to be the part of the Ethereum protocol that handles the deployment and execution of "),a("a",{attrs:{href:"https://ethereum.org/en/developers/docs/smart-contracts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("smart contracts"),a("OutboundLink")],1),e._v(". To make a clear distinction:")]),e._v(" "),a("ul",[a("li",[e._v("The Ethereum protocol describes a blockchain, in which all Ethereum accounts and smart contracts live. It has only one canonical state (a data structure, which keeps all accounts) at any given block in the chain.")]),e._v(" "),a("li",[e._v("The EVM, however, is the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Finite-state_machine",target:"_blank",rel:"noopener noreferrer"}},[e._v("state machine"),a("OutboundLink")],1),e._v(" that defines the rules for computing a new valid state from block to block. It is an isolated runtime, which means that code running inside the EVM has no access to network, filesystem, or other processes (not external APIs).")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("x/evm")]),e._v(" module implements the EVM as a Cosmos SDK module. It allows users to interact with the EVM by submitting Ethereum txs and executing their containing messages on the given state to evoke a state transition.")]),e._v(" "),a("h3",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),a("p",[e._v("The Ethereum state is a data structure, implemented as a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Merkle_tree",target:"_blank",rel:"noopener noreferrer"}},[e._v("Merkle Patricia Trie"),a("OutboundLink")],1),e._v(", that keeps all accounts on the chain. The EVM makes changes to this data structure resulting in a new state with a different State Root. Ethereum can therefore be seen as a state chain that transitions from one state to another by executing transations in a block using the EVM. A new block of txs can be described through its Block header (parent hash, block number, time stamp, nonce, receipts,...).")]),e._v(" "),a("h3",{attrs:{id:"accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accounts"}},[e._v("#")]),e._v(" Accounts")]),e._v(" "),a("p",[e._v("There are two types of accounts that can be stored in state at a given address:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Externally Owned Account (EOA)")]),e._v(": Has nonce (tx counter) and balance")]),e._v(" "),a("li",[a("strong",[e._v("Smart Contract")]),e._v(": Has nonce, balance, (immutable) code hash, storage root (another Merkle Patricia Trie)")])]),e._v(" "),a("p",[e._v("Smart contracts are just like regular accounts on the blockchain, which additionally store executable code in an Ethereum-specific binary format, known as "),a("strong",[e._v("EVM bytecode")]),e._v(". They are typically written in an Ethereum high level language such as Solidity which is compiled down to EVM bytecode and deployed on the blockchain, by submitting a tx using an Ethereum client.")]),e._v(" "),a("h3",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),a("p",[e._v("The EVM operates as a stack-based machine. It's main architecture components consist of:")]),e._v(" "),a("ul",[a("li",[e._v("Virtual ROM: contract code is pulled into this read only memory when processing txs")]),e._v(" "),a("li",[e._v("Machine state (volatile): changes as the EVM runs and is wiped clean after processing each tx\n"),a("ul",[a("li",[e._v("Program counter (PC)")]),e._v(" "),a("li",[e._v("Gas: keeps track of how much gas is used")]),e._v(" "),a("li",[e._v("Stack and Memory: compute state changes")])])]),e._v(" "),a("li",[e._v("Access to account storage (persistent)")])]),e._v(" "),a("h3",{attrs:{id:"state-transitions-with-smart-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-transitions-with-smart-contracts"}},[e._v("#")]),e._v(" State Transitions with Smart Contracts")]),e._v(" "),a("p",[e._v("Typically smart contracts expose a public ABI, which is a list of supported ways a user can interact with a contract. To interact with a contract and invoke a state transition, a user will submit a tx carrying any amount of gas and a data payload formatted according to the ABI, specifying the type of interaction and any additional parameters. When the tx is received, the EVM executes the smart contracts's EVM bytecode using the tx payload.")]),e._v(" "),a("h3",{attrs:{id:"executing-evm-bytecode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executing-evm-bytecode"}},[e._v("#")]),e._v(" Executing EVM bytecode")]),e._v(" "),a("p",[e._v("A contract's EVM bytecode consists of basic operations (add, multiply, store, etc...), called "),a("strong",[e._v("Opcodes")]),e._v(". Each Opcode execution requires gas that needs to be payed with the tx. The EVM is therefore considered quasi-turing complete, as it allows any arbitrary computation, but the amount of computations during a contract execution is limited to the amount of gas provided in the tx. Each Opcode's "),a("a",{attrs:{href:"https://www.evm.codes/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("gas cost")]),a("OutboundLink")],1),e._v(" reflects the cost of running these operations on actual computer hardware (e.g. "),a("code",[e._v("ADD = 3gas")]),e._v(" and "),a("code",[e._v("SSTORE = 100gas")]),e._v("). To calculate the gas consumption of a tx, the gas cost is multiplied by the "),a("strong",[e._v("gas price")]),e._v(", which can change depending on the demand of the network at the time. If the network is under heavy load, you might have to pay a highter gas price to get your tx executed. If the gas limit is hit (out of gas execption) no changes to the Ethereum state are applied, except that the sender's nonce increments and their balance goes down to pay for wasting the EVM's time.")]),e._v(" "),a("p",[e._v("Smart contracts can also call other smart contracts. Each call to a new contract creates a new instance of the EVM (including a new stack and memory). Each call passes the sandbox state to the next EVM. If the gas runs out, all state changes are discareded. Otherwise they are kept.")]),e._v(" "),a("p",[e._v("For further reading, please refer to:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://eth.wiki/concepts/evm/evm",target:"_blank",rel:"noopener noreferrer"}},[e._v("EVM"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://cypherpunks-core.github.io/ethereumbook/13evm.html#evm_architecture",target:"_blank",rel:"noopener noreferrer"}},[e._v("EVM Architecture"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://ethdocs.org/en/latest/introduction/what-is-ethereum.html#what-is-ethereum",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is Ethereum"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.ethervm.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Opcodes"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"ethermint-as-geth-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethermint-as-geth-implementation"}},[e._v("#")]),e._v(" Ethermint as Geth implementation")]),e._v(" "),a("p",[e._v("Ethermint is an implementation of the "),a("a",{attrs:{href:"https://geth.ethereum.org/docs/getting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("Etherum protocal in Golang"),a("OutboundLink")],1),e._v(" (Geth) as a Cosmos SDK module. Geth includes an implementation of the EVM to compute state transitions. Have a look at the "),a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/blob/master/core/vm/instructions.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-etheruem source code"),a("OutboundLink")],1),e._v(" to see how the EVM opcodes are implemented. Just as Geth can be run as an Ethereum node, Ethermint can be run as a node to compute state transitions with the EVM. Ethermint supports Geth's standard "),a("a",{attrs:{href:"https://docs.evmos.org/developers/json-rpc/endpoints.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum JSON-RPC APIs"),a("OutboundLink")],1),e._v(" in order to be Web3 and EVM compatible.")]),e._v(" "),a("h3",{attrs:{id:"json-rpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc"}},[e._v("#")]),e._v(" JSON-RPC")]),e._v(" "),a("p",[e._v("JSON-RPC is a stateless, lightweight remote procedure call (RPC) protocol. Primarily this specification defines several data structures and the rules around their processing. It is transport agnostic in that the concepts can be used within the same process, over sockets, over HTTP, or in many various message passing environments. It uses JSON (RFC 4627) as a data format.")]),e._v(" "),a("h4",{attrs:{id:"json-rpc-example-eth-call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc-example-eth-call"}},[e._v("#")]),e._v(" JSON-RPC Example: "),a("code",[e._v("eth_call")])]),e._v(" "),a("p",[e._v("The JSON-RPC method "),a("a",{attrs:{href:"https://docs.evmos.org/developers/json-rpc/endpoints.html#eth-call",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("eth_call")]),a("OutboundLink")],1),e._v(" allows you to execute messages against contracts. Usually, you need to send a transaction to a Geth node to include it in the mempool, then nodes gossip between each other and eventually the transaction is included in a block and gets executed. "),a("code",[e._v("eth_call")]),e._v(" however lets you send data to a contract and see what happens without commiting a transaction.")]),e._v(" "),a("p",[e._v("In the Geth implementation, calling the endpoint roughly goes through the following steps:")]),e._v(" "),a("ol",[a("li",[e._v("The "),a("code",[e._v("eth_call")]),e._v(" request is transformed to call the "),a("code",[e._v("func (s *PublicBlockchainAPI) Call()")]),e._v(" function using the "),a("code",[e._v("eth")]),e._v(" namespace")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/blob/master/internal/ethapi/api.go#L982",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Call()")]),a("OutboundLink")],1),e._v(" is given the transaction arguments, the block to call against and optional overides that modify the state to call against. It then calls "),a("code",[e._v("DoCall()")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/blob/d575a2d3bc76dfbdefdd68b6cffff115542faf75/internal/ethapi/api.go#L891",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("DoCall()")]),a("OutboundLink")],1),e._v(" transforms the arguments into a "),a("code",[e._v("ethtypes.message")]),e._v(", instantiates an EVM and applies the message with "),a("code",[e._v("core.ApplyMessage")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/blob/d575a2d3bc76dfbdefdd68b6cffff115542faf75/core/state_transition.go#L180",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("ApplyMessage()")]),a("OutboundLink")],1),e._v(" calls the state transition "),a("code",[e._v("TransitionDb()")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/blob/d575a2d3bc76dfbdefdd68b6cffff115542faf75/core/state_transition.go#L275",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("TransitionDb()")]),a("OutboundLink")],1),e._v(" either "),a("code",[e._v("Create()")]),e._v("s a new contract or "),a("code",[e._v("Call()")]),e._v("s a contract")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/blob/d575a2d3bc76dfbdefdd68b6cffff115542faf75/core/vm/evm.go#L168",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("evm.Call()")]),a("OutboundLink")],1),e._v(" runs the interpreter "),a("code",[e._v("evm.interpreter.Run()")]),e._v(" to execute the message. If the execution fails, the state is reverted to a snapshot taken before the execution and gas is consumed.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/blob/d575a2d3bc76dfbdefdd68b6cffff115542faf75/core/vm/interpreter.go#L116",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Run()")]),a("OutboundLink")],1),e._v(" performs a loop to execute the opcodes.")])]),e._v(" "),a("p",[e._v("The ethermint implementatiom is similar and makes use of the gRPC query client which is included in the Cosmos SDK:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("eth_call")]),e._v(" request is transformed to call the "),a("code",[e._v("func (e *PublicAPI) Call")]),e._v(" function using the "),a("code",[e._v("eth")]),e._v(" namespace")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/evmos/ethermint/blob/main/rpc/namespaces/ethereum/eth/api.go#L639",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Call()")]),a("OutboundLink")],1),e._v(" calls "),a("code",[e._v("doCall()")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/evmos/ethermint/blob/main/rpc/namespaces/ethereum/eth/api.go#L656",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("doCall()")]),a("OutboundLink")],1),e._v(" transforms the arguments into a "),a("code",[e._v("EthCallRequest")]),e._v(" and calls "),a("code",[e._v("EthCall()")]),e._v(" using the query client of the evm module.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/evmos/ethermint/blob/main/x/evm/keeper/grpc_query.go#L212",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("EthCall()")]),a("OutboundLink")],1),e._v(" transforms the arguments into a "),a("code",[e._v("ethtypes.message")]),e._v(" and calls `ApplyMessageWithConfig()")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/evmos/ethermint/blob/d5598932a7f06158b7a5e3aa031bbc94eaaae32c/x/evm/keeper/state_transition.go#L341",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("ApplyMessageWithConfig()")]),a("OutboundLink")],1),e._v(" instantiates an EVM and either "),a("code",[e._v("Create()")]),e._v("s a new contract or "),a("code",[e._v("Call()")]),e._v("s a contract using the Geth implementation.")])]),e._v(" "),a("h3",{attrs:{id:"statedb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statedb"}},[e._v("#")]),e._v(" StateDB")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("StateDB")]),e._v(" interface from "),a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/blob/master/core/vm/interface.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-ethereum"),a("OutboundLink")],1),e._v(" represents an EVM database for full state querying. EVM state transitions are enabled by this interface, which in the "),a("code",[e._v("x/evm")]),e._v(" module is implemented by the "),a("code",[e._v("Keeper")]),e._v(". The implementation of this interface is what makes Ethermint EVM compatible.")]),e._v(" "),a("h2",{attrs:{id:"consensus-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consensus-engine"}},[e._v("#")]),e._v(" Consensus Engine")]),e._v(" "),a("p",[e._v("The application using the "),a("code",[e._v("x/evm")]),e._v(" module interacts with the Tendermint Core Consensus Engine over an Application Blockchain Interface (ABCI). Together, the application and Tendermint Core form the programs that run a complete blockchain and combine business logic with decentralized data storage.")]),e._v(" "),a("p",[e._v("Ethereum transactions that are submitted to the "),a("code",[e._v("x/evm")]),e._v(" module take part in a this consensus process before being executed and changing the application state. We encourage to understand the basics of the "),a("a",{attrs:{href:"https://docs.tendermint.com/master/introduction/what-is-tendermint.html#intro-to-abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint consensus engine"),a("OutboundLink")],1),e._v(" in order to understand state transitions in detail.")]),e._v(" "),a("h2",{attrs:{id:"transaction-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-logs"}},[e._v("#")]),e._v(" Transaction Logs")]),e._v(" "),a("p",[e._v("On every "),a("code",[e._v("x/evm")]),e._v(" transaction, the result contains the Ethereum "),a("code",[e._v("Log")]),e._v("s from the state machine execution that are used by the JSON-RPC Web3 server for filter querying and for processing the EVM Hooks.")]),e._v(" "),a("p",[e._v("The tx logs are stored in the transient store during tx execution and then emitted through cosmos events after the transaction has been processed. They can be queried via gRPC and JSON-RPC.")]),e._v(" "),a("h2",{attrs:{id:"block-bloom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-bloom"}},[e._v("#")]),e._v(" Block Bloom")]),e._v(" "),a("p",[e._v("Bloom is the bloom filter value in bytes for each block that can be used for filter queries. The block bloom value is stored in the transient store and then emitted through a cosmos event during "),a("code",[e._v("EndBlock")]),e._v(" processing. They can be queried via gRPC and JSON-RPC.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("👉 "),a("strong",[e._v("Note")]),e._v(": Since they are not stored on state, Transaction Logs and Block Blooms are not persisted after upgrades. A user must use an archival node after upgrades in order to obtain legacy chain events.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);