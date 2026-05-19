import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HoopStakes Support',
  description: 'Support and contact page for HoopStakes',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff7ed,_#ffffff_45%,_#f8fafc_100%)] px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-3xl rounded-3xl border border-orange-100 bg-white/90 p-6 text-center shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">HoopStakes</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Support</h1>
        <p className="mt-4 text-slate-600">Need help? We've got your back.</p>

        <div className="my-8 rounded-2xl bg-slate-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Fastest Response</p>
          <a className="mt-2 block text-xl font-bold text-orange-600 underline decoration-orange-300 underline-offset-4" href="mailto:hello@hoopstakes.com">
            hello@hoopstakes.com
          </a>
          <p className="mt-2 text-sm text-slate-500">We respond within 24 hours on weekdays.</p>
        </div>

        <div className="space-y-4 text-left text-sm text-slate-600">
          <p>
            <strong className="text-slate-900">Privacy Policy:</strong>{' '}
            <Link className="font-semibold text-orange-600 underline" href="/privacy">
              /privacy
            </Link>
          </p>
          <p>
            <strong className="text-slate-900">Terms of Service:</strong>{' '}
            <Link className="font-semibold text-orange-600 underline" href="/terms">
              /terms
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
