
import { dexConfig } from './dexSwitcherConfig';

export function checkDEXConnection() {
  const dex = dexConfig.defaultDEX;
  const rpc = dexConfig.supportedDEXs[dex].rpc;
  fetch(rpc)
    .then(() => console.log(`✅ ${dex} RPC available: ${rpc}`))
    .catch(() => console.warn(`❌ ${dex} RPC not reachable!`));
}

checkDEXConnection();
