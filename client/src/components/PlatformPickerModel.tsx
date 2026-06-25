import { CheckCircleIcon, ExternalLinkIcon, XIcon } from "lucide-react";
import React from "react";
import { PLATFORMS } from "../assets/assets";

interface PlatformPickerModelProps {
  connectedIds: string[];
  connecting: string | null;
  onClose: () => void;
  onConnect: (platformId: string) => void;
}
const PlatformPickerModel = ({
  connectedIds,
  connecting,
  onClose,
  onConnect,
}: PlatformPickerModelProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-2xl">
      <div
        role="dialog"
        // ماذا تفعل؟ تخبر المتصفح: "هذا ليس مجرد div عادي، هذا العنصر هو نافذة منبثقة (Modal/Dialog)".
        aria-modal="true"
        // بدون هذه الخاصية: إذا ضغط المستخدم على زر (Tab) في لوحة المفاتيح، سيظل يتنقل بين العناصر الموجودة خلف النافذة المنبثقة.
        // الفائدة: عندما تكون قيمتها true، فإنها تمنع المتصفح من السماح للمستخدم بالتفاعل مع أي شيء خارج النافذة (مثل الأزرار أو الروابط الموجودة في خلفية الصفحة) حتى يقوم المستخدم بإغلاق هذه النافذة. هي تعزز دور الـ dialog
        aria-labelledby="platform-picker-title"
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-slate-100"
      >
        {/* header */}
        <div className="flex items-center justify-between px-6 py-4 shadow">
          <h3 id="platform-picker-title" className="text-slate-800">
            Choose a platform{" "}
          </h3>
          <button
            aria-label="Close platform picker"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <XIcon className="size-4" />
          </button>
        </div>
        {/* platform list */}
        <div className="p-6 flex flex-col gap-2  ">
          {PLATFORMS.map((p) => {
            const isConnected = connectedIds.includes(p.id);
            const isConnecting = connecting === p.id;

            return (
              <button
                key={p.id}
                className={`flex items-center gap-3 p-3.5
                   rounded-xl border text-left transition-all 
                   disabled:cursor-not-allowed
                   ${
                     isConnected
                       ? "border-green-500  cursor-grab pointer-events-none"
                       : "border-slate-300 hover:bg-slate-100 "
                   }
                ${isConnecting ? "opacity-60" : " "}`}
                disabled={isConnected || isConnecting}
                onClick={() => onConnect(p.id)}
              >
                <div className="p-2">
                  <p.icon
                    className={`size-5 ${isConnected ? "text-blue-600" : "text-slate-500"}`}
                  />
                </div>
                {/* label */}
                <div className="flex-1 min-w-0">
                  <div
                    className={`text-sm ${isConnected ? "text-green-700" : "text-slate-600"}`}
                  >
                    {p.name}
                  </div>
                  <div>{isConnected ? "Already Connected" : p.description}</div>
                </div>
                {/* status */}
                {isConnected && (
                  <CheckCircleIcon className="text-green-500 shrink-0" />
                )}
                {isConnecting && (
                  <div className="size-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin shrink-0"></div>
                )}
                {!isConnected && !isConnecting && (
                  <ExternalLinkIcon className="size-3.5 text-slate-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformPickerModel;
