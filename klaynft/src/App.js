import logo from './logo.svg';
import './App.css';
import Caver from 'caver-js';

const count_abi='[ { "constant": true, "inputs": [], "name": "count", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getBlockNumber", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_count", "type": "uint256" } ], "name": "setCount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ]';
const contract_addr='0xCC02DA19F9DE5eB022478444a5a50f9a4B8b2F6c';
const ACCESSKEY='KASK5HKLJGE1VGFKVJPNUAOS';
const SECRETKEY='ex0fzXJiVEwYoJ93cDldJfMOdP3KHgHVMaA-9I-d';
const CHAINID= '1001';
//mainnet 8217 testnet 1001
const option = {
    headers: [
        {
            name: "Authorization",
            value: "Basic" + Buffer.from(ACCESSKEY + SECRETKEY)
        },
        {name:"x-chain-id", value:CHAINID}
        
    ]
}
const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", option))
const countContract = new caver.contract(JSON.parse(count_abi), contract_addr);
const readCount = async() => {
    const _count = await countContract.methods.count().call();
    console.log(_count);
}
function App() {
  readCount();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
