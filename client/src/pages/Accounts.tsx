import React, { useEffect, useState } from "react";
import {
  dummyAccountsData,
  dummyActivityData,
  PLATFORMS,
} from "../assets/assets";
import { PlusIcon } from "lucide-react";
import AccountList from "../components/AccountList";
import PlatformPickerModel from "../components/PlatformPickerModel";

/**
 * Renders the Accounts page.
 */
function Accounts() {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [connecting, setconnecting] = useState<string | null>(null);
  const [showPlatformPicker, setShowPlatformPicker] = useState<boolean>(false);

  const fetchAccounts = async (
    isSync = false,
    platform?: string | null,
    successMsg?: string,
  ) => {
    setAccounts(dummyAccountsData);
    console.log(isSync, platform, successMsg);
  };
  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleConnect = async (platformId: string) => {
    console.log(platformId);
    setconnecting(platformId);

    setTimeout(() => {
      setconnecting(null);
      setAccounts((prev) => [...prev, dummyActivityData[0]]);
      setShowPlatformPicker(false);
    }, 1000);
  };
  const handleDisconnect = async (accountId: string) => {
    console.log(accountId);
    setAccounts(
      accounts.filter((a) => {
        return a._id !== accountId;
      }),
    );
  };
  const connectedIds = accounts.map((a) => {
    return a.platform;
  });

  return (
    <div className="space-y-8 max-w-4xl">
      {/* header  */}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
        <div>
          <h2 className="text-xl text-slate-500 ">Connected Accounts </h2>
          <p className="text-slate-600 text-sm mt-0.5">
            {accounts.length} of {PLATFORMS.length} platforms connected
          </p>
        </div>
        <button
          onClick={() => {
            setShowPlatformPicker(true);
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-red-500 hover:bg-red-00 text-white rounded-full font-medium transition-all w-full sm:w-auto justify-center"
        >
          <PlusIcon className="size-4"></PlusIcon>
          Connect Account
        </button>
      </div>
      {/* Platform picker modal  */}
      {showPlatformPicker && (
        <PlatformPickerModel
          connectedIds={connectedIds}
          connecting={connecting}
          onClose={() => {
            setShowPlatformPicker(false);
          }}
          onConnect={handleConnect}
        />
      )}
      {/* connected accounts  */}
      <AccountList accounts={accounts} onDisconnect={handleDisconnect} />
    </div>
  );
}

export default Accounts;
