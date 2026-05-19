import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms of Service - HoopStakes',
  description: 'Terms of Service for HoopStakes',
}

export default function TermsPage() {
  return (
    <LegalPage title="🏀 HoopStakes Terms of Service" updated="May 12, 2026">
      <p>
        <strong>PLEASE READ THESE TERMS CAREFULLY BEFORE USING HOOPSTAKES.</strong>
      </p>
      <p>
        By downloading, accessing, or using the HoopStakes mobile application (the "App"), you agree to be bound by these Terms of Service ("Terms").
        If you do not agree, do not use the App.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-slate-950">1. Acceptance of Terms</h2>
        <p>
          These Terms constitute a legally binding agreement between you and HoopStakes. By using the App, you represent that you are at least 13 years old and have
          the authority to enter into this agreement.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-950">2. What HoopStakes Is</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Court check-in at participating basketball courts</li>
          <li>Match submission with opponent confirmation</li>
          <li>LEO scoring based on wins, margin, streaks, and consistency</li>
          <li>Virtual credits that can be redeemed for cash after verification</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-950">3. Contact</h2>
        <p>
          Questions about these Terms? Email <a className="font-semibold text-orange-600 underline" href="mailto:legal@hoopstakes.com">legal@hoopstakes.com</a>.
        </p>
      </section>
    </LegalPage>
  )
}
