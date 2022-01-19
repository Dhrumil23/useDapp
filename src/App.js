import { useEtherBalance, useEthers, useTokenBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import "./App.css";

function App() {
  const { activateBrowserWallet, account, chainId, deactivate } = useEthers();
  const tokenAddress = "0x76A8b4813bB860488C3f14d5B51E77f2740E8c90";
  const tokenBalance = useTokenBalance(tokenAddress, account);
  const etherBalance = useEtherBalance(account);
  console.log("etherBalance: ", Number(etherBalance) / 10 ** 18);

  return (
    <div>
      <div>
        <button onClick={() => activateBrowserWallet()}>Connect</button>
        <button onClick={() => deactivate()}>Disconnect</button>
      </div>
      {chainId && <p>Chain Id: {chainId} </p>}
      {etherBalance && <p>Ether balance: {formatEther(etherBalance)} ETH </p>}
      {tokenBalance && <p>Token Balance:{formatEther(tokenBalance)} RWD</p>}
    </div>
  );
}

export default App;
