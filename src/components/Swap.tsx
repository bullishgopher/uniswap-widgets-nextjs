import { useEthersProvider } from "@/provider";
import { JsonRpcProvider, SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";

export const Swap = () => {
  const provider = useEthersProvider();
  return (
    <div>
      <SwapWidget
        provider={provider as JsonRpcProvider}
        jsonRpcUrlMap={{
          1: [
            "https://eth-sepolia.g.alchemy.com/v2/Z1TiAbk4rG-ZI73AYpuXYNTTuBVOiMEU",
          ],
        }}
        defaultChainId={1}
      />
    </div>
  );
};
