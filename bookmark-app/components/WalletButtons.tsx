import { useClient, useConnect, useWallet } from "@wallet01/react";
import { toast } from "react-hot-toast";
import WalletIcons from "../public/assets/WalletIcons";

const ConnectButtons = () => {
  const { connectors, isAutoConnecting } = useClient();
  const { activeConnector, isConnected, chainId } = useWallet();
  const { connect, isError, error } = useConnect();

  if (isError && error) {
    toast.error(error.message);
  }

  if (isAutoConnecting) {
    console.log("isAutoConnecting");
  }

  return (
    <div className="flex flex-col w-1/2 m-auto">
      <div className="grid grid-cols-3 gap-10 items-center mt-5 justify-center">
        {connectors.map((connector) => (
          <button
            key={connector.name}
            disabled={isConnected && connector !== activeConnector}
            onClick={() => {
              connect({
                connector: connector,
              });
              toast(connector.name);
            }}
            className="w-20 h-20 p-3 text-lg flex justify-center items-center leading-relaxed aspect-square rounded-lg border border-slate-600 bg-slate-700"
          >
            {WalletIcons[connector.name] ?? connector.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConnectButtons;
