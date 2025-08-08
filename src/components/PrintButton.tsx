'use client';

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 bg-brand/15 text-brand hover:bg-brand/20 active:bg-brand/25 transition-colors"
    >
      Print to PDF
    </button>
  );
}


