(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{706:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),a("p",[e._v("This section gives you an overview of the objects stored in the "),a("code",[e._v("x/evm")]),e._v(" module state, functionalities that are derived from the go-ethereum "),a("code",[e._v("StateDB")]),e._v(" interface, and its implementation through the Keeper as well as the state implementation at genesis.")]),e._v(" "),a("h2",{attrs:{id:"state-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-objects"}},[e._v("#")]),e._v(" State Objects")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("x/evm")]),e._v(" module keeps the following objects in state:")]),e._v(" "),a("h3",{attrs:{id:"state-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-2"}},[e._v("#")]),e._v(" State")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th"),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Key")]),e._v(" "),a("th",[e._v("Value")]),e._v(" "),a("th",[e._v("Store")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Code")]),e._v(" "),a("td",[e._v("Smart contract bytecode")]),e._v(" "),a("td",[a("code",[e._v("[]byte{1} + []byte(address)")])]),e._v(" "),a("td",[a("code",[e._v("[]byte{code}")])]),e._v(" "),a("td",[e._v("KV")])]),e._v(" "),a("tr",[a("td",[e._v("Storage")]),e._v(" "),a("td",[e._v("Smart contract storage")]),e._v(" "),a("td",[a("code",[e._v("[]byte{2} + [32]byte{key}")])]),e._v(" "),a("td",[a("code",[e._v("[32]byte(value)")])]),e._v(" "),a("td",[e._v("KV")])]),e._v(" "),a("tr",[a("td",[e._v("Block Bloom")]),e._v(" "),a("td",[e._v("Block bloom filter, used to accumulate the bloom filter of current block, emitted to events at end blocker.")]),e._v(" "),a("td",[a("code",[e._v("[]byte{1} + []byte(tx.Hash)")])]),e._v(" "),a("td",[a("code",[e._v("protobuf([]Log)")])]),e._v(" "),a("td",[e._v("Transient")])]),e._v(" "),a("tr",[a("td",[e._v("Tx Index")]),e._v(" "),a("td",[e._v("Index of current transaction in current block.")]),e._v(" "),a("td",[a("code",[e._v("[]byte{2}")])]),e._v(" "),a("td",[a("code",[e._v("BigEndian(uint64)")])]),e._v(" "),a("td",[e._v("Transient")])]),e._v(" "),a("tr",[a("td",[e._v("Log Size")]),e._v(" "),a("td",[e._v("Number of the logs emitted so far in current block. Used to decide the log index of following logs.")]),e._v(" "),a("td",[a("code",[e._v("[]byte{3}")])]),e._v(" "),a("td",[a("code",[e._v("BigEndian(uint64)")])]),e._v(" "),a("td",[e._v("Transient")])]),e._v(" "),a("tr",[a("td",[e._v("Gas Used")]),e._v(" "),a("td",[e._v("Amount of gas used by ethereum messages of current cosmos-sdk tx, it's necessary when cosmos-sdk tx contains multiple ethereum messages.")]),e._v(" "),a("td",[a("code",[e._v("[]byte{4}")])]),e._v(" "),a("td",[a("code",[e._v("BigEndian(uint64)")])]),e._v(" "),a("td",[e._v("Transient")])])])]),e._v(" "),a("h2",{attrs:{id:"statedb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statedb"}},[e._v("#")]),e._v(" StateDB")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("StateDB")]),e._v(" interface is implemented by the "),a("code",[e._v("StateDB")]),e._v(" in the "),a("code",[e._v("x/evm/statedb")]),e._v(" module to represent an EVM database for full state querying of both contracts and accounts. Within the Ethereum protocol, "),a("code",[e._v("StateDB")]),e._v("s are used to store anything within the IAVL tree and take care of caching and storing nested states.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gZ2l0aHViLmNvbS9ldGhlcmV1bS9nby1ldGhlcmV1bS9jb3JlL3ZtL2ludGVyZmFjZS5nbwp0eXBlIFN0YXRlREIgaW50ZXJmYWNlIHsKIENyZWF0ZUFjY291bnQoY29tbW9uLkFkZHJlc3MpCgogU3ViQmFsYW5jZShjb21tb24uQWRkcmVzcywgKmJpZy5JbnQpCiBBZGRCYWxhbmNlKGNvbW1vbi5BZGRyZXNzLCAqYmlnLkludCkKIEdldEJhbGFuY2UoY29tbW9uLkFkZHJlc3MpICpiaWcuSW50CgogR2V0Tm9uY2UoY29tbW9uLkFkZHJlc3MpIHVpbnQ2NAogU2V0Tm9uY2UoY29tbW9uLkFkZHJlc3MsIHVpbnQ2NCkKCiBHZXRDb2RlSGFzaChjb21tb24uQWRkcmVzcykgY29tbW9uLkhhc2gKIEdldENvZGUoY29tbW9uLkFkZHJlc3MpIFtdYnl0ZQogU2V0Q29kZShjb21tb24uQWRkcmVzcywgW11ieXRlKQogR2V0Q29kZVNpemUoY29tbW9uLkFkZHJlc3MpIGludAoKIEFkZFJlZnVuZCh1aW50NjQpCiBTdWJSZWZ1bmQodWludDY0KQogR2V0UmVmdW5kKCkgdWludDY0CgogR2V0Q29tbWl0dGVkU3RhdGUoY29tbW9uLkFkZHJlc3MsIGNvbW1vbi5IYXNoKSBjb21tb24uSGFzaAogR2V0U3RhdGUoY29tbW9uLkFkZHJlc3MsIGNvbW1vbi5IYXNoKSBjb21tb24uSGFzaAogU2V0U3RhdGUoY29tbW9uLkFkZHJlc3MsIGNvbW1vbi5IYXNoLCBjb21tb24uSGFzaCkKCiBTdWljaWRlKGNvbW1vbi5BZGRyZXNzKSBib29sCiBIYXNTdWljaWRlZChjb21tb24uQWRkcmVzcykgYm9vbAoKIC8vIEV4aXN0IHJlcG9ydHMgd2hldGhlciB0aGUgZ2l2ZW4gYWNjb3VudCBleGlzdHMgaW4gc3RhdGUuCiAvLyBOb3RhYmx5IHRoaXMgc2hvdWxkIGFsc28gcmV0dXJuIHRydWUgZm9yIHN1aWNpZGVkIGFjY291bnRzLgogRXhpc3QoY29tbW9uLkFkZHJlc3MpIGJvb2wKIC8vIEVtcHR5IHJldHVybnMgd2hldGhlciB0aGUgZ2l2ZW4gYWNjb3VudCBpcyBlbXB0eS4gRW1wdHkKIC8vIGlzIGRlZmluZWQgYWNjb3JkaW5nIHRvIEVJUDE2MSAoYmFsYW5jZSA9IG5vbmNlID0gY29kZSA9IDApLgogRW1wdHkoY29tbW9uLkFkZHJlc3MpIGJvb2wKCiBQcmVwYXJlQWNjZXNzTGlzdChzZW5kZXIgY29tbW9uLkFkZHJlc3MsIGRlc3QgKmNvbW1vbi5BZGRyZXNzLCBwcmVjb21waWxlcyBbXWNvbW1vbi5BZGRyZXNzLCB0eEFjY2Vzc2VzIHR5cGVzLkFjY2Vzc0xpc3QpCiBBZGRyZXNzSW5BY2Nlc3NMaXN0KGFkZHIgY29tbW9uLkFkZHJlc3MpIGJvb2wKIFNsb3RJbkFjY2Vzc0xpc3QoYWRkciBjb21tb24uQWRkcmVzcywgc2xvdCBjb21tb24uSGFzaCkgKGFkZHJlc3NPayBib29sLCBzbG90T2sgYm9vbCkKIC8vIEFkZEFkZHJlc3NUb0FjY2Vzc0xpc3QgYWRkcyB0aGUgZ2l2ZW4gYWRkcmVzcyB0byB0aGUgYWNjZXNzIGxpc3QuIFRoaXMgb3BlcmF0aW9uIGlzIHNhZmUgdG8gcGVyZm9ybQogLy8gZXZlbiBpZiB0aGUgZmVhdHVyZS9mb3JrIGlzIG5vdCBhY3RpdmUgeWV0CiBBZGRBZGRyZXNzVG9BY2Nlc3NMaXN0KGFkZHIgY29tbW9uLkFkZHJlc3MpCiAvLyBBZGRTbG90VG9BY2Nlc3NMaXN0IGFkZHMgdGhlIGdpdmVuIChhZGRyZXNzLHNsb3QpIHRvIHRoZSBhY2Nlc3MgbGlzdC4gVGhpcyBvcGVyYXRpb24gaXMgc2FmZSB0byBwZXJmb3JtCiAvLyBldmVuIGlmIHRoZSBmZWF0dXJlL2ZvcmsgaXMgbm90IGFjdGl2ZSB5ZXQKIEFkZFNsb3RUb0FjY2Vzc0xpc3QoYWRkciBjb21tb24uQWRkcmVzcywgc2xvdCBjb21tb24uSGFzaCkKCiBSZXZlcnRUb1NuYXBzaG90KGludCkKIFNuYXBzaG90KCkgaW50CgogQWRkTG9nKCp0eXBlcy5Mb2cpCiBBZGRQcmVpbWFnZShjb21tb24uSGFzaCwgW11ieXRlKQoKIEZvckVhY2hTdG9yYWdlKGNvbW1vbi5BZGRyZXNzLCBmdW5jKGNvbW1vbi5IYXNoLCBjb21tb24uSGFzaCkgYm9vbCkgZXJyb3IKfQo="}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("StateDB")]),e._v(" in the "),a("code",[e._v("x/evm")]),e._v(" provides the following functionalities:")]),e._v(" "),a("h3",{attrs:{id:"crud-of-ethereum-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crud-of-ethereum-accounts"}},[e._v("#")]),e._v(" CRUD of Ethereum accounts")]),e._v(" "),a("p",[e._v("You can create "),a("code",[e._v("EthAccount")]),e._v(" instances from the provided address and set the value to store on the  "),a("code",[e._v("AccountKeeper")]),e._v("with "),a("code",[e._v("createAccount()")]),e._v(". If an account with the given address already exists, this function also resets any preexisting code and storage associated with that address.")]),e._v(" "),a("p",[e._v("An account's coin balance can be is managed through the "),a("code",[e._v("BankKeeper")]),e._v(" and can be read with "),a("code",[e._v("GetBalance()")]),e._v(" and updated with "),a("code",[e._v("AddBalance()")]),e._v(" and "),a("code",[e._v("SubBalance()")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GetBalance()")]),e._v(" returns the EVM denomination balance of the provided address. The denomination is obtained from the module parameters.")]),e._v(" "),a("li",[a("code",[e._v("AddBalance()")]),e._v(" adds the given amount to the address balance coin by minting new coins and transferring them to the address. The coin denomination is obtained from the module parameters.")]),e._v(" "),a("li",[a("code",[e._v("SubBalance()")]),e._v(" subtracts the given amount from the address balance by transferring the coins to an escrow account and then burning them. The coin denomination is obtained from the module parameters. This function performs a no-op if the amount is negative or the user doesn't have enough funds for the transfer.")])]),e._v(" "),a("p",[e._v("The nonce (or transaction sequence) can be obtained from the Account "),a("code",[e._v("Sequence")]),e._v(" via the auth module "),a("code",[e._v("AccountKeeper")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GetNonce()")]),e._v(" retrieves the account with the given address and returns the tx sequence (i.e nonce). The function performs a no-op if the account is not found.")]),e._v(" "),a("li",[a("code",[e._v("SetNonce()")]),e._v(" sets the given nonce as the sequence of the address' account. If the account doesn't exist, a new one will be created from the address.")])]),e._v(" "),a("p",[e._v("The smart contract bytecode containing arbitrary contract logic is stored on the "),a("code",[e._v("EVMKeeper")]),e._v(" and it can be queried with "),a("code",[e._v("GetCodeHash()")]),e._v(" ,"),a("code",[e._v("GetCode()")]),e._v(" & "),a("code",[e._v("GetCodeSize()")]),e._v("and updated with "),a("code",[e._v("SetCode()")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GetCodeHash()")]),e._v(" fetches the account from the store and returns its code hash. If the account doesn't exist or is not an EthAccount type, it returns the empty code hash value.")]),e._v(" "),a("li",[a("code",[e._v("GetCode()")]),e._v(" returns the code byte array associated with the given address. If the code hash from the account is empty, this function returns nil.")]),e._v(" "),a("li",[a("code",[e._v("SetCode()")]),e._v(" stores the code byte array to the application KVStore and sets the code hash to the given account. The code is deleted from the store if it is empty.")]),e._v(" "),a("li",[a("code",[e._v("GetCodeSize()")]),e._v(" returns the size of the contract code associated with this object, or zero if none.")])]),e._v(" "),a("p",[e._v("Gas refunded needs to be tracked and stored in a separate variable in\norder to add it subtract/add it from/to the gas used value after the EVM\nexecution has finalized. The refund value is cleared on every transaction and at the end of every block.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("AddRefund()")]),e._v(" adds the given amount of gas to the in-memory refund value.")]),e._v(" "),a("li",[a("code",[e._v("SubRefund()")]),e._v(" subtracts the given amount of gas from the in-memory refund value. This function will panic if gas amount is greater than the current refund.")]),e._v(" "),a("li",[a("code",[e._v("GetRefund()")]),e._v(" returns the amount of gas available for return after the tx execution finalizes. This value is reset to 0 on every transaction.")])]),e._v(" "),a("p",[e._v("The state is stored on the "),a("code",[e._v("EVMKeeper")]),e._v(". It can be queried with "),a("code",[e._v("GetCommittedState()")]),e._v(", "),a("code",[e._v("GetState()")]),e._v(" and updated with "),a("code",[e._v("SetState()")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GetCommittedState()")]),e._v(" returns the value set in store for the given key hash. If the key is not registered this function returns the empty hash.")]),e._v(" "),a("li",[a("code",[e._v("GetState()")]),e._v(" returns the in-memory dirty state for the given key hash, if not exist load the committed value from KVStore.")]),e._v(" "),a("li",[a("code",[e._v("SetState()")]),e._v(" sets the given hashes (key, value) to the state. If the value hash is empty, this function deletes the key from the state, the new value is kept in dirty state at first, and will be committed to KVStore in the end.")])]),e._v(" "),a("p",[e._v("Accounts can also be set to a suicide state. When a contract commits suicide, the account is marked as suicided, when committing the code, storage and account are deleted (from the next block and forward).")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Suicide()")]),e._v(" marks the given account as suicided and clears the account balance of the EVM tokens.")]),e._v(" "),a("li",[a("code",[e._v("HasSuicided()")]),e._v(' queries the in-memory flag to check if the account has been marked as suicided in the current transaction. Accounts that are suicided will be returned as non-nil during queries and "cleared" after the block has been committed.')])]),e._v(" "),a("p",[e._v("To check account existence use "),a("code",[e._v("Exist()")]),e._v(" and "),a("code",[e._v("Empty()")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Exist()")]),e._v(" returns true if the given account exists in store or if it has been\nmarked as suicided.")]),e._v(" "),a("li",[a("code",[e._v("Empty()")]),e._v(" returns true if the address meets the following conditions:\n"),a("ul",[a("li",[e._v("nonce is 0")]),e._v(" "),a("li",[e._v("balance amount for evm denom is 0")]),e._v(" "),a("li",[e._v("account code hash is empty")])])])]),e._v(" "),a("h3",{attrs:{id:"eip2930-functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eip2930-functionality"}},[e._v("#")]),e._v(" EIP2930 functionality")]),e._v(" "),a("p",[e._v("Supports a transaction type that contains an "),a("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-2930",target:"_blank",rel:"noopener noreferrer"}},[e._v("access list"),a("OutboundLink")],1),e._v(", a list of addresses, and storage keys that the transaction plans to access. The access list state is kept in memory and discarded after the transaction committed.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("PrepareAccessList()")]),e._v(" handles the preparatory steps for executing a state transition with regards to both EIP-2929 and EIP-2930. This method should only be called if Yolov3/Berlin/2929+2930 is applicable at the current number.\n"),a("ul",[a("li",[e._v("Add sender to access list (EIP-2929)")]),e._v(" "),a("li",[e._v("Add destination to access list (EIP-2929)")]),e._v(" "),a("li",[e._v("Add precompiles to access list (EIP-2929)")]),e._v(" "),a("li",[e._v("Add the contents of the optional tx access list (EIP-2930)")])])]),e._v(" "),a("li",[a("code",[e._v("AddressInAccessList()")]),e._v(" returns true if the address is registered.")]),e._v(" "),a("li",[a("code",[e._v("SlotInAccessList()")]),e._v(" checks if the address and the slots are registered.")]),e._v(" "),a("li",[a("code",[e._v("AddAddressToAccessList()")]),e._v(" adds the given address to the access list. If the address is already in the access list, this function performs a no-op.")]),e._v(" "),a("li",[a("code",[e._v("AddSlotToAccessList()")]),e._v(" adds the given (address, slot) to the access list. If the address and slot are already in the access list, this function performs a no-op.")])]),e._v(" "),a("h3",{attrs:{id:"snapshot-state-and-revert-functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snapshot-state-and-revert-functionality"}},[e._v("#")]),e._v(" Snapshot state and Revert functionality")]),e._v(" "),a("p",[e._v("The EVM uses state-reverting exceptions to handle errors. Such an exception will undo all changes made to the state in the current call (and all its sub-calls), and the caller could handle the error and don't propagate. You can use "),a("code",[e._v("Snapshot()")]),e._v(" to identify the current state with a revision and revert the state to a given revision with "),a("code",[e._v("RevertToSnapshot()")]),e._v(" to support this feature.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Snapshot()")]),e._v(" creates a new snapshot and returns the identifier.")]),e._v(" "),a("li",[a("code",[e._v("RevertToSnapshot(rev)")]),e._v(" undo all the modifications up to the snapshot identified as "),a("code",[e._v("rev")]),e._v(".")])]),e._v(" "),a("p",[e._v("Evmos adapted the "),a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/blob/master/core/state/journal.go#L39",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-ethereum journal implementation"),a("OutboundLink")],1),e._v(" to support this, it uses a list of journal logs to record all the state modification operations done so far,\nsnapshot is consists of a unique id and an index in the log list, and to revert to a snapshot it just undo the journal logs after the snapshot index in reversed order.")]),e._v(" "),a("h3",{attrs:{id:"ethereum-transaction-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-transaction-logs"}},[e._v("#")]),e._v(" Ethereum Transaction logs")]),e._v(" "),a("p",[e._v("With "),a("code",[e._v("AddLog()")]),e._v(" you can append the given ethereum "),a("code",[e._v("Log")]),e._v(" to the list of Logs associated with the transaction hash kept in the current state. This function also fills in the tx hash, block hash, tx index and log index fields before setting the log to store.")]),e._v(" "),a("h2",{attrs:{id:"keeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keeper"}},[e._v("#")]),e._v(" Keeper")]),e._v(" "),a("p",[e._v("The EVM module "),a("code",[e._v("Keeper")]),e._v(" grants access to the EVM module state and implements "),a("code",[e._v("statedb.Keeper")]),e._v(" interface to support the "),a("code",[e._v("StateDB")]),e._v(" implementation. The Keeper contains a store key that allows the DB to write to a concrete subtree of the multistore that is only accessible to the EVM module. Instead of using a trie and database for querying and persistence (the "),a("code",[e._v("StateDB")]),e._v(" implementation on Ethermint), use the Cosmos "),a("code",[e._v("KVStore")]),e._v(" (key-value store) and Cosmos SDK "),a("code",[e._v("Keeper")]),e._v(" to facilitate state transitions.")]),e._v(" "),a("p",[e._v("To support the interface functionality, it imports 4 module Keepers:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("auth")]),e._v(": CRUD accounts")]),e._v(" "),a("li",[a("code",[e._v("bank")]),e._v(": accounting (supply) and CRUD of balances")]),e._v(" "),a("li",[a("code",[e._v("staking")]),e._v(": query historical headers")]),e._v(" "),a("li",[a("code",[e._v("fee market")]),e._v(": EIP1559 base fee for processing "),a("code",[e._v("DynamicFeeTx")]),e._v(" after the "),a("code",[e._v("London")]),e._v(" hard fork has been activated on the "),a("code",[e._v("ChainConfig")]),e._v(" parameters")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBLZWVwZXIgc3RydWN0IHsKIC8vIFByb3RvYnVmIGNvZGVjCiBjZGMgY29kZWMuQmluYXJ5Q29kZWMKIC8vIFN0b3JlIGtleSByZXF1aXJlZCBmb3IgdGhlIEVWTSBQcmVmaXggS1ZTdG9yZS4gSXQgaXMgcmVxdWlyZWQgYnk6CiAvLyAtIHN0b3JpbmcgYWNjb3VudCdzIFN0b3JhZ2UgU3RhdGUKIC8vIC0gc3RvcmluZyBhY2NvdW50J3MgQ29kZQogLy8gLSBzdG9yaW5nIEJsb29tIGZpbHRlcnMgYnkgYmxvY2sgaGVpZ2h0LiBOZWVkZWQgZm9yIHRoZSBXZWIzIEFQSS4KIC8vIEZvciB0aGUgZnVsbCBsaXN0LCBjaGVjayB0aGUgbW9kdWxlIHNwZWNpZmljYXRpb24KIHN0b3JlS2V5IHNkay5TdG9yZUtleQoKIC8vIGtleSB0byBhY2Nlc3MgdGhlIHRyYW5zaWVudCBzdG9yZSwgd2hpY2ggaXMgcmVzZXQgb24gZXZlcnkgYmxvY2sgZHVyaW5nIENvbW1pdAogdHJhbnNpZW50S2V5IHNkay5TdG9yZUtleQoKIC8vIG1vZHVsZSBzcGVjaWZpYyBwYXJhbWV0ZXIgc3BhY2UgdGhhdCBjYW4gYmUgY29uZmlndXJlZCB0aHJvdWdoIGdvdmVybmFuY2UKIHBhcmFtU3BhY2UgcGFyYW10eXBlcy5TdWJzcGFjZQogLy8gYWNjZXNzIHRvIGFjY291bnQgc3RhdGUKIGFjY291bnRLZWVwZXIgdHlwZXMuQWNjb3VudEtlZXBlcgogLy8gdXBkYXRlIGJhbGFuY2UgYW5kIGFjY291bnRpbmcgb3BlcmF0aW9ucyB3aXRoIGNvaW5zCiBiYW5rS2VlcGVyIHR5cGVzLkJhbmtLZWVwZXIKIC8vIGFjY2VzcyBoaXN0b3JpY2FsIGhlYWRlcnMgZm9yIEVWTSBzdGF0ZSB0cmFuc2l0aW9uIGV4ZWN1dGlvbgogc3Rha2luZ0tlZXBlciB0eXBlcy5TdGFraW5nS2VlcGVyCiAvLyBmZXRjaCBFSVAxNTU5IGJhc2UgZmVlIGFuZCBwYXJhbWV0ZXJzCiBmZWVNYXJrZXRLZWVwZXIgdHlwZXMuRmVlTWFya2V0S2VlcGVyCgogLy8gY2hhaW4gSUQgbnVtYmVyIG9idGFpbmVkIGZyb20gdGhlIGNvbnRleHQncyBjaGFpbiBpZAogZWlwMTU1Q2hhaW5JRCAqYmlnLkludAoKIC8vIFRyYWNlciB1c2VkIHRvIGNvbGxlY3QgZXhlY3V0aW9uIHRyYWNlcyBmcm9tIHRoZSBFVk0gdHJhbnNhY3Rpb24gZXhlY3V0aW9uCiB0cmFjZXIgc3RyaW5nCiAvLyB0cmFjZSBFVk0gc3RhdGUgdHJhbnNpdGlvbiBleGVjdXRpb24uIFRoaXMgdmFsdWUgaXMgb2J0YWluZWQgZnJvbSB0aGUgYC0tdHJhY2VgIGZsYWcuCiAvLyBGb3IgbW9yZSBpbmZvIGNoZWNrIGh0dHBzOi8vZ2V0aC5ldGhlcmV1bS5vcmcvZG9jcy9kYXBwL3RyYWNpbmcKIGRlYnVnIGJvb2wKCiAvLyBFVk0gSG9va3MgZm9yIHR4IHBvc3QtcHJvY2Vzc2luZwogaG9va3MgdHlwZXMuRXZtSG9va3MKfQo="}}),e._v(" "),a("h2",{attrs:{id:"genesis-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genesis-state"}},[e._v("#")]),e._v(" Genesis State")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("x/evm")]),e._v(" module "),a("code",[e._v("GenesisState")]),e._v(" defines the state necessary for initializing the chain from a previous exported height. It contains the "),a("code",[e._v("GenesisAccounts")]),e._v(" and the module parameters")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBHZW5lc2lzU3RhdGUgc3RydWN0IHsKICAvLyBhY2NvdW50cyBpcyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBldGhlcmV1bSBnZW5lc2lzIGFjY291bnRzLgogIEFjY291bnRzIFtdR2VuZXNpc0FjY291bnQgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEscmVwLG5hbWU9YWNjb3VudHMscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7YWNjb3VudHMmcXVvdDtgCiAgLy8gcGFyYW1zIGRlZmluZXMgYWxsIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBtb2R1bGUuCiAgUGFyYW1zIFBhcmFtcyBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMixvcHQsbmFtZT1wYXJhbXMscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7cGFyYW1zJnF1b3Q7YAp9Cg=="}}),e._v(" "),a("h2",{attrs:{id:"genesis-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genesis-accounts"}},[e._v("#")]),e._v(" Genesis Accounts")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("GenesisAccount")]),e._v(" type corresponds to an adaptation of the Ethereum "),a("code",[e._v("GenesisAccount")]),e._v(" type. It defines an account to be initialized in the genesis state.")]),e._v(" "),a("p",[e._v("Its main difference is that the one on Ethermint uses a custom "),a("code",[e._v("Storage")]),e._v(" type that uses a slice instead of maps for the evm "),a("code",[e._v("State")]),e._v(" (due to non-determinism), and that it doesn't contain the private key field.")]),e._v(" "),a("p",[e._v("It is also important to note that since the "),a("code",[e._v("auth")]),e._v(" module on the Cosmos SDK manages the account state,  the "),a("code",[e._v("Address")]),e._v(" field must correspond to an existing "),a("code",[e._v("EthAccount")]),e._v(" that is stored in the "),a("code",[e._v("auth")]),e._v("'s module "),a("code",[e._v("Keeper")]),e._v(" (i.e "),a("code",[e._v("AccountKeeper")]),e._v("). Addresses use the "),a("strong",[a("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-55",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP55"),a("OutboundLink")],1)]),e._v(" hex "),a("strong",[a("a",{attrs:{href:"https://evmos.dev/basics/accounts.html#address-formats-for-clients",target:"_blank",rel:"noopener noreferrer"}},[e._v("format"),a("OutboundLink")],1)]),e._v(" on "),a("code",[e._v("genesis.json")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBHZW5lc2lzQWNjb3VudCBzdHJ1Y3QgewogIC8vIGFkZHJlc3MgZGVmaW5lcyBhbiBldGhlcmV1bSBoZXggZm9ybWF0ZWQgYWRkcmVzcyBvZiBhbiBhY2NvdW50CiAgQWRkcmVzcyBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEsb3B0LG5hbWU9YWRkcmVzcyxwcm90bzMmcXVvdDsganNvbjomcXVvdDthZGRyZXNzLG9taXRlbXB0eSZxdW90O2AKICAvLyBjb2RlIGRlZmluZXMgdGhlIGhleCBieXRlcyBvZiB0aGUgYWNjb3VudCBjb2RlLgogIENvZGUgc3RyaW5nIGBwcm90b2J1ZjomcXVvdDtieXRlcywyLG9wdCxuYW1lPWNvZGUscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7Y29kZSxvbWl0ZW1wdHkmcXVvdDtgCiAgLy8gc3RvcmFnZSBkZWZpbmVzIHRoZSBzZXQgb2Ygc3RhdGUga2V5IHZhbHVlcyBmb3IgdGhlIGFjY291bnQuCiAgU3RvcmFnZSBTdG9yYWdlIGBwcm90b2J1ZjomcXVvdDtieXRlcywzLHJlcCxuYW1lPXN0b3JhZ2UscHJvdG8zLGNhc3RyZXBlYXRlZD1TdG9yYWdlJnF1b3Q7IGpzb246JnF1b3Q7c3RvcmFnZSZxdW90O2AKfQo="}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);