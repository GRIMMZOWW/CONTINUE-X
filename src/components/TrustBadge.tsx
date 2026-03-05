export default function TrustBadge() {
  return (
    <div className="w-full bg-[#0D1117] h-10 flex items-center justify-center border-b border-[#1E293B]">
      <div className="flex items-center gap-3">
        <div className="relative flex h-2 w-2">
          <span className="animate-pulse-green absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </div>
        <span className="text-[12px] font-medium text-[#10B981] tracking-tight uppercase">
          Your chat is never stored. Processed in memory only.
        </span>
      </div>
    </div>
  );
}
