import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ONE_GWEI: bigint = 1_000_000_000n;

const MetaNFTBuild = buildModule("MetaNFTModule", (m) => {
  const metaNFT = m.contract("MetaNFT");

  return { metaNFT };
});

export default MetaNFTBuild;
