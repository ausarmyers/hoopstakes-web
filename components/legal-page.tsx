import type { ReactNode } from 'react'

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff7ed,_#ffffff_45%,_#f8fafc_100%)] px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-4xl rounded-3xl border border-orange-100 bg-white/90 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
        <div className="mb-8 space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">HoopStakes</p>
          <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
          <p className="text-sm italic text-slate-500">Last updated: {updated}</p>
        </div>
        <div className="space-y-6 text-[15px] leading-7 text-slate-700">{children}</div>
      </div>
    </main>
  )
}
