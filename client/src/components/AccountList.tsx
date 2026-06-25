import {
  AlertCircleIcon,
  CheckCircle2Icon,
  Divide,
  PlusIcon,
  UnplugIcon,
} from "lucide-react";
import React from "react";
import { PLATFORMS } from "../assets/assets";

interface AccountListProps {
  accounts: any[];
  onDisconnect: (accountId: string) => Promise<void>;
}
const AccountList = ({ accounts, onDisconnect }: AccountListProps) => {
  const handelDisconnect = async (accountId: string) => {
    const confirm = window.confirm("Are You sure you wnat to this ?");

    if (!confirm) {
      return;
    }
    onDisconnect(accountId);
  };
  if (accounts.length === 0)
    return (
      <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center py-20 px-6">
        <div className="size-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 border border-slate-100">
          <PlusIcon className="size-6 text-slate-600 opacity-50" />
        </div>
        <p className="text-slate-700 text-lg">No account connected</p>
        <p className="text-sm text-slate-400 mt-1  text-center">
          Connect your First social platform to start scheduling and automating
          your content
        </p>
      </div>
    );
  return (
    <div className="grid   grid-cols-1 sm:grid-cols-2 gap-4">
      {accounts.map((account, index) => {
        const meta = PLATFORMS.find((p) => {
          return p.id === account.platform;
        });
        if (!meta) return null;
        return (
          <div
            key={index}
            className="group bg-white border border-slate-300 rounded-2xl p-5 flex items-center gap-4 hover:border-slate-400 transition-all"
          >
            <div>
              <meta.icon className="size-6 text-slate-500" />
            </div>
            <div>
              <div className="text-slate-900 truncate">{account.handle}</div>
              <div className="text-sm text-slate-500 mt-0.5">{meta.name}</div>
            </div>

            {/* shrink 0 mean save its size always */}
            <div className="flex items-center gap-1.5 shrink-0">
              {account.status === "connected" ? (
                <>
                  <AlertCircleIcon className="size-4 text-green-500" />
                  <span className="text-emerald-600 text-xs">Connected</span>
                </>
              ) : (
                <>
                  <AlertCircleIcon className="size-4 text-amber-500" />
                  <span className="text-xs text-amber-600">Disconnected</span>
                </>
              )}
            </div>
            <button
              onClick={() => {
                handelDisconnect(account._id);
              }}
              title="Disconnedt account"
              className="ml-2 p-1.5 rounded-lg text-slate-300 group-hover:text-red-500 transition-all:"
            >
              <UnplugIcon className="size-6" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AccountList;
