"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[637],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2166:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={},s="Oracle Operator Manual",d={unversionedId:"guides/oracle-operator-manual",id:"guides/oracle-operator-manual",title:"Oracle Operator Manual",description:"This document is intended for those who wish to participate in the Lido protocol as Oracle\u2014an entity who runs a daemon synchronizing state from ETH2 to ETH1 part of the protocol. To be precise, the daemon fetches the number of validators participating in the protocol, as well as their combined balance, from the Beacon chain and submits this data to the LidoOracle ETH1 smart contract.",source:"@site/docs/guides/oracle-operator-manual.md",sourceDirName:"guides",slug:"/guides/oracle-operator-manual",permalink:"/guides/oracle-operator-manual",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/oracle-operator-manual.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Node Operator Manual",permalink:"/guides/node-operator-manual"},next:{title:"Deposit Security Committee manual",permalink:"/guides/deposit-security-manual"}},c=[{value:"TL;DR",id:"tldr",children:[],level:2},{value:"Intro",id:"intro",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"The oracle daemon",id:"the-oracle-daemon",children:[{value:"Environment variables",id:"environment-variables",children:[],level:4},{value:"Running the daemon",id:"running-the-daemon",children:[],level:4}],level:2},{value:"Prometheus metrics",id:"prometheus-metrics",children:[],level:2}],p={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oracle-operator-manual"},"Oracle Operator Manual"),(0,o.kt)("p",null,"This document is intended for those who wish to participate in the Lido protocol as Oracle\u2014an entity who runs a daemon synchronizing state from ETH2 to ETH1 part of the protocol. To be precise, the daemon fetches the number of validators participating in the protocol, as well as their combined balance, from the Beacon chain and submits this data to the ",(0,o.kt)("inlineCode",{parentName:"p"},"LidoOracle")," ETH1 smart contract."),(0,o.kt)("p",null,"The daemon also fetches historical stETH token price (shifted by fifteen blocks) from Curve ETH/stETH pool and reports any significant changes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"StableSwapOracle")," contract. Using price data from this oracle as a safeguard helps to keep stETH token price resistant to flash-loan and sandwich attacks by removing the ability to significantly change the price in a single block."),(0,o.kt)("h2",{id:"tldr"},"TL;DR"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Generate an Ethereum address and propose it as an oracle address via the "Add Member" button in the app UI: ',(0,o.kt)("a",{parentName:"li",href:"https://mainnet.lido.fi/#/lido-dao/0x442af784a788a5bd6f42a01ebe9f287a871243fb/"},"Mainnet")," / ",(0,o.kt)("a",{parentName:"li",href:"https://testnet.testnet.fi/#/lido-testnet-prater/0xbc0b67b4553f4cf52a913de9a6ed0057e2e758db/"},"G\xf6rli"),"."),(0,o.kt)("li",{parentName:"ol"},"Facilitate the DAO members to approve your oracle address."),(0,o.kt)("li",{parentName:"ol"},"Launch and sync an Ethereum 1.0 node with JSON-RPC endpoint enabled."),(0,o.kt)("li",{parentName:"ol"},"Launch and sync a Lighthouse node with RPC endpoint enabled."),(0,o.kt)("li",{parentName:"ol"},"Launch the oracle daemon as a docker container.")),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Total supply of the StETH token always corresponds to the amount of Ether in control of the protocol. It increases on user deposits and Beacon chain staking rewards, and decreases on Beacon chain penalties and slashings. Since the Beacon chain is a separate chain, Lido ETH1 smart contracts can\u2019t get direct access to its data."),(0,o.kt)("p",null,"Communication between Ethereum 1.0 part of the system and the Beacon network is performed by the DAO-assigned oracles. They monitor staking providers\u2019 Beacon chain accounts and submit corresponding data to the ",(0,o.kt)("inlineCode",{parentName:"p"},"LidoOracle")," contract. The latter takes care of making sure that quorum about the data being pushed is reached within the oracles and enforcing data submission order (so that oracle contract never pushes data that is older than the already pushed one)."),(0,o.kt)("p",null,"Upon every update submitted by the ",(0,o.kt)("inlineCode",{parentName:"p"},"LidoOracle")," contract, the system recalculates the total stETH token balance. If the overall staking rewards are bigger than the slashing penalties, the system registers profit, and fee is taken from the profit and distributed between the insurance fund, the treasury, and node operators."),(0,o.kt)("p",null,"To protect stETH token price from attacks with borrowed money or flash loans, ",(0,o.kt)("inlineCode",{parentName:"p"},"StableSwapOracle")," keeps valid stETH stats from Curve Pool (ETH balance, stETH balance and stETH price), shifted by fifteen blocks, onchain. To keep these stats in actual state, the daemon reports required data to the oracle when price difference between the time-shifted stETH pool price and the last reported price exceeds the threshold limit. ",(0,o.kt)("inlineCode",{parentName:"p"},"StableSwapOracle")," validates all of the recorded data using cryptographic proofs. The threshold limit is set in the oracle contract and is purely advisory. It's introduced to prevent sending large number transactions which are pretty costly due to the Partricia Merkle proof verification."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"In order to launch oracle daemon on your machine, you need to have several things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A synced Ethereum 1.0 client with JSON-RPC endpoint enabled."),(0,o.kt)("li",{parentName:"ol"},"A synced Lighthouse client with RPC endpoint enabled (Prysm client not yet supported).")),(0,o.kt)("p",null,"3) An address that\u2019s added to the approved oracles list here: ",(0,o.kt)("a",{parentName:"p",href:"https://mainnet.lido.fi/#/lido-dao/0x442af784a788a5bd6f42a01ebe9f287a871243fb/"},"Mainnet")," / ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.testnet.fi/#/lido-testnet-prater/0xbc0b67b4553f4cf52a913de9a6ed0057e2e758db/"},"G\xf6rli"),'. You have to initiate the DAO voting on adding your address there by pressing the "Add Member" button.'),(0,o.kt)("h2",{id:"the-oracle-daemon"},"The oracle daemon"),(0,o.kt)("p",null,"The oracle daemon is a simple Python app that watches the Beacon chain and pushes the data to the LidoOracle Smart Contract: ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x442af784A788A5bd6F42A01Ebe9F287a871243fb"},"Mainnet")," / ",(0,o.kt)("a",{parentName:"p",href:"https://goerli.etherscan.io/address/0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F"},"G\xf6rli"),"."),(0,o.kt)("p",null,"The oracle source code is available at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-oracle"},"https://github.com/lidofinance/lido-oracle"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"StableSwapOracle")," source code can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/curve-merkle-oracle"},"https://github.com/lidofinance/curve-merkle-oracle"),". The docker image is available in the public Docker Hub registry: ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/lidofinance/oracle"},"https://hub.docker.com/r/lidofinance/oracle"),"."),(0,o.kt)("p",null,"The algorithm of the above oracle implementation is simple and each step of an infinite loop can be broken down into two sub-steps: update beacon data and update stETH price data."),(0,o.kt)("p",null,"Update Beacon Data"),(0,o.kt)("p",null,"The daemon fetches the reportable epoch from the ",(0,o.kt)("inlineCode",{parentName:"p"},"LidoOracle")," contract, and if this epoch is finalized on the Beacon chain, pushes the data to the ",(0,o.kt)("inlineCode",{parentName:"p"},"LidoOracle")," contract by submitting a transaction. The transaction contains a tuple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"(\n  epoch,\n  sum_of_balances_of_lido_validators,\n  number_of_lido_validators_on_beacon\n)\n")),(0,o.kt)("p",null,"Keep in mind that some of these transactions may revert. This happens when a transaction finalizing the current frame gets included in a block before your oracle's transaction. For example, such a transaction might had already been submitted by another oracle (but not yet included in a block) when your oracle fetched the current reportable epoch."),(0,o.kt)("p",null,"Update stETH Price Data"),(0,o.kt)("p",null,"The daemon checks the time-shifted price of stETH token in Curve ETH/stETH pool and evaluates how much this price differs from the current ",(0,o.kt)("inlineCode",{parentName:"p"},"StableSwapOracle")," state. If the difference exceeds the threshold set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"StableSwapOracle")," contract, the daemon generates offchain proof for the new stats and sends it to the contract. The contract validates the proof and records new stETH stats onchain.\nThis transaction can also fail in the case when another Lido oracle submits the updated state between the check and transaction submission."),(0,o.kt)("h4",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"The oracle daemon requires the following environment variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WEB3_PROVIDER_URI")," the ETH1 JSON-RPC endpoint."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BEACON_NODE")," the Lighthouse RPC endpoint."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"POOL_CONTRACT")," the address of the Lido contract (",(0,o.kt)("inlineCode",{parentName:"li"},"0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84")," in Mainnet and ",(0,o.kt)("inlineCode",{parentName:"li"},"0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F")," in G\xf6rli Testnet)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"STETH_PRICE_ORACLE_CONTRACT")," the address of ",(0,o.kt)("inlineCode",{parentName:"li"},"StableSwapOracle")," contract (",(0,o.kt)("inlineCode",{parentName:"li"},"0x3A6Bd15abf19581e411621D669B6a2bbe741ffD6")," in Mainnet and ",(0,o.kt)("inlineCode",{parentName:"li"},"0x4522dB9A6f804cb837E5fC9F547D320Da3edD49a")," in G\xf6rli Testnet)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"STETH_CURVE_POOL_CONTRACT")," the address of Curve ETH/StETH Pool (",(0,o.kt)("inlineCode",{parentName:"li"},"0xDC24316b9AE028F1497c275EB9192a3Ea0f67022")," in Mainnet and ",(0,o.kt)("inlineCode",{parentName:"li"},"0xCEB67769c63cfFc6C8a6c68e85aBE1Df396B7aDA")," in G\xf6rli Testnet)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MEMBER_PRIV_KEY")," 0x-prefixed private key of the address used by the oracle (should be in the DAO-approved list)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DAEMON")," run Oracle in a daemon mode")),(0,o.kt)("h4",{id:"running-the-daemon"},"Running the daemon"),(0,o.kt)("p",null,"To run script you have to export three required env variables: ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH1_NODE_RPC_ADDRESS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH2_NODE_RPC_ADDRESS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ORACLE_PRIVATE_KEY_0X_PREFIXED"),"\nBefore running the daemon, check that you've set all required env variables."),(0,o.kt)("p",null,"You can use the public Docker image to launch the daemon."),(0,o.kt)("p",null,"2.1.0 for Mainnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'docker run -d --name lido-oracle \\\n  --env "WEB3_PROVIDER_URI=$ETH1_NODE_RPC_ADDRESS" \\\n  --env "BEACON_NODE=$ETH2_NODE_RPC_ADDRESS" \\\n  --env "MEMBER_PRIV_KEY=$ORACLE_PRIVATE_KEY_0X_PREFIXED" \\\n  --env "POOL_CONTRACT=0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84" \\\n  --env "STETH_PRICE_ORACLE_CONTRACT=0x3A6Bd15abf19581e411621D669B6a2bbe741ffD6" \\\n  --env "STETH_CURVE_POOL_CONTRACT=0xDC24316b9AE028F1497c275EB9192a3Ea0f67022" \\\n  --env "DAEMON=1" \\\n  lidofinance/oracle:2.1.0\n')),(0,o.kt)("p",null,"2.1.0 for G\xf6rli Testnet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'docker run -d --name lido-oracle \\\n  --env "WEB3_PROVIDER_URI=$ETH1_NODE_RPC_ADDRESS" \\\n  --env "BEACON_NODE=$ETH2_NODE_RPC_ADDRESS" \\\n  --env "MEMBER_PRIV_KEY=$ORACLE_PRIVATE_KEY_0X_PREFIXED" \\\n  --env "POOL_CONTRACT=0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F" \\\n  --env "STETH_PRICE_ORACLE_CONTRACT=0x4522dB9A6f804cb837E5fC9F547D320Da3edD49a" \\\n  --env "STETH_CURVE_POOL_CONTRACT=0xCEB67769c63cfFc6C8a6c68e85aBE1Df396B7aDA" \\\n  --env "DAEMON=1" \\\n  lidofinance/oracle:2.1.0\n')),(0,o.kt)("p",null,"This will start the oracle in daemon mode. You can also run it in a one-off mode, for example if you\u2019d prefer to trigger oracle execution as a ",(0,o.kt)("inlineCode",{parentName:"p"},"cron")," job. In this case, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"DAEMON")," environment variable to 0."),(0,o.kt)("h2",{id:"prometheus-metrics"},"Prometheus metrics"),(0,o.kt)("p",null,"Lido Oracle daemon exposes metrics via Prometheus exporter. We encourage Oracle operators to use them to monitor daemon reports and process status.\nPrometheus exporter is running on port 8000 and provides 5 logical metrics groups. Prefix for prometheus metrix by default is empty, but could be modified via ",(0,o.kt)("inlineCode",{parentName:"p"},"PROMETHEUS_PREFIX")," environment variable (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-oracle#full-list-of-configuration-options"},"full environment variables list"),")",(0,o.kt)("br",{parentName:"p"}),"\n","For the full list of available Prometheus metrics please check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-oracle#prometheus-metrics"},"the Lido oracle readme"),". We recommend to monitor at least the following ones:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"description"),(0,o.kt)("th",{parentName:"tr",align:null},"frequency"),(0,o.kt)("th",{parentName:"tr",align:null},"goal"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"reportableFrame")," ",(0,o.kt)("br",null)," ",(0,o.kt)("em",{parentName:"td"},"gauge")),(0,o.kt)("td",{parentName:"tr",align:null},"the report could be sent or is sending"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"nowEthV1BlockNumber")," ",(0,o.kt)("br",null)," ",(0,o.kt)("em",{parentName:"td"},"gauge")),(0,o.kt)("td",{parentName:"tr",align:null},"ETH1 latest block number"),(0,o.kt)("td",{parentName:"tr",align:null},"every COUNTDOWN_SLEEP seconds"),(0,o.kt)("td",{parentName:"tr",align:null},"should be increasing constantly and be aligned with ",(0,o.kt)("a",{parentName:"td",href:"https://etherscan.io/blocks"},"https://etherscan.io/blocks"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"daemonCountDown")," ",(0,o.kt)("br",null)," ",(0,o.kt)("em",{parentName:"td"},"gauge")),(0,o.kt)("td",{parentName:"tr",align:null},"time till the next oracle run in seconds"),(0,o.kt)("td",{parentName:"tr",align:null},"every COUNTDOWN_SLEEP seconds"),(0,o.kt)("td",{parentName:"tr",align:null},"should be decreasing down to 0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"finalizedEpoch")," ",(0,o.kt)("br",null)," ",(0,o.kt)("em",{parentName:"td"},"gauge")),(0,o.kt)("td",{parentName:"tr",align:null},"last finalized ETH2 epoch"),(0,o.kt)("td",{parentName:"tr",align:null},"every COUNTDOWN_SLEEP seconds"),(0,o.kt)("td",{parentName:"tr",align:null},"should go up at a rate of 1 per six munites")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"txSuccess")," ",(0,o.kt)("br",null)," ",(0,o.kt)("em",{parentName:"td"},"histogram")),(0,o.kt)("td",{parentName:"tr",align:null},"number of successful transactions"),(0,o.kt)("td",{parentName:"tr",align:null},"every SLEEP seconds"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"txRevert")," ",(0,o.kt)("br",null)," ",(0,o.kt)("em",{parentName:"td"},"histogram")),(0,o.kt)("td",{parentName:"tr",align:null},"number of failed transactions"),(0,o.kt)("td",{parentName:"tr",align:null},"every SLEEP seconds"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"process_virtual_memory_bytes")," ",(0,o.kt)("br",null)," ",(0,o.kt)("em",{parentName:"td"},"gauge")),(0,o.kt)("td",{parentName:"tr",align:null},"Virtual memory size in bytes."),(0,o.kt)("td",{parentName:"tr",align:null},"every call"),(0,o.kt)("td",{parentName:"tr",align:null},"normal RAM consumption is ~200Mb")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"process_resident_memory_bytes")," ",(0,o.kt)("br",null)," ",(0,o.kt)("em",{parentName:"td"},"gauge")),(0,o.kt)("td",{parentName:"tr",align:null},"Resident memory size in bytes."),(0,o.kt)("td",{parentName:"tr",align:null},"every call"),(0,o.kt)("td",{parentName:"tr",align:null},"normal RAM consumption is ~200Mb")))),(0,o.kt)("p",null,"Exception counters for debugging any errors which may arise:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"underpricedExceptionsCount")," ",(0,o.kt)("br",null)," ",(0,o.kt)("em",{parentName:"td"},"gauge")),(0,o.kt)("td",{parentName:"tr",align:null},"count of ValueError: replacement transaction underpriced")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"transactionTimeoutCount")," ",(0,o.kt)("br",null)," ",(0,o.kt)("em",{parentName:"td"},"gauge")),(0,o.kt)("td",{parentName:"tr",align:null},"count of web3.exceptions.TimeExhausted")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"beaconNodeTimeoutCount")," ",(0,o.kt)("br",null)," ",(0,o.kt)("em",{parentName:"td"},"gauge")),(0,o.kt)("td",{parentName:"tr",align:null},"count of beacon node connection timeouts")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"exceptionsCount")," ",(0,o.kt)("br",null)," ",(0,o.kt)("em",{parentName:"td"},"gauge")),(0,o.kt)("td",{parentName:"tr",align:null},"count of all other exceptions")))))}u.isMDXComponent=!0}}]);