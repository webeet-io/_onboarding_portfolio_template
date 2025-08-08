export function AmbientDrift() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Slightly stronger so it reads through backdrop blur */}
      <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl animate-float-subtler" />
      <div className="absolute top-1/3 right-8 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl animate-float-subtle" />
      <div className="absolute bottom-8 left-1/3 h-80 w-80 rounded-full bg-emerald-400/16 blur-3xl animate-drift-subtle" />
      {/* Soft central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[28rem] rounded-full bg-emerald-300/12 blur-[110px]" />
    </div>
  );
}


