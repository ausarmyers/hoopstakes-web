import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy - HoopStakes',
  description: 'Privacy Policy for HoopStakes',
}

export default function PrivacyPage() {
  return (
    <LegalPage title="🏀 HoopStakes Privacy Policy" updated="May 12, 2026">
      <p>
        <strong>HoopStakes</strong> ("we," "our," or "us") is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application HoopStakes (the "App").
      </p>
      <p>
        By using HoopStakes, you agree to the collection and use of information in accordance with this policy. If you do not agree with our terms and practices,
        please do not use the App.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-slate-950">1. Information We Collect</h2>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">1.1 Account Information</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Email Address:</strong> Collected during sign-up for account creation, recovery, and cashout verification</li>
          <li><strong>Display Name:</strong> Your chosen basketball nickname shown on leaderboards</li>
          <li><strong>Date of Birth:</strong> Collected to enforce our 13+ age requirement</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">1.2 Profile & Gameplay Data</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>City/Location Preference:</strong> Your selected home city for court matching</li>
          <li><strong>Basketball Position:</strong> PG, SG, SF, PF, or C</li>
          <li><strong>LEO Score & Statistics:</strong> Wins, losses, win streaks, average margin, games played</li>
          <li><strong>Match History:</strong> Date, location, opponents, scores, and dispute status</li>
          <li><strong>Tier Status:</strong> Rookie, Hoopster, or Elite membership level</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-950">2. How We Use Your Information</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Provide Core Features:</strong> Court check-in, match submission, LEO scoring, leaderboards</li>
          <li><strong>Account Management:</strong> Authentication, profile updates, password recovery</li>
          <li><strong>Fair Play Enforcement:</strong> Geofence verification, dispute resolution, fraud detection</li>
          <li><strong>Cashout Processing:</strong> Verify identity, process payouts to eligible users</li>
          <li><strong>App Improvement:</strong> Analyze usage patterns, fix bugs, optimize performance</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-950">3. Contact</h2>
        <p>
          Questions about this policy? Email <a className="font-semibold text-orange-600 underline" href="mailto:privacy@hoopstakes.com">privacy@hoopstakes.com</a>.
        </p>
      </section>
    </LegalPage>
  )
}
