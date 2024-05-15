import "@dex-swap/widgets/fonts.css";
import dynamic from "next/dynamic";

const SwapWidget = dynamic(
  () => import("@dex-swap/widgets").then((pkg) => pkg.SwapWidget),
  {
    ssr: false,
  },
);

const JSON_RPC_URL = "https://cloudflare-eth.com";
const TOKEN_LIST = "https://ipfs.io/ipns/tokens.uniswap.org";

export const Swap = () => {
  return (
    <div>
      <SwapWidget
        jsonRpcUrlMap={{
          1: [JSON_RPC_URL],
        }}
        tokenList={TOKEN_LIST}
        defaultChainId={1}
      />
    </div>
  );
};
