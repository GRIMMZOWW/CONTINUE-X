import { Shield } from "lucide-react";

export default function TrustBadge() {
  return (
    <div className="w-full bg-zinc-950 py-2 px-4 flex items-center justify-center gap-2 border-b border-zinc-800">
      <Shield className="w-4 h-4 text-emerald-500 fill-emerald-500/10" />
      <span className="text-xs font-medium text-emerald-500 tracking-wide uppercase">
        Your chat is never stored. Processed in memory only.
      </span>
    </div>
  );
}
