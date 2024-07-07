import "./App.css";
import { assets } from "chain-registry";
const assetList = assets.find(({ chain_name }) => chain_name === "osmosis");
console.log(assetList);

function App() {
  return (
    <>
      <div>{assetList.chain_name}</div>
    </>
  );
}

export default App;
